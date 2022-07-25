import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
console.log("hello world");

const sections = {
    'Projects': [
        {
            'title': "hewo emacs",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo<br><br><br>',
            'icon': {
                'enter_x': 0.60430464, 
                'leave_x': 0.33940397,
                'svg_el': `<svg style="width: 100%;" viewBox="1 0 1 1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65302 0V0.130604L1.49318 0.103314L1.35088 0.116959L1.23197 0.165692L1.12086 0.237817L1.25341 0.19883H1.35088L1.19298 0.272905L1.08772 0.337232L1 0.42885L1.10136 0.348928L1.15205 0.325536L1.10136 0.469786V0.592593L1.1345 0.719298L1.68226 1.07602L1.51462 0.510721V0.448343L1.55945 0.403509L1.52827 0.448343L1.55945 0.547758L1.61598 0.592593L1.7154 0.623782L1.76218 0.666667L1.77778 0.719298V0.785575L1.76218 0.810916H1.92203L2 0.719298L1.82066 0.249513H1.77778L1.94542 0.187135L1.846 0.148148L1.73294 0.130604L1.65302 0.148148L1.61598 0.19883L1.50292 0.210526L1.4347 0.224172L1.36842 0.261209L1.29045 0.337232L1.24172 0.403509L1.20858 0.489279L1.25341 0.403509L1.35088 0.325536L1.47758 0.294347L1.34113 0.348928L1.29045 0.419103L1.2807 0.510721L1.29045 0.592593L1.34113 0.719298V1.17349" stroke="white" stroke-width="0.02"/>
</svg>`
            }
        },
        {
            'title': "another thingy",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo',
            'icon': {
                'enter_x': 0.60430464, 
                'leave_x': 0.33940397,
                'svg_el': `<svg style="width: 100%;" viewBox="1 0 1 1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65302 0V0.130604L1.49318 0.103314L1.35088 0.116959L1.23197 0.165692L1.12086 0.237817L1.25341 0.19883H1.35088L1.19298 0.272905L1.08772 0.337232L1 0.42885L1.10136 0.348928L1.15205 0.325536L1.10136 0.469786V0.592593L1.1345 0.719298L1.68226 1.07602L1.51462 0.510721V0.448343L1.55945 0.403509L1.52827 0.448343L1.55945 0.547758L1.61598 0.592593L1.7154 0.623782L1.76218 0.666667L1.77778 0.719298V0.785575L1.76218 0.810916H1.92203L2 0.719298L1.82066 0.249513H1.77778L1.94542 0.187135L1.846 0.148148L1.73294 0.130604L1.65302 0.148148L1.61598 0.19883L1.50292 0.210526L1.4347 0.224172L1.36842 0.261209L1.29045 0.337232L1.24172 0.403509L1.20858 0.489279L1.25341 0.403509L1.35088 0.325536L1.47758 0.294347L1.34113 0.348928L1.29045 0.419103L1.2807 0.510721L1.29045 0.592593L1.34113 0.719298V1.17349" stroke="white" stroke-width="0.02"/>
</svg>`
            }
        }
    ]
}

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

    console.log(inner_html)
    
    const container = document.getElementById('line-main');
    container.innerHTML = inner_html;
}

function setup_scrollmagic() {
    const controller = new ScrollMagic.Controller();

    // setup dash length and offset for all the paths to create the animation appearance
    const path_els = Array.from(document.querySelectorAll('.has-line-art path'));
    path_els.forEach(path => {
        // from source of https://scrollmagic.io/examples/advanced/svg_drawing.html
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
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
    setup_scrollmagic();
}

document.addEventListener('DOMContentLoaded', main);
