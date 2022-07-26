const sections = {
    "": [
        {
            'title': [
                "I'm a high school student <br> and thinking enthusiast.", 
            ],
            'description': [
                "I spend too much time pondering machine learning, communication, brain-machine interfaces, and metacognition.",
                "Let me tell you a bit about what I get up to...",
            ],
            'css': {
                'height': '100vh',
                'font-family': "'Nunito', sans-serif;"
            },
            'icon': {
                'max_width': '20rem',
                'svg_el': `<svg style="width: 100%;" viewBox="0 0 210 265" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M121.5 0.5V77.5C117.333 70.5 107.6 55.2 102 50C95.0001 43.5 94.0001 44 91.5001 44C89.0001 44 81.5001 45 78.5001 50C76.1001 54 77.5001 62 78.5001 65.5C84.0001 74.8333 95.5001 94.3 97.5001 97.5C99.5001 100.7 109.333 118.833 114 127.5V129H112C106.333 120.833 92.5001 102 86.0001 93.5C79.5428 85.0559 63.5001 66 61.0001 63.5C59.0001 61.5 52.0001 55 46.0001 56C44.6668 56 41.4001 56.5 39.0001 58.5C36.0001 61 33.0001 64.5 33.0001 67.5C33.0001 70.5 34.048 75.4768 35.0001 77.5C39.0001 86 45.5001 94 54.5001 106C61.7001 115.6 78.6668 137 87.5001 148.5V151H86.0001C81.5001 145.833 70.0001 132.9 60.0001 122.5C47.5001 109.5 35.0001 95.5 27.5001 92C21.5001 89.2 16.3334 89.8333 14.5001 90.5C12.1667 91.3333 6.40004 93.7 6.00004 98.5C5.50004 104.5 5.50006 106 8.00008 111C9.5001 114 17.9644 125 30.5001 138.5C35.7001 144.1 55.6668 164.333 65.0001 174V176.5H63C59.1667 172.667 50 163.8 44 159C36.5 153 25.5 142 19.5 139.5C13.5 137 9.5 136.5 7 137.5C4.5 138.5 1 142.5 1 148.5C1 151.05 4.5 157.5 7 160.5C12.4167 167 22.5 177.5 29.5 183C35.5 187.714 46.5 197 48 197.5C49.5 198 52.6026 201.051 54.5 202C56.5 203 59 207 61.5 210C63.3333 212.167 67.4 217 69 219C71 221.5 76.5 230 81.5 235C85.1667 239.333 95 248.7 105 251.5C117.5 255 119 254.5 124 254.5C129 254.5 141 250 147.5 246.5C154 243 182 225.5 191.5 211.5C201 197.5 204.5 190 206.5 175.5C208.5 161 206 151 205.5 136C205 121 206.5 124.5 206.5 113C206.5 108 207.125 101.5 208.5 96C209.125 93.5 210.167 87.5 208.5 82.5C207.5 79.5 202.3 76.3 197.5 77.5C191.5 79 187.5 80 183 84.5C178.5 89 173.5 96.9936 173.5 116.5C173.5 120.5 174.5 126 174.5 128C174.5 133.099 174.5 138.5 170 143.5C169.667 144 168.008 146.5 161 146.5C150.5 146.5 138.5 167.5 138 175.5C137.5 180 137.1 191.1 139.5 199.5C142.5 210 158.5 218.5 164.5 243.5C165 245.583 167 255.5 167 264.5" stroke="#FCFCFC"/>
</svg> `
            }
        },

    ],
    'Education': [
        {
            'title': "The Nueva School, 2017 - 2023",
            'description': "I'm a rising senior at [the Nueva school](http://nuevaschool.org/) in San Mateo, California. At school, I'm a member of [FRC team 4904 Bot Provoking](https://botprovoking.org/) and a Mavericks Admissions Ambassador.",
            'icon': {
                'max_width': '10rem',
                'svg_el': `<svg style="width: 100%;" viewBox="1 0 1 1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65302 0V0.130604L1.49318 0.103314L1.35088 0.116959L1.23197 0.165692L1.12086 0.237817L1.25341 0.19883H1.35088L1.19298 0.272905L1.08772 0.337232L1 0.42885L1.10136 0.348928L1.15205 0.325536L1.10136 0.469786V0.592593L1.1345 0.719298L1.68226 1.07602L1.51462 0.510721V0.448343L1.55945 0.403509L1.52827 0.448343L1.55945 0.547758L1.61598 0.592593L1.7154 0.623782L1.76218 0.666667L1.77778 0.719298V0.785575L1.76218 0.810916H1.92203L2 0.719298L1.82066 0.249513H1.77778L1.94542 0.187135L1.846 0.148148L1.73294 0.130604L1.65302 0.148148L1.61598 0.19883L1.50292 0.210526L1.4347 0.224172L1.36842 0.261209L1.29045 0.337232L1.24172 0.403509L1.20858 0.489279L1.25341 0.403509L1.35088 0.325536L1.47758 0.294347L1.34113 0.348928L1.29045 0.419103L1.2807 0.510721L1.29045 0.592593L1.34113 0.719298V1.17349" stroke="gray" opacity="0.5" stroke-width="0.02"/>
</svg>`
            }
        }
    ]
}


const svg_infos = Array.from(Object.values(sections)).map(sec => sec.filter(p => p.hasOwnProperty('icon')).map(p => p.icon)).flat()
const get_path_els = () => Array.from(document.querySelectorAll('.has-line-art path'));

