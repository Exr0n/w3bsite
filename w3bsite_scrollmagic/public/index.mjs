import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
console.log("hello world");

const sections = {
    'Projects': [
        {
            'title': "hewo emacs",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo'
        },
        {
            'title': "another thingy",
            'description': 'hewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewohewo hewo'
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
            Object.values(items).map(({title, description}) => el('div', 'display: flex; align-items: center; height: 100vh; padding: 2em; border: 2px solid red;', [
                el('div', 'justify-content: center; border: 4px solid green; max-width: 65ch;', [
                    el('span', 'font: 2em sans-serif; font-weight: bold;', [title]),
                    el('div', null, [DOMPurify.sanitize(marked.parse(description))])
                ], 'has-line-art')
            ]))
        ))
    );

    console.log(inner_html)
    
    const container = document.getElementById('line-main');
    container.innerHTML = inner_html;
}

function setup_scrollmagic() {
    const controller = new ScrollMagic.Controller();

    const line_art_els = Array.from(document.getElementsByClassName('has-line-art'));
    console.log(line_art_els)

    const tweens = line_art_els.map(el => new TweenMax.to(el, 0.1, { backgroundColor: 'red' }));
    console.log(tweens)

    const scenes = zip(line_art_els, tweens).map(([el, tween]) => new ScrollMagic.Scene({
        triggerElement: el,
        duration: el.clientHeight,
        tweenChanges: true,
    })
        .setTween(tween)
        .addIndicators()
        .addTo(controller)
    );
    console.log(scenes)
}

function main() {
    budget_react_inital_render();
    setup_scrollmagic();
}

document.addEventListener('DOMContentLoaded', main);
