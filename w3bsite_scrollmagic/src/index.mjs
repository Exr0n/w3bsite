const sections = {
    "": [
        {
            'title': [
                "I'm a high school student&nbsp; <br> and cognition enthusiast.", 
            ],
            'description': [
                "I spend too much time pondering machine learning, communication, brain-machine interfaces, and metacognition.",
                "Let me tell you a bit about what I get up to...",
            ],
            'css': {
                'min-height': '100vh',
                'font-family': "'Nunito', sans-serif"
            },
            'icon': {
                'max_width': '23rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 210 265" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M121.5 0.5V77.5C117.333 70.5 107.6 55.2 102 50C95.0001 43.5 94.0001 44 91.5001 44C89.0001 44 81.5001 45 78.5001 50C76.1001 54 77.5001 62 78.5001 65.5C84.0001 74.8333 95.5001 94.3 97.5001 97.5C99.5001 100.7 109.333 118.833 114 127.5V129H112C106.333 120.833 92.5001 102 86.0001 93.5C79.5428 85.0559 63.5001 66 61.0001 63.5C59.0001 61.5 52.0001 55 46.0001 56C44.6668 56 41.4001 56.5 39.0001 58.5C36.0001 61 33.0001 64.5 33.0001 67.5C33.0001 70.5 34.048 75.4768 35.0001 77.5C39.0001 86 45.5001 94 54.5001 106C61.7001 115.6 78.6668 137 87.5001 148.5V151H86.0001C81.5001 145.833 70.0001 132.9 60.0001 122.5C47.5001 109.5 35.0001 95.5 27.5001 92C21.5001 89.2 16.3334 89.8333 14.5001 90.5C12.1667 91.3333 6.40004 93.7 6.00004 98.5C5.50004 104.5 5.50006 106 8.00008 111C9.5001 114 17.9644 125 30.5001 138.5C35.7001 144.1 55.6668 164.333 65.0001 174V176.5H63C59.1667 172.667 50 163.8 44 159C36.5 153 25.5 142 19.5 139.5C13.5 137 9.5 136.5 7 137.5C4.5 138.5 1 142.5 1 148.5C1 151.05 4.5 157.5 7 160.5C12.4167 167 22.5 177.5 29.5 183C35.5 187.714 46.5 197 48 197.5C49.5 198 52.6026 201.051 54.5 202C56.5 203 59 207 61.5 210C63.3333 212.167 67.4 217 69 219C71 221.5 76.5 230 81.5 235C85.1667 239.333 95 248.7 105 251.5C117.5 255 119 254.5 124 254.5C129 254.5 141 250 147.5 246.5C154 243 182 225.5 191.5 211.5C201 197.5 204.5 190 206.5 175.5C208.5 161 206 151 205.5 136C205 121 206.5 124.5 206.5 113C206.5 108 207.125 101.5 208.5 96C209.125 93.5 210.167 87.5 208.5 82.5C207.5 79.5 202.3 76.3 197.5 77.5C191.5 79 187.5 80 183 84.5C178.5 89 173.5 96.9936 173.5 116.5C173.5 120.5 174.5 126 174.5 128C174.5 133.099 174.5 138.5 170 143.5C169.667 144 168.008 146.5 161 146.5C150.5 146.5 138.5 167.5 138 175.5C137.5 180 137.1 191.1 139.5 199.5C142.5 210 158.5 218.5 164.5 243.5C165 245.583 167 255.5 167 264.5" />
</svg> `
            }
        },

    ],
    'Education': [
        {
            'title': ["The Nueva School", "2017 - 2023"],
            'description': `I'm a senior at [the Nueva school](http://nuevaschool.org/) in the SF Bay Area. On campus, I'm a member of [FRC team 4904 Bot Provoking](https://botprovoking.org/) and Peer Tutoring, a Mavericks Admissions Ambassador, and a peer coach.
Come freeskate with me! Tuesday at lunch or anytime I'm on wheels.`,
            'iconLeft': true,
            'css': { 'font-family': "'Liberation Sans', sans-serif" },
            'icon': {
                'max_width': '12rem',
                'svg_el': `<svg style="width: 100%;" viewBox="1 0 1 1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65302 0V0.130604L1.49318 0.103314L1.35088 0.116959L1.23197 0.165692L1.12086 0.237817L1.25341 0.19883H1.35088L1.19298 0.272905L1.08772 0.337232L1 0.42885L1.10136 0.348928L1.15205 0.325536L1.10136 0.469786V0.592593L1.1345 0.719298L1.68226 1.07602L1.51462 0.510721V0.448343L1.55945 0.403509L1.52827 0.448343L1.55945 0.547758L1.61598 0.592593L1.7154 0.623782L1.76218 0.666667L1.77778 0.719298V0.785575L1.76218 0.810916H1.92203L2 0.719298L1.82066 0.249513H1.77778L1.94542 0.187135L1.846 0.148148L1.73294 0.130604L1.65302 0.148148L1.61598 0.19883L1.50292 0.210526L1.4347 0.224172L1.36842 0.261209L1.29045 0.337232L1.24172 0.403509L1.20858 0.489279L1.25341 0.403509L1.35088 0.325536L1.47758 0.294347L1.34113 0.348928L1.29045 0.419103L1.2807 0.510721L1.29045 0.592593L1.34113 0.719298V1" />
</svg>`
            }
        }
    ],
    'Experience': [
        {
            'title': ["Mixed-mode Integrated Circuits Lab", "Caltech, summer 2022"],
            'description': "I spent summer 2022 working with [the MICS lab](https://mics.caltech.edu/) on optimizing FENet (a light weight convolutional model trained to extract rich features from implanted electrodes) for hardware implementation. Practically, this involved sweeping over hyperparameters and running experiments to see how model architecture and quantization affected regression performance.",
            'iconLeft': true,
            'justify': 'center',
            'css': {
                'min-height': '50vh',
            },
            'flashbacks': [
                {
                    'srcs': ['/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_80_7dfb829b5953d13eceb6.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_90_60ff06a9091baaf32bb4.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_100_ce31e501006d39e1232a.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_110_a00c9e551bbc3e46a095.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_120_733f4d6a3e8aae731b24.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_130_dcb1018aa1c63b37ab58.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_140_2e48e0783b721a848be6.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_150_db90a0de4103f536d610.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_160_074d5aaf8387a8c31f36.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_170_b9c83338581ae02d8221.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_180_33c146b900aa2073d23f.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_190_85fa78a168997e50f99f.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_200_677147b95893fe85d79d.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_210_258ad5119c40ad8b546c.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_220_26fe7e4b8c1e11ce3248.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_230_098a87d69d00a8db4a7c.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_240_bc4bc32775f2951ee712.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_250_2ea861fc6286d1a6f465.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_260_477a90111d2b78660ea7.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_270_56a3c858ac9b5303ac8e.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_280_acf14d3abfab876fb22c.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_290_83816d92340c39100bef.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_300_1bb551f350d8b11e0dbc.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_310_d8f3c2e67ec383162a92.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_320_9ec2ba70498c9f430db2.webp',
                        '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_330_cbd1e92ef8383e9c0632.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_340_dbf9176f1623a083131c.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_350_159b870cc13811b67997.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_360_7024f56f8c0c65eda048.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_370_b6c3f6e3a7e47121e484.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_380_0f3cf103fecf26efe190.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_390_09fa8421010543e107c0.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_400_a72dcc22b3abc843f075.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_410_19ac2000c4818cc79430.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_420_be5ddfcd97d5416a86c2.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_430_6849fc7ee9042b9f4d5e.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_440_316fe264dbf2a3ac082b.webp', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_450_5d899ecfadef3e162425.webp'],
                    //'srcs': ['/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_80_7dfb829b5953d13eceb6.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_90_60ff06a9091baaf32bb4.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_100_ce31e501006d39e1232a.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_110_a00c9e551bbc3e46a095.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_120_733f4d6a3e8aae731b24.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_130_dcb1018aa1c63b37ab58.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_140_2e48e0783b721a848be6.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_150_db90a0de4103f536d610.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_160_074d5aaf8387a8c31f36.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_170_b9c83338581ae02d8221.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_180_33c146b900aa2073d23f.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_190_85fa78a168997e50f99f.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_200_677147b95893fe85d79d.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_210_258ad5119c40ad8b546c.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_220_26fe7e4b8c1e11ce3248.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_230_098a87d69d00a8db4a7c.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_240_bc4bc32775f2951ee712.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_250_2ea861fc6286d1a6f465.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_260_477a90111d2b78660ea7.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_270_56a3c858ac9b5303ac8e.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_280_acf14d3abfab876fb22c.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_290_83816d92340c39100bef.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_300_1bb551f350d8b11e0dbc.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_310_d8f3c2e67ec383162a92.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_320_9ec2ba70498c9f430db2.png',
                    //    '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_330_cbd1e92ef8383e9c0632.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_340_dbf9176f1623a083131c.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_350_159b870cc13811b67997.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_360_7024f56f8c0c65eda048.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_370_b6c3f6e3a7e47121e484.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_380_0f3cf103fecf26efe190.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_390_09fa8421010543e107c0.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_400_a72dcc22b3abc843f075.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_410_19ac2000c4818cc79430.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_420_be5ddfcd97d5416a86c2.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_430_6849fc7ee9042b9f4d5e.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_440_316fe264dbf2a3ac082b.png', '/flashback_images/media/images/eval/eval/quantized_wl8_fl6/decoder-retrain/R² chart_450_5d899ecfadef3e162425.png'],
                    'x': 0,
                    'y': 20,
                    'style': {
                        'width': '40vw',
                    }
                }
            ],
            'icon': {
                'max_width': '10rem',
                'svg_el': ` <svg style="width: 100%;" viewBox="0 0 420 600" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M393 0V107.5C371.5 94.3333 318.8 67.4 280 65C224 61.5361 181.5 63.5 112.5 105C43.5 146.5 -4.49999 252.5 1.50001 328.5C7.50001 404.5 41 472.455 104 517C153.5 552 208 567.5 247 567.5C303.58 567.5 347.5 554.5 418 503L266 517L263 473C278.5 469.167 313.5 459.1 341.5 445.5C369.5 431.9 388 417 388 413H243.5V404.5C254.667 400.167 282.4 386.7 304 367.5C331 343.5 335.5 313 335.5 301C335.5 278.5 329.5 249 313.5 219C299.112 188.991 289.712 174.975 273.5 155.5C278.333 166.167 288.4 195.4 288 219C288.5 231 286.1 262.2 272.5 291C255.5 327 246.5 338.5 242.5 360.5C239.3 378.1 240.5 396.167 241.5 403V413H239.5V403C237.167 396.5 232.5 380.3 232.5 367.5C232.5 351.5 242.5 317 253 294.5C263.5 272 270.5 249 270 225.5C269.5 202 266.5 179.5 260.5 162C255.7 148 245.5 129.5 241 122C241.833 127 243 138.7 243 145.5C243 154 244 172.5 219.5 211.5C212 222.167 197 246 192 256C187 266 184.5 273.5 183.5 287.5H182C181.167 284.5 179.5 276.8 179.5 270C179.5 261.5 184.5 243.5 194 223.5C203.5 203.5 216.5 183.5 216.5 155.5C210.833 166.167 202 185.5 176 216C168.167 225 151.5 247 147.5 263C142.5 283 142.825 307.78 153.5 329C163.763 349.402 193.467 376.885 212.5 388.5L237.5 404V413H94V416.5C137.604 446.416 167 458 218.5 471.5L216.5 517V600" />
</svg> `
            }
        },
        {
            'title': ["Efficient and Intelligent Computing Lab", "Rice, summer 2021"],
            'description': "I spent part of summer 2019 working with [the EIC lab](https://eiclab.net/) as a member of the [X-Camp academy](https://x-camp.academy/#/) internship connector pilot. We implemented GPT-2 in Vivado HLS as a baseline for future models and a jumping-off point for future projects. I ended up stepping into a role of organization and coordination—figuring out who was best suited for each job and creating a concrete roadmap to communicate our efforts.",
            'iconLeft': true,
            'justify': 'center',
            'icon': {
                'max_width': '10rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 129 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M 100.0,0.5 L 100.0,41.5 C 99.0,22.0 85.0,13.0 77.0,13.0 C 69.0,13.0 64.6604,16.3906 61.0,25.5 C 61.0,25.5 58.5,32.5 58.5,38.5 C 58.5,44.5 63.5,51.0 71.0,51.0 C 78.5,51.0 82.0,44.5 82.0,39.5 C 82.0,34.5 79.0,28.0 71.5,28.0 C 64.0,28.0 60.9152,30.9687 58.5,37.5 C 56.7808,40.5788 56.5,42.817 50.5,43.317 C 50.5,43.317 46.0,43.5 43.5,46.5 C 41.0,49.5 41.5,52.0 42.0,54.5 C 42.5,57.0 50.0,70.5 50.0,70.5 C 50.0,70.5 57.5,56.5 58.0,54.5 C 58.5,52.5 58.3311,48.816 56.0,46.0 C 54.1331,44.0475 52.6332,43.7391 49.9483,43.2069 C 43.5,43.0 41.0,40.0 40.9483,37.7069 C 40.8965,35.4138 38.5,27.5 30.0,27.5 C 21.5,27.5 17.5,33.0 17.5,39.0 C 17.5,45.0 21.9744,51.163 30.0,51.0 C 38.0256,50.837 41.5087,43.5376 41.5,38.5 C 41.4913,33.4624 40.9217,30.5969 39.0,25.5 C 36.5,20.0 32.4544,13.2993 22.5,13.0 C 12.5456,12.7007 0.5,24.0 0.5,41.5 C 3.44249,53.9688 4.36456,61.4817 20.5002,64.5 L 20.5002,71.0 L 16.0,70.0 C 15.1667,68.6667 13.2,65.9 12.0,65.5 C 10.8,65.1 8.5,65.3333 7.5,65.5 C 7.16667,72.5 7.6,88.8 12.0,98.0 C 17.5,109.5 20.5,114.5 23.0,116.5 C 25.0,118.1 25.8333,117.5 26.0,117.0 L 25.0,113.0 C 21.5,106.5 17.3,95.9 16.5,87.5 C 15.7,79.1 15.8333,75.5 16.0,74.0 L 20.5002,76.5 C 20.5002,81.5 21.5002,105.5 33.0002,119.5 C 37.1668,125.0 45.5002,135.5 54.0002,141.0 L 53.5002,145.5 C 51.6668,149.833 47.4002,158.9 45.0002,160.5 C 42.6002,162.1 37.0002,162.167 34.5002,162.0 L 31.0002,165.5 L 31.0002,168.0 L 35.0002,168.0 L 37.5002,164.5 L 39.5002,164.5 L 40.0002,168.0 L 47.0002,168.0 C 47.5002,165.833 49.2002,161.1 52.0002,159.5 C 55.5002,157.5 58.5002,154.5 58.5002,153.0 C 58.5002,151.8 58.5002,149.167 58.5002,148.0 L 64.5002,143.0 L 74.0002,147.0 C 73.0002,149.167 70.5002,154.2 68.5002,157.0 C 66.0002,160.5 65.5002,160.5 65.0002,161.0 C 64.5002,161.5 60.5002,162.0 57.5002,162.0 C 55.1002,162.0 54.1668,162.333 54.0002,162.5 L 52.0002,165.0 L 52.0002,168.0 L 56.0002,168.0 L 58.0002,165.0 L 61.0002,165.0 L 61.0002,168.0 L 68.5002,168.0 L 71.0002,165.0 L 73.0002,165.0 L 76.0002,168.0 L 79.0002,168.0 L 79.0002,165.0 L 77.0002,163.0 L 72.0002,163.0 L 72.0002,161.5 C 75.5639,157.966 77.286,155.644 80.0002,151.0 L 82.5002,144.0 C 84.0842,142.317 84.9192,141.202 84.5002,133.0 C 75.5355,122.82 61.0002,106.5 62.5002,71.5 L 67.0002,71.5 C 79.9535,70.717 85.9804,68.9763 94.0002,63.0 C 99.1668,66.1667 111.024,75.8738 115.0,90.0 C 120.106,108.138 123.0,117.0 121.5,118.5 C 120.5,119.5 108.0,110.5 103.5,103.0 C 99.9,97.0 97.6667,90.5 97.0,88.0 L 93.0,88.0 C 93.0,92.0 95.1,102.1 103.5,110.5 C 114.0,121.0 120.0,122.5 122.5,126.0 C 125.0,129.5 125.0,134.5 125.0,136.5 C 119.333,134.667 106.0,128.7 98.0,119.5 C 90.0,110.3 85.3333,100.333 84.0,96.5 L 80.0002,96.5 C 81.5001,102.333 87.345,115.617 96.5,124.5 C 108.982,136.611 121.922,139.419 125.0,143.0 C 126.333,144.5 128.0,148.9 128.0,152.5 L 128.0,170" />
</svg>
`
            }
        },
        {
            //🐧🍲🕙🎱🪑🌽
            'css': {
                'min-height': '30vh'
            }
        }
    ],
//    'Projects': [ // TODO
//        {
    //        wavetable, condution, notes club,
//            'title': "aaaaaaaaaaaaaa i don't have icons for these",
//            'description': "hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo hewo ",
//            'icon': {
//                'max_width': '10rem',
//                'svg_el': `<svg style="width: 100%;" viewBox="1 0 1 1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
//<path d="M1.65302 0V0.130604L1.49318 0.103314L1.35088 0.116959L1.23197 0.165692L1.12086 0.237817L1.25341 0.19883H1.35088L1.19298 0.272905L1.08772 0.337232L1 0.42885L1.10136 0.348928L1.15205 0.325536L1.10136 0.469786V0.592593L1.1345 0.719298L1.68226 1.07602L1.51462 0.510721V0.448343L1.55945 0.403509L1.52827 0.448343L1.55945 0.547758L1.61598 0.592593L1.7154 0.623782L1.76218 0.666667L1.77778 0.719298V0.785575L1.76218 0.810916H1.92203L2 0.719298L1.82066 0.249513H1.77778L1.94542 0.187135L1.846 0.148148L1.73294 0.130604L1.65302 0.148148L1.61598 0.19883L1.50292 0.210526L1.4347 0.224172L1.36842 0.261209L1.29045 0.337232L1.24172 0.403509L1.20858 0.489279L1.25341 0.403509L1.35088 0.325536L1.47758 0.294347L1.34113 0.348928L1.29045 0.419103L1.2807 0.510721L1.29045 0.592593L1.34113 0.719298V1.17349" />
//</svg>`
//            }
//        }
//    ],
    'Hobbies': [
        {
            'title': "Interactive Visualizations + Soydevvery",
            'description': "Visualizations that project data into a tangible, visual space to build intuition or point out something cool; web demos that look pretty. These one-off projects (some built with friends) have included [a US map of population, politics, and walkability](https://urbanmap.exr0n.com), [dots that undulate like the ocean](https://meshwave.exr0n.com), and [a gimicky word vector arithmatic explorer](https://corsaur.us).",
            'flashbacks': [
                {
                    'srcs': [...Array(120).keys()].map(n => "/flashback_images/urbanmap/ezgif-frame-" + (''+(n+1)).padStart(3, '0') + '.jpg'),
                    'x': 30,
                    'y': -80,
                    'style': {
                        'width': '40vw',
                    }
                },
            ],
            'icon': {
                'max_width': '14rem',   
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 455 457" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d=" M 417.0,0.5 L 417.0,274.0 L 450.0,306.0 L 378.0,306.0 L 425.5,394.0 L 381.0,419.0 L 330.0,326.5 L 278.5,373.5 L 278.5,136.0 L 372.5,231.5 L 372.5,41.5 L 2.0,41.5 L 2.0,400.0 L 75.5,400.0 L 75.5,261.5 L 130.5,261.5 L 130.5,400.0 L 184.5,400.0 L 184.5,185.0 L 240.5,185.0 L 240.5,456.5 " />
</svg>
`
            },
        },
        {
            'title': "Explanatory Diagrams",
            'description': "Infographics that tell stories and share knowledge rather than providing quick stats. Spatial organizations of knowledge that you can get lost in. There's no one place to start, but once you've read everything, you'll have learned something. Topics include the [CHRM2 neurotransmitter receptor protein](https://wilderness.exr0n.com/wilderness/infographics/19bioCHRM2ProtienStory.png) and [ion channels that help propogate neural action potentials](https://wilderness.exr0n.com/wilderness/infographics/20bio101VoltageGatedSodiumChannels.png). Here's [the full list](https://wilderness.exr0n.com/wilderness/infographics).",
            'icon': {
                'max_width': '14rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 258 443" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M254.868 0V156.5C241.368 75.0001 162.23 40.0627 99.3681 53.0001C39.1215 65.3993 -10.6574 134.877 4.86804 200C19.8765 262.954 74.8679 308 143.868 302L126.368 162.5H254.868C256.868 184.333 256.3 225.5 229.5 257.5C202.7 289.5 168.5 298.333 149 302V329H4.86804V364H254.868V378H4.86804V393.5H254.868V442.5" />
</svg>
`
            }
        },
        { 'css': { 'min-height': '30vh', }, },
        {
            'title': "Timelapse Photography",
            'description': "I like searching for new patterns through the perspective shift of changing your time scales. Sitting still and watching as things happen feels almost like a stoic or zen practice. You can see my time lapses [here](https://www.google.com/search?q=coming+eventually).",
            'iconLeft': true,
            'justify': 'flex-end',
            'flashbacks': [
                {
                    'srcs': [...Array(240).keys()].map(n => "/flashback_images/timelapse/chicago_boat/" + (''+(n+1)).padStart(4, '0') + '.jpg'),
                    'x': -5,
                    'y': -150,
                    'peak_opacity': 0.4,
                    'scrollTrigger': 0.3,
                    'style': {
                        'width': '50vw',
                    }
                },
                {
                    'srcs': [...Array(140).keys()].map(n => "/flashback_images/timelapse/robotics_sac_pit/ezgif-frame-" + (''+(n+1)).padStart(3, '0') + '.jpg'),
                    'x': 40,
                    'y': 150,
                    'distance': 0.1,
                    'scrollTrigger': 0.2,
                    'peak_opacity': 0.5,
                    'style': {
                        'width': '30vw',
                    }
                },
                {
                    'srcs': [...Array(500).keys()].map(n => "/flashback_images/timelapse/beach_sunset/" + (''+(n+1)).padStart(4, '0') + '.jpg'),
                    'x': 55,
                    'y': -120,
                    'distance': 0.05,
                    'scrollTrigger': 0.1,
                    'peak_opacity': 0.6,
                    'style': {
                        'width': '30vw',
                    }
                },
            ],
            'icon': {
                'max_width': '14rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 510 776" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M469.5 0V103C469.5 92 456.2 74.4 445 74L330 54L353 48V27L286.5 15L244 21.5L309.5 34.5V57.5L319 56C265.5 46.8333 155.3 27.9 142.5 25.5C126.5 22.5 117.5 31 117 42C116.6 50.8 116.833 78.6667 117 91.5C127.8 95.1 130.167 103 130 106.5C130 119.833 130 148.5 130 156.5C130 164.5 121.333 168.167 117 169C117 178 117 199.2 117 212C117 228 123.5 234 133 237C140.6 239.4 211.833 255.667 246.5 263.5L233.5 262.5V284L302.5 302.5V281.5H321.5L348.5 287V294.5L304.5 302.5V337C319.833 341.333 350.5 360.2 350.5 401C350.5 418.2 346.167 426.833 344 429L508.5 592L494.5 597.5L334.5 450C331.7 459.2 324.667 462.167 321.5 462.5L409 754.5L379 764L290 469C275.6 476.6 254.333 467.833 245.5 462.5L1 645V775.5" />
</svg>
`
            }
        },
        { 'css': { 'min-height': '50vh', }, },
    ],
    'Accomplishments': [
        {
            'title': "USACO Gold, ICPed Bronze and Silver",
            'description': "Somehow got a full score on the bronze and silver tests, studied fancy algorithms but avoided putting the work in to memorize problem transformations and code, and moved on to machine learning.",
            'css': {
                'min-height': '60vh',
            },
            'icon': {
                'max_width': '10rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 244 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130 0V28.5C128.5 25 123.6 18 116 18C108.4 18 104.5 21.3333 103.5 23C104.667 19.1667 105.4 10.9 99 8.5L91.5 15.5C89 14.3333 81.9 12 73.5 12C65.1 12 58.3333 14 56 15L46 6.5C40.8 6.5 40.5 17.8333 41 23.5C39.6667 21.1667 35.5 16.5 29.5 16.5C23.5 16.5 14.6667 22.8333 11 26C12 30.3333 16.5 38.9 26.5 38.5C19 48 15.5 69.5 14 79.5C5 85 1 99 1 109.5C1 120 13.5 153 62.5 154C111.5 155 126.5 127.5 126.5 114C126.5 103.2 121.5 96.1667 119 94C119.333 79.8333 118.1 49.2 110.5 40C122.1 40 128.333 33.6667 130 30.5C142.5 28.8333 172.2 30.6 191 51C200.2 60.2 204.5 70.1667 205.5 74C210 75.3333 218.9 80.2 218.5 89C218 100 217 105 217 110.5C217 116 219.5 122.5 221.5 123.5C223.9 118.3 230.833 121.333 234 123.5C236.667 126.167 241.9 133.2 241.5 140C236.833 141.833 225.7 144 218.5 138C215.3 134.4 216.167 129.833 217 128C214.667 125.833 210.3 118.9 211.5 108.5C213 95.5 213 94 211.5 91.5C210.3 89.5 208.333 88 207.5 87.5C208.833 96 209.5 117.3 201.5 134.5C190 162 188.5 161.5 189 173C195.8 177 196.5 186.333 196 190.5C195.333 193.833 191.2 200.5 180 200.5C168.8 200.5 162.333 194.833 160.5 192C160 188.167 160.7 179 167.5 173C165.833 167.333 162.4 154.9 162 150.5H158.5L155.5 170C157.5 171.5 161.3 176 160.5 182C159.5 189.5 156.5 194 144.5 193C132.5 192 130 188 129 183.5C128 179 131 170 134 168.5C134 162.5 134 157.5 130 157C126.8 156.6 124 157.5 123 158C121.667 162.333 119.8 171.9 123 175.5C127 180 131 189.5 130 197C127.5 200.167 120.1 206.3 110.5 205.5C100.9 204.7 95.8333 199.5 94.5 197C94 183 100 178 101.5 177.5C101.5 168.7 98.1667 162.167 96.5 160C92.5 160.8 86.5 159.667 84 159C84 162.6 85 170.833 85.5 174.5C91 174.5 93 189 93 191C87 197 85.5 200.5 73.5 200.5C63.9 200.5 57.8333 195.833 56 193.5C55.6 179.5 61.5 174.333 64.5 173.5C64.5 164.3 59.1667 157 56.5 154.5C49 153.333 31.6 148.135 28 146.135V177.5" />
</svg>
`
            }
        },
        {
            'title': "Self-administered a WorksiteLabs PCR Covid Test in 23 seconds",
            'description': "I trained for literally months. When I started, placing the name label on the tube and opening the package with the swab slowed me down the most. Stabbing the back end of the swab through the paper backing and placing the name label on the tube while the cap is off when putting the swab inside made the final speed possible. Unscrewing the tube with one hand while swabbing with the other can save an additional second or so, but requires finger strength and practice.",
            'css': {
                'min-height': '60vh',
            },
            'iconLeft': true,
            'justify': 'flex-end',
            'icon': {
                'max_width': '10rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 361 409" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M244 0.5V266.5L72.5 114C63.8333 102.667 43.3 77.4 30.5 67C14.5 54 5.5 60 3.5 62.5C1.5 65 -4 76.5 8.5 87C18.5 95.4 49.3333 114.833 63.5 123.5L352 380C357.239 379.251 359.131 377.565 360 371.5L245.5 268V408.5" />
</svg>
`
            }
        },
        {
            'title': "Slept through half of my AP CS test",
            'description': "For some reason I was particularly tired that morning, so about one quarter of the way through the free-response question section, I decided to just take a nap. I didn't know if I was allowed to get my jacket out of my backpack, so I slept on my arms. Near the end of the test, my arms fell asleep and the tingling woke me up.",
            'css': {
                'min-height': '60vh',
            },
            'icon': {
                'max_width': '10rem',
                'svg_el': ` <svg style="width: 100%;"viewBox="0 0 793 593" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M566 0V173C546.5 189.667 503.2 224.2 486 229C468.8 233.8 458.5 234.333 455.5 234L446 231C446 226 445.4 215 443 211C440 206 428 187 419 180C410 173 393 162.5 385.5 160C382 158.333 374.2 155.4 371 157C367 159 367.5 166 371 171C374.5 176 374.5 179.5 374.5 186.5C355.333 170.667 310.935 139.534 293 129C268.968 114.885 247 118.5 217 134C187 149.5 149.5 209.5 141.5 234C133.5 258.5 137.5 324 158 350C165.833 362.167 186.4 387.7 206 392.5C230.5 398.5 277 398 288.5 417.5C297.7 433.1 299 431.333 298.5 428.5L269.5 410.5C251.333 410.5 209.3 409.7 186.5 406.5C163.7 403.3 136.333 392.833 125.5 388C115.167 384.833 95.3 380.1 86.5 380.5C75.5 381 38 391 17 434.5C-4.00003 478 -3.14713e-05 484.5 5.49997 492C11 499.5 30.5 503.5 79.5 496.5C118.7 490.9 157.5 490.5 181.5 491.5C206 491.5 237 466 249.5 473C262 480 269.5 488 279 488.5L269.5 495C266.833 495.5 259.9 496.2 253.5 495C247.1 493.8 244.667 494.5 244.5 495C240.216 499.02 241.5 500.5 241.5 506C245.833 510.667 252.29 516.161 256.5 518.5C261 521 259 524 263.5 526C265.147 526.732 275 532.5 288.5 533.5C298.667 535 321.3 538.2 330.5 539C342 540 354.5 550 362 552.5C369.5 555 473.5 596.5 557.5 592C641.5 587.5 671.5 608.5 715.5 518.5C759.5 428.5 789 351.5 792 287C795 222.5 756.5 185 736 171C715.5 157 670.5 135 634 141C597.5 147 580 198 576.5 216C573 234 582 354 547 376C519 393.6 447.667 429 415.5 444.5C393 450 344.5 462.2 330.5 467C313 473 302.75 485.25 288.5 488.5C274.25 491.75 272.5 493.435 268.5 494.5C264.5 495.565 252 494 248.5 494C245 494 241 497 242 505C242.8 511.4 242.333 525.833 242 556" />
</svg> `
            }
        },
        { 'css': { 'min-height': '40vh', }, },
    ],
    'Dreams': [
        {
            'description': ["These long-term goals are culmination of my interests, projects, and activties.", "This is the future that I want to build."],
            'justify': 'flex-end',
            'css': {
                'min-height': '5rem',
            }
        },
        {
            'title': ["Computers Recognizing Concepts", "with Entity Linking"],
            'description': "The core of human creativity is lateral thinking—finding connections between seemingly unrelated ideas. Prose is the most concentrated form of meaning that we produce at scale, so NLP is a natural interface through which computers can think with humans. Entity linking and dense passage representations could allow computers systematically and restlessly engage in lateral thinking.",
            'iconLeft': true,
            'justify': 'flex-end',
            'css': { 'min-height': '50vh' },
            'icon': {
                'max_width': '30rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 552 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M133 0.5V142.5C137.4 119.7 152.833 87.3334 160 74C165.6 64.4 177.667 52.3333 183 47.5C184.5 45.5 195 34 197.5 33C200.899 32.6135 209.5 27.5 212.5 24C212.5 23.1667 213.3 20.9 216.5 18.5C220.5 15.5 225 14 227 14.5C229 15 227 17 225 18C223 19 218.5 22 219 23C219.5 24 223.5 21.5 226 20C228.5 18.5 236.5 14.5 240 14.5C237.667 19 232.7 28.3 231.5 29.5C230 31 228 33.5 225 33.5C222 33.5 218.5 32.5 216 37.5C213.5 42.5 214 43.5 215.5 43.5C217 43.5 219.5 40 222 40C224.5 40 224.5 40 224.5 43C224.5 46 218.5 57 217 60.5C215.5 64 210 75.5 210 79.5C209.833 81 210.3 84 213.5 84C217.5 84 216 82.5 220 82.5C224 82.5 224 89 224 91C224 94 221.189 108.379 213.5 105.5C205.811 102.621 194 102.5 193.5 130C193.5 135.6 193.833 140.667 194 142.5C201.5 141.333 218.5 139 226.5 139C236.5 139 239.5 140.5 239.5 142.5C239.5 144.5 235.5 146.5 233.5 150C231.5 153.5 231.5 156 234 158.5C236.5 161 241 162 245 162C249 162 267 158 267 150C267 144.5 261 145 261 141.5C261 137 269 134 287 130.5C301.4 127.7 312.333 126 316 125.5C309 94 305.5 85.5 322.5 85.5C329.5 85.5 335.5 83 335 78C334.5 73 330 65 324.5 65C319 65 317.016 74 309 74C301.5 74 301 54.5 300.5 50C304.167 49.5 312.6 48.1 317 46.5C322.5 44.5 330.5 41.5 330.5 39.5C330.5 37.5 326 36.5 326 33.5C326 30.5 329 25 342.5 25C354 25 352 28 351.5 32C351.265 33.8785 351.5 36.5 358 36.5C370 36.5 410 20 422.5 20C435 19.5 426.5 22.5 433.5 27.5C439.5 31 447 30 447 26C447 22 442 22.5 439 18.5C436 14.5 442.5 15 446.5 14C449.7 13.2 451.5 12.6667 452 12.5C457.5 16.6667 469.3 25.6 472.5 28C476.5 31 477.5 30.5 475.5 28C473.5 25.5 478 28 479.5 29C481 30 489.5 38.5 490 41C490.5 43.5 490 42.5 489 41.5C488 40.5 489.5 44 492.5 46.5C494.9 48.5 502.833 58.6667 506.5 63.5C507.333 63.5 508.9 62.9 508.5 60.5C508 57.5 508.281 56.2865 510.5 59.5C525 80.5 535 98 543 124C562.231 186.5 556.5 282 470.5 350.5C380 417 250.5 415 167.5 305C135.5 255.5 135 226.5 133 212.5L130 250.5C118 241 97.4999 223 84.4999 229C71.4999 235 85.4399 229.922 35.4999 281.5C4.99999 313 -0.999946 316.5 3.50004 328C5 331.5 8.5 332 10 336.5C11.5 341 16.5 366.5 20.5 376C22.5 381.5 28.5 385 32.5 391.5C36.5 398 66.5 425 74.5 424C76.3333 424.667 80.9 424.1 84.5 416.5L87.5 418C82.5 428 75 436 66 433C61.5627 431.324 64 428 57 428C51.5 428 43 441 43.5 445C44 449 46 453 51 452.5C56 452 55 450.5 58.5 450.5
                C62 450.5 67 453.5 67 458.5C67 463.5 43.5 491.5 41.5 493.5C51.5 497 76 506 87 505.5C98 505 96.5 501 96.5 499C96.5 497 93 491.5 93 489C93 486.5 96 483 105.5 483C117 483 137 489.5 137 496.5C137 500.5 134.5 505 125 507C115.5 509 119 516.5 122.5 519C126 521.5 156 528.5 182 530C187.5 507 189.5 495.5 188 489.5C186.5 483.5 184.5 481 177.5 481.5C170.5 482 158 481.5 157.5 472.5C157 463.5 166.5 456 171.5 457C176.5 458 178 467 189 467C196 467 198.5 456 199 438C179.5 434.5 162 428.5 162 425.5C162 422.5 167.5 423 167.5 419C167.5 415 157.5 408.5 146.5 408.5C135.5 408.5 134.5 412 136 416.5C138.333 423.5 130.5 422 127.5 422.5C124 423 101 419.5 89.5 414L86.5 412C86.0292 410 84.9701 405.8 84.5 405C79.5 396 68.7648 390.498 51.5 372C44.5 364.5 39 344 39.5 339.5C40.1667 345.667 44.0637 359 48.5 360.5C61 364.5 65.5 371.5 74 367.5C82.5 363.5 87.5 356 89 346C90.5 336 90.5 332.5 86 327.5C81.5 322.5 68 321 63.5 322.5H61C61.5 322.5 73 320 83.5 325.5C94 331 90 345 88.5 355.5C87 366 87 377 90.5 385C94 393 102 402.5 113.5 398.5C125 394.5 119.5 382.5 116.5 376.5C114 371 114.5 350.5 123 334C129.8 320.8 130.5 306.333 130 295.5C153.5 295.5 267 421.5 267 537" stroke="#E9B2B2" stroke-width="3"/>
</svg> `
            }
        },
        {
            'title': ["Operating on Meaning", "with Question Answering"],
            'description': "Just as prose is an intentional, meaning-rich form of storing information, question-answering is a targeted way of trading ideas. Currently, question-answering models can find web articles and extrapolate concrete answers to specific questions. In the future, the question-answering interface can target searches to match messy ideas and existing thoughts. We have the world's information at our fingertips now, but we can have the world's ideas at our fingertips someday.",
            'iconLeft': false,
            'justify': 'flex-begin',
            'css': { 'min-height': '50vh' },
            'icon': {
                'max_width': '30rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 241 241" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d=" M 93.0,0.0 L 93.0,32.5 C 94.0,27.5 97.0,13.5 99.0,7.5 C 108.5,10.0 113.5,13.0 113.0,16.5 C 112.5,20.0 107.5,25.0 107.0,33.5 C 106.5,42.0 112.5,45.5 117.0,45.5 C 123.0,45.5 119.5,35.5 123.0,28.5 C 126.5,23.0 128.0,22.5 135.5,28.5 C 143.0,34.5 158.0,49.0 168.5,53.0 C 165.5,64.5 163.5,72.5 157.5,81.0 C 155.5,84.0 148.5,83.0 146.0,79.5 C 143.5,76.0 142.5,69.0 136.5,69.5 C 130.5,70.0 127.0,76.0 128.0,87.0 C 129.364,102.0 136.5,96.0 139.0,96.0 C 141.5,96.0 149.002,95.5249 150.0,110.5 C 150.8,119.7 150.667,125.333 150.0,127.0 C 174.5,127.0 185.0,121.0 188.0,119.0 C 191.0,117.0 190.0,116.5 186.5,115.5 C 183.0,114.5 182.0,107.0 196.5,102.0 C 211.0,97.0 210.5,100.5 208.5,107.0 C 206.5,113.5 210.5,113.0 221.0,108.5 C 229.4,104.9 236.167,98.3333 238.5,95.5 C 242.0,101.5 238.5,112.5 234.5,116.0 C 230.0,120.0 227.5,116.5 222.0,120.5 C 216.5,124.5 218.5,132.5 221.5,132.0 C 224.5,131.5 229.5,128.0 230.5,127.0 C 231.5,126.0 234.0,125.5 229.0,131.5 C 224.0,137.5 219.5,142.5 219.0,144.5 C 215.0,147.0 209.0,149.5 206.5,150.5 C 204.0,151.5 201.0,151.5 204.0,149.0 C 207.0,146.5 200.5,147.5 196.5,149.0 C 192.5,150.5 186.0,155.0 190.0,155.0 C 194.0,155.0 190.5,157.5 180.5,159.5 C 172.5,161.1 168.833,161.833 168.0,162.0 C 164.5,156.0 167.5,151.0 152.0,156.5 C 140.0,159.5 139.5,159.0 138.5,155.0 C 137.5,151.0 138.0,148.5 150.5,148.0 C 163.0,147.5 166.0,140.0 158.0,137.0 C 151.6,134.6 149.667,130.333 149.5,128.5 C 147.9,132.9 140.833,135.833 138.0,137.0 C 120.0,122.0 113.5,112.5 112.0,110.5 C 110.5,108.5 109.0,109.0 110.0,114.0 C 111.0,119.0 113.0,123.0 110.0,123.0 C
                107.0,123.0 101.0,116.0 100.5,111.5 C 100.0,107.0 101.5,106.0 101.5,104.5 C 101.5,99.5 95.5,85.0 89.0,77.5 L 40.0,127.0 C 56.8333,134.833 90.8,150.7 92.0,151.5 C 103.0,158.5 120.5,169.5 123.5,171.5 C 126.5,173.5 123.5,176.0 120.5,178.0 C 117.5,180.0 121.0,185.5 129.0,190.5 C 137.0,195.5 148.0,198.0 143.5,189.5 C 139.0,181.0 152.0,185.0 161.5,187.0 C 169.1,188.6 178.0,192.0 181.5,193.5 C 181.5,197.5 180.0,200.0 185.0,207.5 C 190.0,215.0 184.5,216.0 180.5,216.0 C 176.5,216.0 169.0,211.5 164.0,210.5 C 159.0,209.5 155.5,209.5 154.5,214.5 C 153.5,219.5 160.0,223.5 165.0,224.0 C 170.0,224.5 181.5,224.0 181.5,231.5 C 181.5,233.0 181.5,236.5 181.0,237.5 C 163.0,234.5 154.5,231.0 150.5,229.5 C 146.5,228.0 145.0,228.5 148.5,231.5 C 152.0,234.5 149.5,234.5 142.5,231.5 C 135.5,228.5 135.5,227.0 137.0,227.0 C 138.5,227.0 138.0,225.5 124.0,218.0 C 119.5,215.589 117.5,214.0 116.5,213.0 C 113.333,207.5 106.6,195.7 105.0,192.5 C 103.0,188.5 101.5,189.5 101.0,190.0 C 100.5,190.5 97.5,190.0 94.5,184.0 C 91.5,178.0 88.5,170.0 94.5,175.5 C 97.7727,178.5 96.5,176.0 94.0,164.5 C 93.2,161.3 92.0,154.5 91.5,151.5 L 39.5,127.0 L 39.5,191.0 L 35.5,195.0 L 42.5,202.0 L 35.5,209.0 L 42.5,216.0 L 28.5,216.0 L 31.0,219.0 L 46.5,219.0 L 49.0,215.5 C 53.0,215.5 53.6667,212.167 53.5,210.5 L 24.0,210.5 L 24.0,209.0 L 54.0,206.5 L 24.0,205.5 L 54.0,203.0 L 24.0,201.5 L 54.0,199.0 L 24.0,197.5 L 54.0,195.0 L 24.0,193.5 L 33.0,190.5 C 33.0,145.7 27.3333,129.167 24.5,126.5 C 29.0,126.5 33.0,126.5 33.0,133.0 C 33.0,140.0 35.5,139.5 35.5,133.0 C 35.5,126.5 35.5,126.5 35.5,120.5 C 35.5,114.5 38.0,114.5 38.0,120.5 C 38.0,126.5 38.0,127.0 38.0,133.0 C 38.0,139.0 40.5,139.0 40.5,133.0 C 40.5,127.0 40.5,127.0 40.5,120.5 C 40.5,114.0 43.5,114.0 43.5,120.5 C 43.5,127.0 43.5,127.0 43.5,133.0 C 43.5,139.0 46.5,139.0 46.5,133.0 C 46.5,127.0 47.0,126.0 56.0,126.0 C 52.5,135.667 44.5,146.0 45.5,191.5 L 56.0,191.5 C 56.0,157.5 76.5,154.0 76.5,126.0 C 76.5,94.0 49.0,87.5 38.0,87.5 C 27.0,87.5 0.5,99.0 0.5,125.0 C 0.5,152.5 22.5,161.0 22.5,190.5 L 24.0,190.5 L 24.0,240.5 " stroke="#D9C2C2"/>
</svg>
  `
            }
        },
        {
            'title': ["Meaning Technologies as", "Implantable Memory Prosthetics"],
            'description': `These are technologies that operate on meaning rather than information, just like the human mind. When computers can read texts and perform lateral thinking searches just as an intern can, asking the computer will be like finding a connection in your memory. Removing the bottleneck of prose with a brain-machine interface will allow us to reason with all the world's knowledge just as we reason with our brain's knowledge today.`,
            'iconLeft': true,
            'justify': 'flex-end',
            'icon': {
                'max_width': '30rem',
                'svg_el': `
                <svg style="width: 100%;" viewBox="0 0 768 665" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="
     M 753.944,0 V 324.493 C 758.939,321.964 759.131,326.315 761.0,348.0 C 762.509,365.5 745.5,369.0 734.5,369.0 C 722.0,369.0 716.5,384.0 702.0,383.5 C 687.5,383.0 683.0,375.5 686.5,366.5 C 680.861,381.0 696.5,379.5 689.0,386.5 C 684.5,391.0 673.5,404.0 658.0,404.0 C 636.0,404.0 641.0,412.0 626.0,411.5 C 607.5,409.5 590.5,399.0 593.0,375.5 C 586.334,372.5 570.9,364.5 562.5,356.5 C 552.0,346.5 553.0,334.856 566.0,331.5 C 509.5,351.0 502.5,295.0 505.5,290.0 C 502.667,292.833 494.9,297.5 486.5,293.5 C 476.0,288.5 491.0,238.5 486.5,222.5 C 467.0,235.5 424.0,226.5 414.5,206.0 C 373.0,229.0 353.5,207.5 350.5,203.0 C 352.334,205.667 357.5,211.3 363.5,212.5 C 355.5,172.5 311.5,185.0 305.0,197.5 C 306.334,195.167 311.1,189.9 319.5,187.5 C 296.5,249.5 243.137,200.5 260.0,174.0 C 253.0,185.0 252.5,207.0 273.5,214.5 C 268.5,226.5 265.5,226.5 256.0,235.5 C 246.5,244.5 238.5,240.0 230.5,243.5 C 224.0,246.0 225.511,253.569 218.0,256.5 C 197.5,264.5 181.0,228.5 204.0,207.5 C 180.0,231.0 201.0,256.5 205.5,257.5 C 202.7,268.7 185.667,278.5 177.5,282.0 C 178.5,299.0 229.0,333.0 273.5,298.5 C 230.0,333.0 184.5,301.0 181.0,289.5 C 178.2,303.5 169.834,310.333 166.0,312.0 C 181.0,317.0 197.5,330.5 197.0,347.0 C 196.5,363.5 181.5,377.5 144.5,390.5 C 166.0,440.0 206.5,434.5 222.0,434.5 C 237.5,434.5 237.556,434.5 227.0,424.5 C 249.5,453.5 315.5,459.0 331.0,459.0 C 346.5,459.0 377.5,455.245 395.0,452.5 C 355.5,456.5 359.0,459.5 352.0,476.5 C 337.5,501.0 320.5,512.0 302.5,514.5 C 285.0,532.5 267.5,601.0 255.5,654.5 L 235.5,649.5 C 260.5,580.5 246.5,555.5 258.5,536.5 C 268.1,521.3 272.167,515.5 273.0,514.5 L 260.5,514.5 C 233.5,546.0 222.5,572.5 131.5,555.5 C 73.0003,545.5 49.5003,479.5 48.5003,459.0 L 58.0003,462.0 C 25.5003,449.0 12.0,424.0 33.0001,383.5 C -6.5,378.0 0.500005,280.5 3.5,263.0 C 6.5,245.5 24.5,234.5 35.5,234.5 C 19.0,234.5 24.0,182.5 57.0,174.5 C 55.4,192.5 66.0,199.667 71.5,201.0 C 52.5,194.5 50.5,144.0 91.5,134.0 C 80.5,161.0 81.0,194.0 106.0,207.5 C 79.0,194.0 71.0,126.0 130.5,107.0 C 130.5,134.0 137.0,146.0 141.5,152.5 C 132.5,141.0 119.0,85.0 163.0,81.5 C 159.4,90.3 160.167,89.5 161.0,88.0 C 175.0,55.5 197.5,41.0 231.0,48.0 L 222.5,46.0 C 223.0,26.5 254.5,15.0 268.5,29.5 C 266.1,35.9 266.167,42.5 266.5,45.0 C 265.0,24.5 289.5,-4.5 315.0,31.5 C 326.5,52.0 334.5,48.0 343.5,48.0 C 357.5,48.0 377.0,76.0 377.5,104.0 C 377.5,122.8 360.833,141.167 352.5,148.0 L 352.5,161.5 C 322.5,183.0 303.0,184.5 299.5,125.5 C 299.5,104.3 280.833,87.3333 271.5,81.5 C 291.0,95.5 301.5,115.0 301.0,137.5 C 265.5,137.5 246.0,102.5 219.5,104.0 C 202.5,104.0 173.0,119.0 174.5,165.0 C 174.5,179.0 184.0,197.5 199.5,197.5 C 166.0,197.5 153.0,207.5 150.0,214.5 C 141.5,235.5 116.0,250.5 111.0,271.5 C 111.0,246.7 107.667,228.167 106.0,222.0 C 109.03,239.0 112.0,255.5 109.0,280.5 C 106.0,305.5 131.0,317.5 141.5,317.5 C 103.5,314.0 55.0,323.0 80.5,363.5 C 100.9,395.9 109.667,431.333 111.5,445.0 C 144.5,465.5 169.0,465.0 190.5,455.0 L 222.0,476.5 C 187.0,491.5 133.5,488.0 109.0,481.0
                L 133.5,514.5 C 194.0,524.5 235.0,492.5 282.0,491.5 C 305.0,491.5 304.0,451.0 293.0,425.5 C 282.0,400.0 261.5,388.5 235.5,396.0 C 271.0,383.5 268.0,375.0 277.0,381.0 C 286.0,387.0 289.0,399.0 299.5,384.0 C 310.0,369.0 326.5,360.0 343.5,359.0 C 360.5,358.0 365.0,339.0 363.5,330.5 C 362.0,322.0 354.0,310.5 330.5,316.0 C 356.0,310.0 370.5,315.5 370.5,326.0 C 370.5,336.5 380.5,347.5 383.5,348.5 C 376.0,343.5 351.0,309.0 399.5,310.0 C 399.5,316.0 406.001,331.0 420.0,320.5 C 409.5,330.5 412.5,327.0 429.5,339.0 C 438.5,344.5 446.0,335.0 456.5,335.5 C 467.0,336.0 472.0,348.5 481.5,348.5 C 489.1,348.5 491.0,347.5 491.0,347.0 L 488.5,327.0 C 489.5,346.0 490.5,370.0 526.0,370.0 C 561.5,370.0 530.5,410.0 488.5,406.0 C 446.5,402.0 433.5,375.5 424.0,363.0 C 440.5,384.273 424.0,388.0 407.5,394.5 C 391.0,401.0 394.0,413.5 383.5,417.5 C 375.1,420.7 364.667,416.5 360.5,414.0 C 383.5,422.0 385.5,418.5 394.0,407.5 C 402.5,396.5 405.5,393.5 412.0,394.5 C 418.5,395.5 425.5,415.5 447.5,417.5 C 469.5,419.5 533.5,429.5 555.5,414.0 C 577.5,398.5 585.5,348.0 585.5,330.5 C 585.5,280.5 582.61,272.445 614.5,256.5 C 630.5,248.5 637.5,245.5 641.0,245.5 C 660.5,245.5 671.5,268.0 633.0,295.5 C 665.0,268.0 673.0,285.5 638.0,321.0 C 654.0,300.5 655.5,302.5 655.0,319.5 C 654.6,333.1 641.833,346.833 635.5,352.0 C 645.57,341.5 651.5,357.5 659.5,356.5 C 666.0,356.5 669.0,358.5 676.0,345.5 C 683.0,332.5 689.5,351.0 702.0,332.5 C 712.0,317.7 707.5,286.667 704.0,273.0 C 707.6,286.2 689.833,305.167 680.5,313.0 C 717.977,283.109 704.61,230.804 663.5,233.5 C 696.5,231.5 681.5,250.5 694.5,219.0 C 703.7,222.2 713.333,218.0 717.0,215.5 C 711.045,218.659 697.518,225.73 691.0,210.0 C 683.737,192.472 654.5,167.0 625.5,170.0 C 655.0,167.5 653.5,180.5 647.5,166.5 C 641.5,152.5 644.5,149.5 647.5,146.0 C 655.5,139.0 676.0,149.5 688.0,157.0 C 666.0,144.0 668.0,127.0 658.5,119.0 C 650.9,112.6 642.0,113.667 638.5,115.0 C 638.5,106.6 643.167,105.5 645.5,106.0 C 639.0,106.0 637.0,117.0 638.5,124.0 C 640.0,131.0 633.5,132.0 630.0,132.0 C 626.5,132.0 621.0,128.5 615.0,132.0 C 609.0,135.5 610.5,140.5 606.0,145.0 C 601.5,149.5 589.0,148.5 583.0,166.5 C 577.0,184.5 580.0,219.0 598.0,227.0 C 588.0,219.0 592.0,218.5 587.0,225.0 C 582.0,231.5 574.0,230.0 569.0,228.5 C 564.0,227.0 570.0,216.0 562.5,243.0 C 572.0,214.0 569.0,183.406 526.5,177.703 C 516.1,177.703 509.167,166.901 507.0,161.5 C 526.5,158.0 528.0,123.5 523.0,106.0 C 529.0,139.5 524.5,172.5 472.0,157.0 C 460.5,153.605 468.0,144.0 459.0,131.5 C 450.0,119.0 415.5,103.5 415.5,57.0 C 395.5,35.4 362.167,40.0 348.0,45.0 C 297.0,50.0 303.5,-16.0 374.5,10.5 L 382.5,7.00001 C 411.5,-3.49999 456.5,1.50001 474.5,17.5 C 487.5,31.5 488.501,26.5 474.5,40.0 C 505.0,12.0 550.5,34.0 559.0,44.5 C 566.5,52.0 563.5,43.0 551.5,51.5 C 578.0,34.0 621.353,59.0 642.0,91.5 C 638.0,98.7 639.0,100.833 640.0,101.0 C 634.0,92.5 653.0,88.5 664.5,111.0 C 661.5,98.0 723.0,141.0 721.5,161.0 C 720.0,181.0 708.0,178.5 704.0,177.5 C 723.0,181.0 715.5,161.5 732.5,176.0
                C 749.5,190.5 741.0,234.5 735.0,244.0 C 745.5,213.0 750.0,239.5 757.5,257.0 C 765.0,274.5 767.579,284.5 766.5,296.0 C 766.5,301.92 763.997,315.348 752.944,324.493
L 767.5,243.5 L 767.5,296.0 C 767.5,301.92 764.997,315.348 753.944,324.493
L752.944 324.493C757.939 321.964 758.131 326.315 760 348C761.509 365.5 744.5 369 733.5 369C721 369 715.5 384 701 383.5C686.5 383 682 375.5 685.5 366.5C679.861 381 695.5 379.5 688 386.5C683.5 391 672.5 404 657 404C635 404 640 412 625 411.5C606.5 409.5 595 399 585.5 377C595.5 397 596.5 406.5 577.5 425.5C589.5 412.5 590 412 589.5 430C589 448 565.5 457 551 457.5C536.5 458 533 450 526 450.5C519 451 525 453.5 518 465.5C511 477.5 496.5 485.5 485 485.5C463 485.5 438 463.5 420 463.5C446 468 449.5 477 440.5 476.5C431.5 476.5 427.5 496 401 511C379.8 523 357.167 526.667 348.5 527C375 521.982 379.5 530.5 380.5 547C381.5 563.5 371.5 587.5 332 617C305.22 637 310 649 305 664.5
" />
</svg>
`
            }
        },
    ],
    ' ': [
        { 'css': { 'min-height': '35vh', }, },
    ]
}

import { List } from 'immutable';

const svg_infos = Array.from(Object.values(sections)).map(sec => sec.filter(p => p.hasOwnProperty('icon')).map(p => p.icon)).flat()
const get_path_els = () => Array.from(document.querySelectorAll('.has-line-art path'));

//const GET_SCROLLMAGIC_OFFSET_DELAY = () => document.documentElement.clientHeight * 0.55;
const GET_SCROLLMAGIC_OFFSET_DELAY = () => document.documentElement.clientHeight * 1.00 * TRIGGER_HOOK;
const STROKE_WIDTH = 5;
const LINE_COLOR = '#326ccc'; // make it a gradient that fills section-wise from the top eventually
const PRIMARY_COLOR = '#f0f0ff';
const TRIGGER_HOOK = 0.5;
const ICON_TRIGGER_HOOK = 1.0;
const FLASHBACK_TRIGGER_HOOK = 0.3;
const BW = 0;   // border width


function el(elem_name, inline_style, children, className=null, kwargs={}) {
    if (! Array.isArray(children)) children = [children];
    return `<${elem_name}${className ? ' class="' + className + '"' : ''} style="${inline_style}" ${Object.entries(kwargs).map(([k, v]) => k + '="' + v + '"').join(' ')}>\n${children.join("\n")}\n</${elem_name}>`;
}

function zip(...arr) {
    const min_len = Math.min(arr.map(a => a.length));
    return arr[0].map((_, i) => arr.map(row => row[i]));    // https://stackoverflow.com/a/10284006/10372825
}

function possiblyReversed(do_reverse, arr) {
    if (do_reverse) arr.reverse();
    return arr;
}

function budget_react_inital_render() {
    const inner_html = el('div', null, 
        Object.entries(sections).map(([sec_title, items]) => el('div', `display: flex; flex-direction: column; padding-x: 2rem; border: ${BW}px solid purple;`, [
            el('div', 'font-size: 4rem; font-weight: 800; z-index: 40;', [sec_title], 'sm-fade-in'),
            //...Object.values(items).map(({title, description, icon, css, iconLeft, justify, flashbacks}) => el('div', `position: relative; display: flex; align-items: center; min-height: 40vh; margin-bottom: 1em; ${css ?
            ...Object.values(items).map(({title, description, icon, css, iconLeft, justify, flashbacks}) => el('div', `position: relative; display: flex; align-items: top; min-height: 40vh; margin-bottom: 1em; ${css ?
                    Object.entries(css).map(([k, v]) => k + ': ' + v).join('; ') : ''}`, [
                el('div', `justify-content: ${justify ? justify : 'flex-begin'}; width: 100%; display: flex; z-index: 40; border: ${BW}px solid cyan`, possiblyReversed(iconLeft, [
                    el('div', `max-width: 65ch; display: flex; align-items: center; border: ${BW}px solid orange;`, [
                        //el('div', `border: ${BW}px solid green; text-align: ${iconLeft? 'left' : 'right'};`, [
                        el('div', null, [
                            el('div', 'font-size: 2rem; font-weight: 600; margin-bottom: 1em;',
                                Array.isArray(title) ? title.map(t => el('div', null, [t], 'sm-fade-in')) : [el('span', null, [title], 'sm-fade-in')]
                            ),
                            el('div', null, 
                                Array.isArray(description) ? description.map(d => el('div', 'margin-bottom: 1em;', [DOMPurify.sanitize(marked.parse(d))], 'sm-fade-in'))
                                : [el('span', null, [DOMPurify.sanitize(marked.parse(description  || ''))], 'sm-fade-in')]
                            )
                        ])
                    ]),
                    el('div', 'width: 5rem;'), // spacer
                    icon ? el('div', `min-width: 100px; display: flex; border: ${BW}px solid red; align-items: center; justify-content: center; ${icon.max_width? 'max-width: ' + icon.max_width : ''}`, [icon.svg_el]) : null,
                ]), 'has-line-art'),
                ...(flashbacks ? flashbacks.map(({srcs, style, x, y}) => 
                    el('div', `display: inline-block; position: absolute; opacity: 0; left: ${x}vw; bottom: ${y}px; ${Object.entries(style).map(([k, v]) => k + ':' + v + ';').join(' ')};`, [
                        el('img', `opacity: 0;`, [], 'sm-flashback', { 'src': srcs[0] })
                    ], 'bg-dark')
                ) : [])
            ]))
        ]))
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

    const doc_frag = document.createDocumentFragment();
    for (let path of paths_to_convert) {
        // calculate the path transformation
        const svg = path.parentElement;
        const bbox = svg.getBoundingClientRect();
        const scaling_factor = (bbox.right - bbox.left) / svg.viewBox.baseVal.width;
        const [ off_x, off_y ] = [ svg.viewBox.baseVal.x, svg.viewBox.baseVal.y ]; // og vbox offset
        const mv_x = v => (v-off_x)*scaling_factor + bbox.x; const mv_y = v => (v-off_y)*scaling_factor + bbox.y;
        const transform_by_type = {
            'M': ([x, y]) => [(x-off_x)*scaling_factor + bbox.x, (y-off_y)*scaling_factor + bbox.y],
            'L': ([x, y]) => [(x-off_x)*scaling_factor + bbox.x, (y-off_y)*scaling_factor + bbox.y],
            'C': ([x1, y1, x2, y2, x3, y3]) => [mv_x(x1), mv_y(y1), mv_x(x2), mv_y(y2), mv_x(x3), mv_y(y3)],
            'H': ([x]) => [(x-off_x)*scaling_factor + bbox.x],
            'V': ([y]) => [(y-off_y)*scaling_factor + bbox.y],
        }

        // create and transform all the paths
        const new_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        new_path.setPathData(path.getPathData().map(
            ({ type, values }) => ({ type, values: transform_by_type.hasOwnProperty(type) ? transform_by_type[type](values) : values })
        ));
        //new_path.setAttribute('stroke-width', path.getAttribute('stroke-width') * scaling_factor);    // keep original stroke from svg
        new_path.setAttribute('stroke-width', STROKE_WIDTH);                                                     // reset all stroke to 5
        new_path.setAttribute('stroke', LINE_COLOR);
        new_path.setAttribute('fill', 'none')
        new_path.setAttribute('stroke-linejoin', 'round')

        const len = new_path.getTotalLength();
        new_path.style.strokeDasharray = len;
        new_path.style.strokeDashoffset = len;

        new_path.classList.add("flattened-icon-path");
        for (let cls of path.classList) new_path.classList.add(cls);
        doc_frag.appendChild(new_path);

        svg.style.opacity = '0'; // hide the old one generated by budget-react

        // setup scrollmagic
        new ScrollMagic.Scene({
            offset: bbox.top - GET_SCROLLMAGIC_OFFSET_DELAY(),
            duration: bbox.bottom - bbox.top,
            tweenChanges: true,
        })
            .setTween(new TweenMax.to(new_path, 0.1, { strokeDashoffset: 0, ease: Power2.easeOut }))
            .triggerHook(ICON_TRIGGER_HOOK)
            .addTo(controller)
    }

    // create header line
    (() => {
        const next_pos = [doc_frag.children[0].getPointAtLength(0).x, document.documentElement.clientHeight+1];
        const prev_pos = [next_pos[0], GET_SCROLLMAGIC_OFFSET_DELAY()];

        const init_thread_base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        init_thread_base.setAttribute('d', `M ${prev_pos.join(',')} L ${next_pos.join(',')}`);    // bezier
        init_thread_base.setAttribute('stroke-width', STROKE_WIDTH);
        init_thread_base.setAttribute('stroke', PRIMARY_COLOR);
        init_thread_base.setAttribute('fill', 'none');
        bg.prepend(init_thread_base);

        const init_thread = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        init_thread.setAttribute('d', `M ${prev_pos.join(',')} L ${next_pos.join(',')}`);    // bezier
        init_thread.setAttribute('stroke-width', STROKE_WIDTH);
        init_thread.setAttribute('stroke', LINE_COLOR);
        init_thread.setAttribute('fill', 'none');
        const len = init_thread.getTotalLength();
        init_thread.style.strokeDasharray = len;
        init_thread.style.strokeDashoffset = len;
        init_thread.classList.add('flattened-icon-path')
        doc_frag.prepend(init_thread);
        new ScrollMagic.Scene({
            offset: - GET_SCROLLMAGIC_OFFSET_DELAY()/2,   // should equal zero
            duration: next_pos[1] - prev_pos[1] + GET_SCROLLMAGIC_OFFSET_DELAY()/2,
            tweenChanges: true,
        })
            .setTween(new TweenMax.to(init_thread, 0.1, { strokeDashoffset: 0, ease: Power2.easeInOut }))
            .triggerHook(TRIGGER_HOOK)
            .addTo(controller)
    })();


    // create footer line
    (() => {
        const bbox = document.getElementById('footer-line-spacer').getBoundingClientRect();
        const prev_pos = [window.scrollX + bbox.right, window.scrollY + document.getElementById('footer-line-spacer').parentElement.getBoundingClientRect().top];
        const next_pos = [window.scrollX + bbox.left,  window.scrollY + (bbox.bottom + bbox.top) / 2]


        const init_thread = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        init_thread.setAttribute('d', `M ${prev_pos.join(',')} L ${prev_pos[0]} ${next_pos[1]} L ${next_pos.join(',')}`);    // bezier
        init_thread.setAttribute('stroke-width', STROKE_WIDTH);
        init_thread.setAttribute('stroke', LINE_COLOR);
        init_thread.setAttribute('fill', 'none');

        const len = init_thread.getTotalLength();
        init_thread.style.strokeDasharray = len;
        init_thread.style.strokeDashoffset = len;
        init_thread.classList.add("flattened-icon-path");
        doc_frag.appendChild(init_thread);
        new ScrollMagic.Scene({
            offset: prev_pos[1] - GET_SCROLLMAGIC_OFFSET_DELAY(),
            duration: document.documentElement.clientHeight * TRIGGER_HOOK/2,
            tweenChanges: true,
        })
            .setTween(new TweenMax.to(init_thread, 0.1, { strokeDashoffset: 0, ease: Power1.easeOut }))
            .triggerHook(TRIGGER_HOOK)
            .addTo(controller)
    })();
    bg.appendChild(doc_frag);
}
function make_connecting_lines(controller) {
    const bg = document.getElementById('bg-svg');
    const icon_paths = Array.from(document.querySelectorAll('.flattened-icon-path')).filter(p => { return !p.classList.contains('sm-connector-skip') });

    const connections = document.createDocumentFragment();

    // create other lines
    for (let i=1; i<icon_paths.length; i++) {
        const prev_path = icon_paths[i-1];
        const next_path = icon_paths[i];
        const prev_pos = (() => { const p = prev_path.getPointAtLength(prev_path.getTotalLength()); return [p.x, p.y]; })();    // no operator.itemgetter :(
        const next_pos = (() => { const p = next_path.getPointAtLength(0); return [p.x, p.y]; })();
        const vertical_half_way = (prev_pos[1] + next_pos[1]) / 2;

        // create the connecting path and add it to the DOM
        const connector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        //connector.setAttribute('d', `M ${prev_pos.join(',')} L ${next_pos.join(',')}`);    // straight line
        if (next_pos[1] - prev_pos[1] > Math.abs(next_pos[0] - prev_pos[0])) { // taller than it is wide
            connector.setAttribute('d', `M ${prev_pos.join(',')} C ${prev_pos[0]},${vertical_half_way} ${next_pos[0]},${vertical_half_way} ${next_pos.join(',')}`);    // bezier with control points at half way
        } else {
            connector.setAttribute('d', `M ${prev_pos.join(',')} C ${prev_pos[0]},${next_pos[1]} ${next_pos[0]},${prev_pos[1]} ${next_pos.join(',')}`);    // bezier with control points at opposite rect corners
        }
        connector.setAttribute('stroke-width', STROKE_WIDTH);
        connector.setAttribute('stroke', LINE_COLOR);
        connector.setAttribute('fill', 'none');

        // from source of https://scrollmagic.io/examples/advanced/svg_drawing.html
        const len = connector.getTotalLength();
        connector.style.strokeDasharray = len;
        connector.style.strokeDashoffset = len;

        connections.appendChild(connector);

        // create tween and register scene
        new ScrollMagic.Scene({
            offset: prev_pos[1] - GET_SCROLLMAGIC_OFFSET_DELAY(),
            duration: next_pos[1] - prev_pos[1],
            tweenChanges: true,
        })
            .setTween(new TweenMax.to(connector, 0.1, { strokeDashoffset: 0, ease: Power2.easeIn }))
            .triggerHook(ICON_TRIGGER_HOOK)
            .addTo(controller)
    }

    bg.appendChild(connections);
}

function setup_scrollmagic_for_flashback_images(controller) {
    const flashbacks = Array.from(document.getElementsByClassName('sm-flashback'));
    const flash_infos = Array.from(Object.values(sections)).map(sec => sec.filter(p => p.hasOwnProperty('flashbacks')).map(p => p.flashbacks).flat()).flat();
    console.assert(flashbacks.length == flash_infos.length);

    zip(flashbacks, flash_infos).map(([el, info]) => {
        const tweenState = { idx: 0 };  // https://scrollmagic.io/examples/expert/image_sequence.html
        const duration_px = el.parentElement.parentElement.clientHeight * 0.8;

        return new ScrollMagic.Scene({
            triggerElement: el.parentElement.parentElement,
            duration: duration_px,
            tweenChanges: true,
        })
        .setTween(new TimelineMax()
            .to(tweenState, 0.2, {
                idx: info.srcs.length-1,    // animate to the full length
                roundProps: 'idx',          // round idx to nearest int
                immediateRender: true,      // force re-render (is this a reflow? todo-optm)
                ease: Power1.easeInOut,
                onUpdate: () => { el.setAttribute('src', info.srcs[tweenState.idx]) }
            })
            .add(new TimelineMax()  // image opacity
                .to(el, 0.1, { opacity: info.peak_opacity || 0.3, ease: Power2.easeOut })
                .to(el, 0.1, { opacity: 0,                        ease: Power2.easeIn })
                , 0 // set start pos to zero to start animations in parallel
            )
            .add(new TimelineMax()  // background opacity
                .to(el.parentElement, 0.1, { opacity: 1, ease: Power2.easeOut })
                .to(el.parentElement, 0.1, { opacity: 0, ease: Power2.easeIn })
                , 0 // set start pos to zero to start animations in parallel
            )
            .add(new TimelineMax()  // paralax
                .to(el.parentElement, 0.2, { bottom: info.y - duration_px* (info.distance || 0.3), ease: Linear.easeNone })
                , 0
            )
        )
        .triggerHook(info.scrollTrigger || FLASHBACK_TRIGGER_HOOK)
        .addTo(controller)
    });
}

function setup_scrollmagic(controller) {
    const to_fade_in = Array.from(document.getElementsByClassName('sm-fade-in'));
    to_fade_in.map(el => new ScrollMagic.Scene({
        triggerElement: el,
        duration: el.clientHeight,
        tweenChanges: true,
    })
        .setTween(new TweenMax.from(el, 0.1, { opacity: 0, ease: Linear.linear }))
        .triggerHook(TRIGGER_HOOK)
        .addTo(controller)
    );
}

async function preload_flashback_images() {
    const urls = Array.from(Object.values(sections))
        .map(sec => sec.filter(p => p.hasOwnProperty('flashbacks')).map(p => p.flashbacks).flat()).flat()
        .map(info => info.srcs).flat()  // all the image urls
        //.map(url => { const img = new Image(); img.src = url; return img; });

    async function recursive_sequential_loader(urls, idx) {
        return new Promise((res, rej) => {
            const img = new Image();
            img.onload = async () => { res(idx+1 == urls.length ? List([img]) : (await recursive_sequential_loader(urls, idx+1)).push(img)); };
            img.src = urls[idx];
        });
    }
    return await recursive_sequential_loader(urls, 0);
}

function main() {
    const images = preload_flashback_images();
    budget_react_inital_render();
    const controller = new ScrollMagic.Controller();
    setup_scrollmagic(controller);
    setup_bg_svg(controller);
    setup_scrollmagic_for_flashback_images(controller);

    images.then((imgs) => { console.log("loaded", imgs.size, "images sequentially") });

    (() => {
        // scroll to the place where they left off
        const start_scrollpos = localStorage.getItem('leave_scroll_pos')
            .split(',').map(parseFloat) || [0, 0];
        window.scrollTo(...start_scrollpos);

        // scroll for them if they don't do anything
        const timeout = setTimeout(() => {
            const pos = GET_SCROLLMAGIC_OFFSET_DELAY();
            if (window.scrollY < pos)
                window.scrollTo({ top: pos, left: 0, behavior: 'smooth' });
        }, 3 * 1000);
        document.addEventListener('scroll', () => { clearTimeout(timeout); }, { once: true });
    })();
}

document.addEventListener('DOMContentLoaded', main);
window.onbeforeunload = function () {
    localStorage.setItem('leave_scroll_pos', [ window.scrollX, window.scrollY ]);
    window.scrollTo(0, 0);
}