const GET_SCROLLMAGIC_OFFSET_DELAY = () => document.documentElement.clientHeight * 0.55;
const STROKE_WIDTH = 5;
const LINE_COLOR = '#326ccc'; // make it a gradient that fills section-wise from the top eventually
const PRIMARY_COLOR = '#f0f0ff';


function el(elem_name, inline_style, children, className=null) {
    if (! Array.isArray(children)) children = [children];
    return `<${elem_name}${className ? ' class=' + className : ''} style="${inline_style}">\n${children.join("\n")}\n</${elem_name}>`;
}

function zip(...arr) {
    const min_len = Math.min(arr.map(a => a.length));
    return arr[0].map((_, i) => arr.map(row => row[i]));    // https://stackoverflow.com/a/10284006/10372825
}

function budget_react_inital_render() {
    const inner_html = el('div', null, 
        Object.entries(sections).map(([sec_title, items]) => el('div', `display: flex; flex-direction: column; padding-x: 2rem;`, [
            el('div', 'max-width: 100ch; opacity: 0; font-size: 4rem; font-weight: 800;', [sec_title], 'sm-fade-in'),
            ...Object.values(items).map(({title, description, icon, css}) => el('div', `display: flex; align-items: start; height: 30vh; ${css ?
                    Object.entries(css).map(([k, v]) => k + ': ' + v).join('; ') : ''}`, [
                el('div', 'justify-content: center; width: 100%; display: flex; justify-content: space-between; z-index: 40;', [
                    el('div', 'max-width: 65ch; padding: 1em; display: flex; align-items: center;', [
                        el('div', null, [
                            el('div', 'font-size: 2rem; font-weight: 600; margin-bottom: 1em;',
                                Array.isArray(title) ? title.map(t => el('div', null, [t], 'sm-fade-in')) : [el('span', null, [title], 'sm-fade-in')]
                            ),
                            el('div', null, 
                                Array.isArray(description) ? description.map(d => el('div', 'margin-bottom: 1em;', [DOMPurify.sanitize(marked.parse(d))], 'sm-fade-in'))
                                : [el('span', null, [DOMPurify.sanitize(marked.parse(description))], 'sm-fade-in')]
                            )
                        ])
                    ]),
                    icon ? el('div', `min-width: 100px;${icon.max_width? 'max-width: ' + icon.max_width : ''}`, [icon.svg_el]) : null,
                ], 'has-line-art'),
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
        doc_frag.appendChild(new_path);

        svg.style.opacity = '0'; // hide the old one generated by budget-react

        // setup scrollmagic
        new ScrollMagic.Scene({
            offset: bbox.top - GET_SCROLLMAGIC_OFFSET_DELAY(),
            duration: bbox.bottom - bbox.top,
            tweenChanges: true,
        })
            .setTween(new TweenMax.to(new_path, 0.1, { strokeDashoffset: 0, ease: Cubic.easeOut }))
            .addTo(controller)
    }
    bg.appendChild(doc_frag);
}
function make_connecting_lines(controller) {
    const bg = document.getElementById('bg-svg');
    const icon_paths = Array.from(document.querySelectorAll('.flattened-icon-path'));

    const connections = document.createDocumentFragment();

    // create inital line
    (() => {
        const next_pos = [icon_paths[0].getPointAtLength(0).x, document.documentElement.clientHeight+1];
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
        connections.appendChild(init_thread);
        new ScrollMagic.Scene({
            offset: - GET_SCROLLMAGIC_OFFSET_DELAY()/2,   // should equal zero
            duration: next_pos[1] - prev_pos[1] + GET_SCROLLMAGIC_OFFSET_DELAY()/2,
            tweenChanges: true,
        })
            .setTween(new TweenMax.to(init_thread, 0.1, { strokeDashoffset: 0, ease: Cubic.easeIn }))
            .addTo(controller)
    })();

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
        connector.setAttribute('d', `M ${prev_pos.join(',')} C ${prev_pos[0]},${vertical_half_way} ${next_pos[0]},${vertical_half_way} ${next_pos.join(',')}`);    // bezier
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
            .setTween(new TweenMax.to(connector, 0.1, { strokeDashoffset: 0, ease: Cubic.easeIn }))
            .addTo(controller)
    }
    bg.appendChild(connections);
}


function setup_scrollmagic(controller) {
    // create tweens and register scenes for text
    //const line_art_els = Array.from(document.getElementsByClassName('has-line-art'));
    //const text_scenes = line_art_els.map(el => new ScrollMagic.Scene({
    //    triggerElement: el,
    //    duration: el.clientHeight,
    //    tweenChanges: true,
    //})
    //    .setTween(new TweenMax.to(el.children[0], 0.1, { opacity: 1, ease: Cubic.easeOut }))
    //    .addTo(controller)
    //);

    const to_fade_in = Array.from(document.getElementsByClassName('sm-fade-in'));
    to_fade_in.map(el => new ScrollMagic.Scene({
        triggerElement: el,
        duration: el.clientHeight,
        tweenChanges: true,
    })
        .setTween(new TweenMax.to(el, 0.1, { opacity: 1, ease: Linear.linear }))
        .addTo(controller)
    );
    
}

function main() {
    budget_react_inital_render();
    const controller = new ScrollMagic.Controller();
    setup_scrollmagic(controller);
    setup_bg_svg(controller);

    // scroll for them if they don't do anything
    (() => {
        const timeout = setTimeout(() => { window.scrollTo({ top: GET_SCROLLMAGIC_OFFSET_DELAY() * 0.75, left: 0, behavior: 'smooth' }); }, 2 * 1000);
        document.addEventListener('scroll', () => { clearTimeout(timeout); }, { once: true });
    })();
}

document.addEventListener('DOMContentLoaded', main);
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


