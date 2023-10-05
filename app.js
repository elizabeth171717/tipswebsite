gsap.registerPlugin(ScrollTrigger);

gsap.to(".download-text", {
    y: 30,
    duration:2,
    ScrollTrigger: ".download-text"
})
