gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo", {
    x: 150,
    rotation:360,
    duration:2,
    ScrollTrigger: {
        trigger: ".logo",
        toogleActions:"restart"
        }
    })

