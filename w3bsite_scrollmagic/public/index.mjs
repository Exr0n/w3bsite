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

function el(type_or_constructor, classList, ...children) {
    const e = typeof type_or_constructor === 'string' ? document.createElement(type_or_constructor) : type_or_constructor();
    e.classList.add(classList.split(' '));
    for (items of children) e.appendChild(children);
    return e;
}

function budget_react_inital_render() {
    const sections_frag = el(document.createDocumentFragment, '', 
        Object.entries(sections).map(([sec_title, items]) => el('div', 'flex flex-col',
            Object.values(items).map(({title, description}) => el('div', 'flex items-center h-screen p-2 border-2 border-primary',
                el('div', 'justify-center border-4 border-primary max-w-prose', 
                    el('span', 'text-xl font-bold'
                    )
                )
            )
        )
    )


    const sections_frag = document.createDocumentFragment();

    Object.entries(sections).forEach(([sec_title, items]) => {
        const item_div = el('div', 'flex flex-col');

        sections_frag.appendChild(item_div);
    });
    <div className="flex flex-col">{
        Object.values(items).map(({title, description}) => {

            console.log(description)
            return <>
                <div className="flex items-center h-screen p-2 border-2 border-primary">
                    <Fade bottom>
                        <div className="justify-center border-4 border-primary max-w-prose">
                            <span className="text-xl font-bold">{title}</span>
                            <div><Markdown value={description} /></div>
                        </div>
                    </Fade>
                </div>
            </>
        })}
        </div>
    )
    
    const container = document.getElementById('line-main');
    container.appendChild(sections_frag);
}

function setup_scrollmagic() {
    console.log("ayoo???")
    const controller = new ScrollMagic.Controller();
    console.log(controller)

    var blockTween = new TweenMax.to('#block', 0.1, {
        backgroundColor: 'red'
    });
    console.log("ayoo???")

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#container',
        duration: 500,
        tweenChanges: true,
    })
        .setTween(blockTween)
        .addIndicators()
        .addTo(controller);

    console.log("ayoo???")

    console.log(containerScene)
}

function main() {
    budget_react_inital_render();
    setup_scrollmagic();
}

document.addEventListener('DOMContentLoaded', setup_scrollmagic)
