console.log("hello world");

function setup_scrollmagic() {
    console.log("ayoo???")
    const controller = new ScrollMagic.Controller();
    console.log(controller)

    var blockTween = new TweenMax.to('#block', 1.5, {
        backgroundColor: 'red'
    });
    console.log("ayoo???")

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#container'
    })
        .setTween(blockTween)
        .addIndicators()
        .addTo(controller);

    console.log("ayoo???")

    console.log(containerScene)
}

document.addEventListener('DOMContentLoaded', setup_scrollmagic)
