let audio = document.querySelector("#audio")
let btn = document.querySelector("#btn")
document.addEventListener("DOMContentLoaded", function () {

    setTimeout(() => {
        audio.play()

    console.log("Dom loaded")
        console.log(audio)
    }, 1000)
})
let tl = gsap.timeline()
tl.from("span", {
    x: -10,
    // y: -10,
    opacity: 0,


    delay: 1,
    duration: 3,
    stagger: 0.5,
    ease: "power2.out",
})
tl.to("#text", {
    opacity: 0,
})
// tl.to("#images",{
//
//   visibility: "visible"
// })

tl.to("#img1", {

    // zIndex:100,
    visibility: "visible",/**/
    scale: 1.5,
    opacity: 1,
    duration: 2,
    delay: 1,


}).to("#img1", {

    // scale: 1,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    // visibility:"hidden",
})

tl.to("#img2", {

    // zIndex:100,
    visibility: "visible",
    scale: 1.5,
    opacity: 1,
    duration: 2,
    delay: 1,


}).to("#img2", {

    // scale: 1,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    // visibility:"hidden",
})
tl.to("#img3", {

    // zIndex:100,
    visibility: "visible",
    scale: 1.5,
    opacity: 1,
    duration: 2,
    delay: 1,


})
    .to("#img3", {

        // scale: 1,
        opacity: 0,
        duration: 1,
        delay: 0.5,

    })
tl.to("#krishna", {
    opacity: 1
})