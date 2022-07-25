console.log("hello world");

(() => { // path data polyfill
    // @info
    //   Polyfill for SVG getPathData() and setPathData() methods. Based on:
    //   - SVGPathSeg polyfill by Philip Rogers (MIT License)
    //     https://github.com/progers/pathseg
    //   - SVGPathNormalizer by Tadahisa Motooka (MIT License)
    //     https://github.com/motooka/SVGPathNormalizer/tree/master/src
    //   - arcToCubicCurves() by Dmitry Baranovskiy (MIT License)
    //     https://github.com/DmitryBaranovskiy/raphael/blob/v2.1.1/raphael.core.js#L1837
    // @author
    //   Jarosław Foksa
    // @license
    //   MIT License
    if (!SVGPathElement.prototype.getPathData || !SVGPathElement.prototype.setPathData) {
      (function() {
        var commandsMap = {
          "Z":"Z", "M":"M", "L":"L", "C":"C", "Q":"Q", "A":"A", "H":"H", "V":"V", "S":"S", "T":"T",
          "z":"Z", "m":"m", "l":"l", "c":"c", "q":"q", "a":"a", "h":"h", "v":"v", "s":"s", "t":"t"
        };

        var Source = function(string) {
          this._string = string;
          this._currentIndex = 0;
          this._endIndex = this._string.length;
          this._prevCommand = null;
          this._skipOptionalSpaces();
        };

        var isIE = window.navigator.userAgent.indexOf("MSIE ") !== -1;

        Source.prototype = {
          parseSegment: function() {
            var char = this._string[this._currentIndex];
            var command = commandsMap[char] ? commandsMap[char] : null;

            if (command === null) {
              // Possibly an implicit command. Not allowed if this is the first command.
              if (this._prevCommand === null) {
                return null;
              }

              // Check for remaining coordinates in the current command.
              if (
                (char === "+" || char === "-" || char === "." || (char >= "0" && char <= "9")) && this._prevCommand !== "Z"
              ) {
                if (this._prevCommand === "M") {
                  command = "L";
                }
                else if (this._prevCommand === "m") {
                  command = "l";
                }
                else {
                  command = this._prevCommand;
                }
              }
              else {
                command = null;
              }

              if (command === null) {
                return null;
              }
            }
            else {
              this._currentIndex += 1;
            }

            this._prevCommand = command;

            var values = null;
            var cmd = command.toUpperCase();

            if (cmd === "H" || cmd === "V") {
              values = [this._parseNumber()];
            }
            else if (cmd === "M" || cmd === "L" || cmd === "T") {
              values = [this._parseNumber(), this._parseNumber()];
            }
            else if (cmd === "S" || cmd === "Q") {
              values = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()];
            }
            else if (cmd === "C") {
              values = [
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber()
              ];
            }
            else if (cmd === "A") {
              values = [
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseArcFlag(),
                this._parseArcFlag(),
                this._parseNumber(),
                this._parseNumber()
              ];
            }
            else if (cmd === "Z") {
              this._skipOptionalSpaces();
              values = [];
            }

            if (values === null || values.indexOf(null) >= 0) {
              // Unknown command or known command with invalid values
              return null;
            }
            else {
              return {type: command, values: values};
            }
          },

          hasMoreData: function() {
            return this._currentIndex < this._endIndex;
          },

          peekSegmentType: function() {
            var char = this._string[this._currentIndex];
            return commandsMap[char] ? commandsMap[char] : null;
          },

          initialCommandIsMoveTo: function() {
            // If the path is empty it is still valid, so return true.
            if (!this.hasMoreData()) {
              return true;
            }

            var command = this.peekSegmentType();
            // Path must start with moveTo.
            return command === "M" || command === "m";
          },

          _isCurrentSpace: function() {
            var char = this._string[this._currentIndex];
            return char <= " " && (char === " " || char === "\n" || char === "\t" || char === "\r" || char === "\f");
          },

          _skipOptionalSpaces: function() {
            while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
              this._currentIndex += 1;
            }

            return this._currentIndex < this._endIndex;
          },

          _skipOptionalSpacesOrDelimiter: function() {
            if (
              this._currentIndex < this._endIndex &&
              !this._isCurrentSpace() &&
              this._string[this._currentIndex] !== ","
            ) {
              return false;
            }

            if (this._skipOptionalSpaces()) {
              if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ",") {
                this._currentIndex += 1;
                this._skipOptionalSpaces();
              }
            }
            return this._currentIndex < this._endIndex;
          },

          // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from
          // Source/core/svg/SVGParserUtilities.cpp.
          // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
          _parseNumber: function() {
            var exponent = 0;
            var integer = 0;
            var frac = 1;
            var decimal = 0;
            var sign = 1;
            var expsign = 1;
            var startIndex = this._currentIndex;

            this._skipOptionalSpaces();

            // Read the sign.
            if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "+") {
              this._currentIndex += 1;
            }
            else if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "-") {
              this._currentIndex += 1;
              sign = -1;
            }

            if (
              this._currentIndex === this._endIndex ||
              (
                (this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") &&
                this._string[this._currentIndex] !== "."
              )
            ) {
              // The first character of a number must be one of [0-9+-.].
              return null;
            }

            // Read the integer part, build right-to-left.
            var startIntPartIndex = this._currentIndex;

            while (
              this._currentIndex < this._endIndex &&
              this._string[this._currentIndex] >= "0" &&
              this._string[this._currentIndex] <= "9"
            ) {
              this._currentIndex += 1; // Advance to first non-digit.
            }

            if (this._currentIndex !== startIntPartIndex) {
              var scanIntPartIndex = this._currentIndex - 1;
              var multiplier = 1;

              while (scanIntPartIndex >= startIntPartIndex) {
                integer += multiplier * (this._string[scanIntPartIndex] - "0");
                scanIntPartIndex -= 1;
                multiplier *= 10;
              }
            }

            // Read the decimals.
            if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ".") {
              this._currentIndex += 1;

              // There must be a least one digit following the .
              if (
                this._currentIndex >= this._endIndex ||
                this._string[this._currentIndex] < "0" ||
                this._string[this._currentIndex] > "9"
              ) {
                return null;
              }

              while (
                this._currentIndex < this._endIndex &&
                this._string[this._currentIndex] >= "0" &&
                this._string[this._currentIndex] <= "9"
              ) {
                frac *= 10;
                decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                this._currentIndex += 1;
              }
            }

            // Read the exponent part.
            if (
              this._currentIndex !== startIndex &&
              this._currentIndex + 1 < this._endIndex &&
              (this._string[this._currentIndex] === "e" || this._string[this._currentIndex] === "E") &&
              (this._string[this._currentIndex + 1] !== "x" && this._string[this._currentIndex + 1] !== "m")
            ) {
              this._currentIndex += 1;

              // Read the sign of the exponent.
              if (this._string[this._currentIndex] === "+") {
                this._currentIndex += 1;
              }
              else if (this._string[this._currentIndex] === "-") {
                this._currentIndex += 1;
                expsign = -1;
              }

              // There must be an exponent.
              if (
                this._currentIndex >= this._endIndex ||
                this._string[this._currentIndex] < "0" ||
                this._string[this._currentIndex] > "9"
              ) {
                return null;
              }

              while (
                this._currentIndex < this._endIndex &&
                this._string[this._currentIndex] >= "0" &&
                this._string[this._currentIndex] <= "9"
              ) {
                exponent *= 10;
                exponent += (this._string[this._currentIndex] - "0");
                this._currentIndex += 1;
              }
            }

            var number = integer + decimal;
            number *= sign;

            if (exponent) {
              number *= Math.pow(10, expsign * exponent);
            }

            if (startIndex === this._currentIndex) {
              return null;
            }

            this._skipOptionalSpacesOrDelimiter();

            return number;
          },

          _parseArcFlag: function() {
            if (this._currentIndex >= this._endIndex) {
              return null;
            }

            var flag = null;
            var flagChar = this._string[this._currentIndex];

            this._currentIndex += 1;

            if (flagChar === "0") {
              flag = 0;
            }
            else if (flagChar === "1") {
              flag = 1;
            }
            else {
              return null;
            }

            this._skipOptionalSpacesOrDelimiter();
            return flag;
          }
        };

        var parsePathDataString = function(string) {
          if (!string || string.length === 0) return [];

          var source = new Source(string);
          var pathData = [];

          if (source.initialCommandIsMoveTo()) {
            while (source.hasMoreData()) {
              var pathSeg = source.parseSegment();

              if (pathSeg === null) {
                break;
              }
              else {
                pathData.push(pathSeg);
              }
            }
          }

          return pathData;
        }

        var setAttribute = SVGPathElement.prototype.setAttribute;
        var removeAttribute = SVGPathElement.prototype.removeAttribute;

        var $cachedPathData = window.Symbol ? Symbol() : "__cachedPathData";
        var $cachedNormalizedPathData = window.Symbol ? Symbol() : "__cachedNormalizedPathData";

        // @info
        //   Get an array of corresponding cubic bezier curve parameters for given arc curve paramters.
        var arcToCubicCurves = function(x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, _recursive) {
          var degToRad = function(degrees) {
            return (Math.PI * degrees) / 180;
          };

          var rotate = function(x, y, angleRad) {
            var X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
            var Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
            return {x: X, y: Y};
          };

          var angleRad = degToRad(angle);
          var params = [];
          var f1, f2, cx, cy;

          if (_recursive) {
            f1 = _recursive[0];
            f2 = _recursive[1];
            cx = _recursive[2];
            cy = _recursive[3];
          }
          else {
            var p1 = rotate(x1, y1, -angleRad);
            x1 = p1.x;
            y1 = p1.y;

            var p2 = rotate(x2, y2, -angleRad);
            x2 = p2.x;
            y2 = p2.y;

            var x = (x1 - x2) / 2;
            var y = (y1 - y2) / 2;
            var h = (x * x) / (r1 * r1) + (y * y) / (r2 * r2);

            if (h > 1) {
              h = Math.sqrt(h);
              r1 = h * r1;
              r2 = h * r2;
            }

            var sign;

            if (largeArcFlag === sweepFlag) {
              sign = -1;
            }
            else {
              sign = 1;
            }

            var r1Pow = r1 * r1;
            var r2Pow = r2 * r2;

            var left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
            var right = r1Pow * y * y + r2Pow * x * x;

            var k = sign * Math.sqrt(Math.abs(left/right));

            cx = k * r1 * y / r2 + (x1 + x2) / 2;
            cy = k * -r2 * x / r1 + (y1 + y2) / 2;

            f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
            f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));

            if (x1 < cx) {
              f1 = Math.PI - f1;
            }
            if (x2 < cx) {
              f2 = Math.PI - f2;
            }

            if (f1 < 0) {
              f1 = Math.PI * 2 + f1;
            }
            if (f2 < 0) {
              f2 = Math.PI * 2 + f2;
            }

            if (sweepFlag && f1 > f2) {
              f1 = f1 - Math.PI * 2;
            }
            if (!sweepFlag && f2 > f1) {
              f2 = f2 - Math.PI * 2;
            }
          }

          var df = f2 - f1;

          if (Math.abs(df) > (Math.PI * 120 / 180)) {
            var f2old = f2;
            var x2old = x2;
            var y2old = y2;

            if (sweepFlag && f2 > f1) {
              f2 = f1 + (Math.PI * 120 / 180) * (1);
            }
            else {
              f2 = f1 + (Math.PI * 120 / 180) * (-1);
            }

            x2 = cx + r1 * Math.cos(f2);
            y2 = cy + r2 * Math.sin(f2);
            params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [f2, f2old, cx, cy]);
          }

          df = f2 - f1;

          var c1 = Math.cos(f1);
          var s1 = Math.sin(f1);
          var c2 = Math.cos(f2);
          var s2 = Math.sin(f2);
          var t = Math.tan(df / 4);
          var hx = 4 / 3 * r1 * t;
          var hy = 4 / 3 * r2 * t;

          var m1 = [x1, y1];
          var m2 = [x1 + hx * s1, y1 - hy * c1];
          var m3 = [x2 + hx * s2, y2 - hy * c2];
          var m4 = [x2, y2];

          m2[0] = 2 * m1[0] - m2[0];
          m2[1] = 2 * m1[1] - m2[1];

          if (_recursive) {
            return [m2, m3, m4].concat(params);
          }
          else {
            params = [m2, m3, m4].concat(params);

            var curves = [];

            for (var i = 0; i < params.length; i+=3) {
              var r1 = rotate(params[i][0], params[i][1], angleRad);
              var r2 = rotate(params[i+1][0], params[i+1][1], angleRad);
              var r3 = rotate(params[i+2][0], params[i+2][1], angleRad);
              curves.push([r1.x, r1.y, r2.x, r2.y, r3.x, r3.y]);
            }

            return curves;
          }
        };

        var clonePathData = function(pathData) {
          return pathData.map( function(seg) {
            return {type: seg.type, values: Array.prototype.slice.call(seg.values)}
          });
        };

        // @info
        //   Takes any path data, returns path data that consists only from absolute commands.
        var absolutizePathData = function(pathData) {
          var absolutizedPathData = [];

          var currentX = null;
          var currentY = null;

          var subpathX = null;
          var subpathY = null;

          pathData.forEach( function(seg) {
            var type = seg.type;

            if (type === "M") {
              var x = seg.values[0];
              var y = seg.values[1];

              absolutizedPathData.push({type: "M", values: [x, y]});

              subpathX = x;
              subpathY = y;

              currentX = x;
              currentY = y;
            }

            else if (type === "m") {
              var x = currentX + seg.values[0];
              var y = currentY + seg.values[1];

              absolutizedPathData.push({type: "M", values: [x, y]});

              subpathX = x;
              subpathY = y;

              currentX = x;
              currentY = y;
            }

            else if (type === "L") {
              var x = seg.values[0];
              var y = seg.values[1];

              absolutizedPathData.push({type: "L", values: [x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "l") {
              var x = currentX + seg.values[0];
              var y = currentY + seg.values[1];

              absolutizedPathData.push({type: "L", values: [x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "C") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x2 = seg.values[2];
              var y2 = seg.values[3];
              var x = seg.values[4];
              var y = seg.values[5];

              absolutizedPathData.push({type: "C", values: [x1, y1, x2, y2, x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "c") {
              var x1 = currentX + seg.values[0];
              var y1 = currentY + seg.values[1];
              var x2 = currentX + seg.values[2];
              var y2 = currentY + seg.values[3];
              var x = currentX + seg.values[4];
              var y = currentY + seg.values[5];

              absolutizedPathData.push({type: "C", values: [x1, y1, x2, y2, x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "Q") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              absolutizedPathData.push({type: "Q", values: [x1, y1, x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "q") {
              var x1 = currentX + seg.values[0];
              var y1 = currentY + seg.values[1];
              var x = currentX + seg.values[2];
              var y = currentY + seg.values[3];

              absolutizedPathData.push({type: "Q", values: [x1, y1, x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "A") {
              var x = seg.values[5];
              var y = seg.values[6];

              absolutizedPathData.push({
                type: "A",
                values: [seg.values[0], seg.values[1], seg.values[2], seg.values[3], seg.values[4], x, y]
              });

              currentX = x;
              currentY = y;
            }

            else if (type === "a") {
              var x = currentX + seg.values[5];
              var y = currentY + seg.values[6];

              absolutizedPathData.push({
                type: "A",
                values: [seg.values[0], seg.values[1], seg.values[2], seg.values[3], seg.values[4], x, y]
              });

              currentX = x;
              currentY = y;
            }

            else if (type === "H") {
              var x = seg.values[0];
              absolutizedPathData.push({type: "H", values: [x]});
              currentX = x;
            }

            else if (type === "h") {
              var x = currentX + seg.values[0];
              absolutizedPathData.push({type: "H", values: [x]});
              currentX = x;
            }

            else if (type === "V") {
              var y = seg.values[0];
              absolutizedPathData.push({type: "V", values: [y]});
              currentY = y;
            }

            else if (type === "v") {
              var y = currentY + seg.values[0];
              absolutizedPathData.push({type: "V", values: [y]});
              currentY = y;
            }

            else if (type === "S") {
              var x2 = seg.values[0];
              var y2 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              absolutizedPathData.push({type: "S", values: [x2, y2, x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "s") {
              var x2 = currentX + seg.values[0];
              var y2 = currentY + seg.values[1];
              var x = currentX + seg.values[2];
              var y = currentY + seg.values[3];

              absolutizedPathData.push({type: "S", values: [x2, y2, x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "T") {
              var x = seg.values[0];
              var y = seg.values[1]

              absolutizedPathData.push({type: "T", values: [x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "t") {
              var x = currentX + seg.values[0];
              var y = currentY + seg.values[1]

              absolutizedPathData.push({type: "T", values: [x, y]});

              currentX = x;
              currentY = y;
            }

            else if (type === "Z" || type === "z") {
              absolutizedPathData.push({type: "Z", values: []});

              currentX = subpathX;
              currentY = subpathY;
            }
          });

          return absolutizedPathData;
        };

        // @info
        //   Takes path data that consists only from absolute commands, returns path data that consists only from
        //   "M", "L", "C" and "Z" commands.
        var reducePathData = function(pathData) {
          var reducedPathData = [];
          var lastType = null;

          var lastControlX = null;
          var lastControlY = null;

          var currentX = null;
          var currentY = null;

          var subpathX = null;
          var subpathY = null;

          pathData.forEach( function(seg) {
            if (seg.type === "M") {
              var x = seg.values[0];
              var y = seg.values[1];

              reducedPathData.push({type: "M", values: [x, y]});

              subpathX = x;
              subpathY = y;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "C") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x2 = seg.values[2];
              var y2 = seg.values[3];
              var x = seg.values[4];
              var y = seg.values[5];

              reducedPathData.push({type: "C", values: [x1, y1, x2, y2, x, y]});

              lastControlX = x2;
              lastControlY = y2;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "L") {
              var x = seg.values[0];
              var y = seg.values[1];

              reducedPathData.push({type: "L", values: [x, y]});

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "H") {
              var x = seg.values[0];

              reducedPathData.push({type: "L", values: [x, currentY]});

              currentX = x;
            }

            else if (seg.type === "V") {
              var y = seg.values[0];

              reducedPathData.push({type: "L", values: [currentX, y]});

              currentY = y;
            }

            else if (seg.type === "S") {
              var x2 = seg.values[0];
              var y2 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              var cx1, cy1;

              if (lastType === "C" || lastType === "S") {
                cx1 = currentX + (currentX - lastControlX);
                cy1 = currentY + (currentY - lastControlY);
              }
              else {
                cx1 = currentX;
                cy1 = currentY;
              }

              reducedPathData.push({type: "C", values: [cx1, cy1, x2, y2, x, y]});

              lastControlX = x2;
              lastControlY = y2;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "T") {
              var x = seg.values[0];
              var y = seg.values[1];

              var x1, y1;

              if (lastType === "Q" || lastType === "T") {
                x1 = currentX + (currentX - lastControlX);
                y1 = currentY + (currentY - lastControlY);
              }
              else {
                x1 = currentX;
                y1 = currentY;
              }

              var cx1 = currentX + 2 * (x1 - currentX) / 3;
              var cy1 = currentY + 2 * (y1 - currentY) / 3;
              var cx2 = x + 2 * (x1 - x) / 3;
              var cy2 = y + 2 * (y1 - y) / 3;

              reducedPathData.push({type: "C", values: [cx1, cy1, cx2, cy2, x, y]});

              lastControlX = x1;
              lastControlY = y1;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "Q") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              var cx1 = currentX + 2 * (x1 - currentX) / 3;
              var cy1 = currentY + 2 * (y1 - currentY) / 3;
              var cx2 = x + 2 * (x1 - x) / 3;
              var cy2 = y + 2 * (y1 - y) / 3;

              reducedPathData.push({type: "C", values: [cx1, cy1, cx2, cy2, x, y]});

              lastControlX = x1;
              lastControlY = y1;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "A") {
              var r1 = Math.abs(seg.values[0]);
              var r2 = Math.abs(seg.values[1]);
              var angle = seg.values[2];
              var largeArcFlag = seg.values[3];
              var sweepFlag = seg.values[4];
              var x = seg.values[5];
              var y = seg.values[6];

              if (r1 === 0 || r2 === 0) {
                reducedPathData.push({type: "C", values: [currentX, currentY, x, y, x, y]});

                currentX = x;
                currentY = y;
              }
              else {
                if (currentX !== x || currentY !== y) {
                  var curves = arcToCubicCurves(currentX, currentY, x, y, r1, r2, angle, largeArcFlag, sweepFlag);

                  curves.forEach( function(curve) {
                    reducedPathData.push({type: "C", values: curve});
                  });

                  currentX = x;
                  currentY = y;
                }
              }
            }

            else if (seg.type === "Z") {
              reducedPathData.push(seg);

              currentX = subpathX;
              currentY = subpathY;
            }

            lastType = seg.type;
          });

          return reducedPathData;
        };

        SVGPathElement.prototype.setAttribute = function(name, value) {
          if (name === "d") {
            this[$cachedPathData] = null;
            this[$cachedNormalizedPathData] = null;
          }

          setAttribute.call(this, name, value);
        };

        SVGPathElement.prototype.removeAttribute = function(name, value) {
          if (name === "d") {
            this[$cachedPathData] = null;
            this[$cachedNormalizedPathData] = null;
          }

          removeAttribute.call(this, name);
        };

        SVGPathElement.prototype.getPathData = function(options) {
          if (options && options.normalize) {
            if (this[$cachedNormalizedPathData]) {
              return clonePathData(this[$cachedNormalizedPathData]);
            }
            else {
              var pathData;

              if (this[$cachedPathData]) {
                pathData = clonePathData(this[$cachedPathData]);
              }
              else {
                pathData = parsePathDataString(this.getAttribute("d") || "");
                this[$cachedPathData] = clonePathData(pathData);
              }

              var normalizedPathData = reducePathData(absolutizePathData(pathData));
              this[$cachedNormalizedPathData] = clonePathData(normalizedPathData);
              return normalizedPathData;
            }
          }
          else {
            if (this[$cachedPathData]) {
              return clonePathData(this[$cachedPathData]);
            }
            else {
              var pathData = parsePathDataString(this.getAttribute("d") || "");
              this[$cachedPathData] = clonePathData(pathData);
              return pathData;
            }
          }
        };

        SVGPathElement.prototype.setPathData = function(pathData) {
          if (pathData.length === 0) {
            if (isIE) {
              // @bugfix https://github.com/mbostock/d3/issues/1737
              this.setAttribute("d", "");
            }
            else {
              this.removeAttribute("d");
            }
          }
          else {
            var d = "";

            for (var i = 0, l = pathData.length; i < l; i += 1) {
              var seg = pathData[i];

              if (i > 0) {
                d += " ";
              }

              d += seg.type;

              if (seg.values && seg.values.length > 0) {
                d += " " + seg.values.join(" ");
              }
            }

            this.setAttribute("d", d);
          }
        };

        SVGRectElement.prototype.getPathData = function(options) {
          var x = this.x.baseVal.value;
          var y = this.y.baseVal.value;
          var width = this.width.baseVal.value;
          var height = this.height.baseVal.value;
          var rx = this.hasAttribute("rx") ? this.rx.baseVal.value : this.ry.baseVal.value;
          var ry = this.hasAttribute("ry") ? this.ry.baseVal.value : this.rx.baseVal.value;

          if (rx > width / 2) {
            rx = width / 2;
          }

          if (ry > height / 2) {
            ry = height / 2;
          }

          var pathData = [
            {type: "M", values: [x+rx, y]},
            {type: "H", values: [x+width-rx]},
            {type: "A", values: [rx, ry, 0, 0, 1, x+width, y+ry]},
            {type: "V", values: [y+height-ry]},
            {type: "A", values: [rx, ry, 0, 0, 1, x+width-rx, y+height]},
            {type: "H", values: [x+rx]},
            {type: "A", values: [rx, ry, 0, 0, 1, x, y+height-ry]},
            {type: "V", values: [y+ry]},
            {type: "A", values: [rx, ry, 0, 0, 1, x+rx, y]},
            {type: "Z", values: []}
          ];

          // Get rid of redundant "A" segs when either rx or ry is 0
          pathData = pathData.filter(function(s) {
            return s.type === "A" && (s.values[0] === 0 || s.values[1] === 0) ? false : true;
          });

          if (options && options.normalize === true) {
            pathData = reducePathData(pathData);
          }

          return pathData;
        };

        SVGCircleElement.prototype.getPathData = function(options) {
          var cx = this.cx.baseVal.value;
          var cy = this.cy.baseVal.value;
          var r = this.r.baseVal.value;

          var pathData = [
            { type: "M",  values: [cx + r, cy] },
            { type: "A",  values: [r, r, 0, 0, 1, cx, cy+r] },
            { type: "A",  values: [r, r, 0, 0, 1, cx-r, cy] },
            { type: "A",  values: [r, r, 0, 0, 1, cx, cy-r] },
            { type: "A",  values: [r, r, 0, 0, 1, cx+r, cy] },
            { type: "Z",  values: [] }
          ];

          if (options && options.normalize === true) {
            pathData = reducePathData(pathData);
          }

          return pathData;
        };

        SVGEllipseElement.prototype.getPathData = function(options) {
          var cx = this.cx.baseVal.value;
          var cy = this.cy.baseVal.value;
          var rx = this.rx.baseVal.value;
          var ry = this.ry.baseVal.value;

          var pathData = [
            { type: "M",  values: [cx + rx, cy] },
            { type: "A",  values: [rx, ry, 0, 0, 1, cx, cy+ry] },
            { type: "A",  values: [rx, ry, 0, 0, 1, cx-rx, cy] },
            { type: "A",  values: [rx, ry, 0, 0, 1, cx, cy-ry] },
            { type: "A",  values: [rx, ry, 0, 0, 1, cx+rx, cy] },
            { type: "Z",  values: [] }
          ];

          if (options && options.normalize === true) {
            pathData = reducePathData(pathData);
          }

          return pathData;
        };

        SVGLineElement.prototype.getPathData = function() {
          return [
            { type: "M", values: [this.x1.baseVal.value, this.y1.baseVal.value] },
            { type: "L", values: [this.x2.baseVal.value, this.y2.baseVal.value] }
          ];
        };

        SVGPolylineElement.prototype.getPathData = function() {
          var pathData = [];

          for (var i = 0; i < this.points.numberOfItems; i += 1) {
            var point = this.points.getItem(i);

            pathData.push({
              type: (i === 0 ? "M" : "L"),
              values: [point.x, point.y]
            });
          }

          return pathData;
        };

        SVGPolygonElement.prototype.getPathData = function() {
          var pathData = [];

          for (var i = 0; i < this.points.numberOfItems; i += 1) {
            var point = this.points.getItem(i);

            pathData.push({
              type: (i === 0 ? "M" : "L"),
              values: [point.x, point.y]
            });
          }

          pathData.push({
            type: "Z",
            values: []
          });

          return pathData;
        };
      })();
    }
})();

const sections = {
    'Projects': [
        {
            'title': "hewo emacs",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo<br><br><br>',
            'icon': {
                'enter_x': 0.60430464, 
                'leave_x': 0.33940397,
                'svg_el': `<svg style="width: 100%;" viewBox="1 0 1 1.15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65302 0V0.130604L1.49318 0.103314L1.35088 0.116959L1.23197 0.165692L1.12086 0.237817L1.25341 0.19883H1.35088L1.19298 0.272905L1.08772 0.337232L1 0.42885L1.10136 0.348928L1.15205 0.325536L1.10136 0.469786V0.592593L1.1345 0.719298L1.68226 1.07602L1.51462 0.510721V0.448343L1.55945 0.403509L1.52827 0.448343L1.55945 0.547758L1.61598 0.592593L1.7154 0.623782L1.76218 0.666667L1.77778 0.719298V0.785575L1.76218 0.810916H1.92203L2 0.719298L1.82066 0.249513H1.77778L1.94542 0.187135L1.846 0.148148L1.73294 0.130604L1.65302 0.148148L1.61598 0.19883L1.50292 0.210526L1.4347 0.224172L1.36842 0.261209L1.29045 0.337232L1.24172 0.403509L1.20858 0.489279L1.25341 0.403509L1.35088 0.325536L1.47758 0.294347L1.34113 0.348928L1.29045 0.419103L1.2807 0.510721L1.29045 0.592593L1.34113 0.719298V1.17349" stroke="white" stroke-width="0.02"/>
</svg>`
            }
        },
        {
            'title': "another thingy",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo',
            'icon': {
                'enter_x': 0.645, 
                'leave_x': 0.33940397,
                'svg_el': `<svg style="width: 100%;" viewBox="1 0 1 1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65302 0V0.130604L1.49318 0.103314L1.35088 0.116959L1.23197 0.165692L1.12086 0.237817L1.25341 0.19883H1.35088L1.19298 0.272905L1.08772 0.337232L1 0.42885L1.10136 0.348928L1.15205 0.325536L1.10136 0.469786V0.592593L1.1345 0.719298L1.68226 1.07602L1.51462 0.510721V0.448343L1.55945 0.403509L1.52827 0.448343L1.55945 0.547758L1.61598 0.592593L1.7154 0.623782L1.76218 0.666667L1.77778 0.719298V0.785575L1.76218 0.810916H1.92203L2 0.719298L1.82066 0.249513H1.77778L1.94542 0.187135L1.846 0.148148L1.73294 0.130604L1.65302 0.148148L1.61598 0.19883L1.50292 0.210526L1.4347 0.224172L1.36842 0.261209L1.29045 0.337232L1.24172 0.403509L1.20858 0.489279L1.25341 0.403509L1.35088 0.325536L1.47758 0.294347L1.34113 0.348928L1.29045 0.419103L1.2807 0.510721L1.29045 0.592593L1.34113 0.719298V1.17349" stroke="gray" opacity="0.5" stroke-width="0.02"/>
</svg>`
            }
        }
    ]
}


const svg_infos = Array.from(Object.values(sections)).map(sec => sec.filter(p => p.hasOwnProperty('icon')).map(p => p.icon)).flat()
const get_path_els = () => Array.from(document.querySelectorAll('.has-line-art path'));


function el(elem_name, inline_style, children, className=null) {
    return `<${elem_name}${className ? ' class=' + className : ''} style="${inline_style}">\n${children.join("\n")}\n</${elem_name}>`;
}

function zip(...arr) {
    const min_len = Math.min(arr.map(a => a.length));
    return arr[0].map((_, i) => arr.map(row => row[i]));    // https://stackoverflow.com/a/10284006/10372825
}

function budget_react_inital_render() {
    const inner_html = el('div', null, 
        Object.entries(sections).map(([sec_title, items]) => el('div', 'display: flex; flex-direction: column;',
            Object.values(items).map(({title, description, icon}) => el('div', 'display: flex; align-items: center; height: 100vh; padding: 2em;', [
                el('div', 'justify-content: center; width: 100%; display: flex; justify-content: space-between; space', [
                    el('div', 'max-width: 65ch; opacity: 0; padding: 1em; display: flex; align-items: center;', [
                        el('div', null, [
                            el('span', 'font: 2em sans-serif; font-weight: bold;', [title]),
                            el('div', null, [DOMPurify.sanitize(marked.parse(description))])
                        ])
                    ]),
                    icon ? el('div', 'min-width: 100px;', [icon.svg_el]) : null,
                ], 'has-line-art'),
            ]))
        ))
    );

    const container = document.getElementById('line-main');
    container.innerHTML = inner_html;
}

function setup_bg_svg(controller) {
    const bg = document.getElementById('bg-svg');

    const reset_bg_svg = () => {
        while (bg.lastChild) bg.removeChild(bg.lastChild);
        bg.setAttribute('viewBox', `0 0 ${document.documentElement.scrollWidth} ${document.documentElement.scrollHeight}`);
        bg.setAttribute('width', document.documentElement.scrollWidth);
        bg.setAttribute('height', document.documentElement.scrollHeight);
        make_icon_lines_on_bg(controller);
        make_connecting_lines(controller);
    }

    // ensure canvas always take up the full background
    window.addEventListener('resize', reset_bg_svg);
    reset_bg_svg();
}
function make_icon_lines_on_bg(controller) {
    const bg = document.getElementById('bg-svg');
    const svg_infos = Array.from(Object.values(sections)).map(sec => sec.filter(p => p.hasOwnProperty('icon')).map(p => p.icon)).flat()
    const paths_to_convert = get_path_els();
    console.log(svg_infos)

    const doc_frag = document.createDocumentFragment();
    for (let path of paths_to_convert) {
        const svg = path.parentElement;
        const bbox = svg.getBoundingClientRect();
        const scaling_factor = (bbox.right - bbox.left) / svg.viewBox.baseVal.width;
        const [ off_x, off_y ] = [ svg.viewBox.baseVal.x, svg.viewBox.baseVal.y ]; // og vbox offset
        //const scaling_factor = 100
        //const transform = ([x, y]) => [x*scaling_factor + bbox.x, y*scaling_factor + bbox.y];
        //const transform = ;
        //const transform_works_for = 'MVHL';
        //console.log(bbox.x, bbox.y)
        console.log(off_y)

        //const transform_by_type = {
        //    'M': ([x, y]) => [x*scaling_factor + bbox.x, y*scaling_factor + bbox.y],
        //    'L': ([x, y]) => [x*scaling_factor + bbox.x, y*scaling_factor + bbox.y],
        //    'H': ([x]) => [x*scaling_factor + bbox.x],
        //    'V': ([y]) => [y*scaling_factor + bbox.y],
        //}
        const transform_by_type = {
            'M': ([x, y]) => [(x-off_x)*scaling_factor + bbox.x, (y-off_y)*scaling_factor + bbox.y],
            'L': ([x, y]) => [(x-off_x)*scaling_factor + bbox.x, (y-off_y)*scaling_factor + bbox.y],
            'H': ([x]) => [(x-off_x)*scaling_factor + bbox.x],
            'V': ([y]) => [(y-off_y)*scaling_factor + bbox.y],
        }

        const new_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //new_path.setPathData(path.getPathData().map(({ type, values }) => ({ type, values: values.map(transform) }) ));
        new_path.setPathData(path.getPathData().map(({ type, values }) => {
            //console.log(type, values, transform_by_type.hasOwnProperty(type), '\n\n\n');
            return ({ type, values: transform_by_type.hasOwnProperty(type) ? transform_by_type[type](values) : values })
        }  ));
        console.log(new_path.getPathData()[0].values)
        new_path.setAttribute('stroke-width', path.getAttribute('stroke-width') * scaling_factor);    // keep original stroke from svg
        //new_path.setAttribute('stroke-width', 5);                                                     // reset all stroke to 5
        new_path.setAttribute('stroke', '#326ccc');
        new_path.setAttribute('fill', 'none')
        new_path.setAttribute('stroke-linejoin', 'round')
        doc_frag.appendChild(new_path);
    }
    bg.appendChild(doc_frag);

    //for (let info of svg_infos) {
    //    const icon = el_to_make.children[0]
    //    const { width } = icon.viewBox.baseVal;
    //    console.log(icon, width)
    //
    //    //scale
    //}
}
function make_connecting_lines(controller) {
    const path_els = get_path_els();
    const bg = document.getElementById('bg-svg');

    document.addEventListener('click', ev => console.log('click', ev.clientX, ev.clientY))

    const connections = document.createDocumentFragment();
    for (let i=1; i<path_els.length; i++) {
        // calculate the endpoints of the lines
        const prev_box = path_els[i-1].parentElement.getBoundingClientRect();
        const next_box = path_els[i].parentElement.getBoundingClientRect();
        const prev_info = svg_infos[i-1];
        const next_info = svg_infos[i];
        const prev_pos = [prev_box.x * (1 - prev_info.leave_x) + prev_box.right * prev_info.leave_x, prev_box.bottom];
        const next_pos = [next_box.x * (1 - next_info.enter_x) + next_box.right * next_info.enter_x, next_box.top];
        const vertical_half_way = (prev_box.bottom + next_box.top) / 2;

        console.log('creating connector from', prev_pos, 'to', next_pos)

        // create the connecting path and add it to the DOM
        const connector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //connector.setAttribute('d', `M ${prev_pos.join(',')} L ${next_pos.join(',')}`);    // straight line
        connector.setAttribute('d', `M ${prev_pos.join(',')} C ${prev_pos[0]},${vertical_half_way} ${next_pos[0]},${vertical_half_way} ${next_pos.join(',')}`);    // bezier
        connector.setAttribute('stroke-width', 5);
        connector.setAttribute('stroke', 'white');
        connector.setAttribute('fill', 'none');

        const len = connector.getTotalLength();
        connector.style.strokeDasharray = len;
        connector.style.strokeDashoffset = len;

        connections.appendChild(connector);

        console.log(prev_box.bottom)

        // create tween and register scene
        new ScrollMagic.Scene({
            offset: prev_box.bottom - document.documentElement.clientHeight*0.55,
            duration: next_box.top - prev_box.bottom,
            tweenChanges: true,
        })
            .setTween(new TweenMax.to(connector, 0.1, { strokeDashoffset: 0, ease: Cubic.easeIn }))
            .addIndicators()
            .addTo(controller)
    }
    bg.appendChild(connections);
}


function setup_scrollmagic(controller) {

    // setup dash length and offset for all the paths to create the animation appearance
    const path_els = get_path_els();
    path_els.forEach(path => {
        // from source of https://scrollmagic.io/examples/advanced/svg_drawing.html
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
        path.setAttribute('opacity', '0.5');    // TODO: remove
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '0.02');
    });

    // create tweens and register scenes for each path
    const path_scenes = path_els.map(path => {
        const trigger_el = path.parentElement.parentElement.parentElement;
        //const height = path.getBoundingClientRect().bottom - path.getBoundingClientRect().top;
        //console.log("height:", height, path.parentElement, path.parentElement.parentElement.parentElement)
        const tween = new TweenMax.to(path, 0.1, { strokeDashoffset: 0, ease: Cubic.easeOut });
        //return new ScrollMagic.Scene({ triggerElement: path.parentElement.parentElement.parentElement, duration: path.clientHeight, tweenChanges: true })
        return new ScrollMagic.Scene({ triggerElement: trigger_el, duration: trigger_el.clientHeight, tweenChanges: true })
            .setTween(tween)
            .addIndicators()
            .addTo(controller);
    })

    
    // create tweens and register scenes for text
    const line_art_els = Array.from(document.getElementsByClassName('has-line-art'));
    const text_scenes = line_art_els.map(el => new ScrollMagic.Scene({
        triggerElement: el,
        duration: el.clientHeight,
        tweenChanges: true,
    })
        .setTween(new TweenMax.to(el.children[0], 0.1, { opacity: 1, ease: Cubic.easeOut }))
        .addIndicators()
        .addTo(controller)
    );
}

function main() {
    budget_react_inital_render();
    const controller = new ScrollMagic.Controller();
    setup_scrollmagic(controller);
    setup_bg_svg(controller);
}

document.addEventListener('DOMContentLoaded', main);
