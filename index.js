var t = gsap.timeline();

t.from("#nav",{
    opacity: 0,
    delay: 0.7

})
t.from("#logo,#nav-part2 p,h3, #circle",{
    y: -80,
    opacity: 0,
    delay: 0.4,
    duration: 0.4,
    stagger: 0.3
})

t.from("#left h4",{
    x: -830,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})

t.from("#right img",{
    scale: 0.5,
    duration: 0.5,
    opacity: 0,
    rotate: 150
})

gsap.from("#page2 #box",{
    scale: 0,
    duration: 1,
    opacity: 0,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller: "body"
    }
})