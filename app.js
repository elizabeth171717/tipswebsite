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


    //images animation
    const boxes = 
document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom =
    window.innerHeight / 5 * 4;


boxes.forEach((box) =>{
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
        box.classList.add('show');
} else {
    box.classList.remove('show');
}

});

}
