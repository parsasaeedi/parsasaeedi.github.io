let tl = gsap.timeline();
tl.from(".headerWord", {
    y: -100,
    duration: 0.3,
    opacity: 0,
    stagger: 0.1
})
.from(".nav__list__item", {
    duration: 1,
    opacity: 0,
    delay: 0.2
})
.from(".verticalLine", {
    duration: 1,
    opacity: 0
}, "<0")
// .from("#particles-js", {
//     duration: 2,
//     opacity: 0
// }, "<0")


gsap.registerPlugin(ScrollTrigger);


gsap.to(".squigglyLine", {
    scrollTrigger: {
        trigger: ".aboutMe",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-70%)",
    ease: "none"
});

var line1s = gsap.utils.toArray('.line1');
line1s.forEach((line1) => {
    gsap.from(line1, {
        scrollTrigger: {
            trigger: line1,
            toggleActions: "restart none none none",
            scrub: 0.5
        },
        transform: "translateX(-35vw)",
        ease: "none"
    });
})

var line2s = gsap.utils.toArray('.line2');
line2s.forEach((line2) => {
    gsap.to(line2, {
        scrollTrigger: {
            trigger: line2,
            toggleActions: "restart none none none",
            scrub: 0.5
        },
        transform: "translateX(-35vw)",
        ease: "none"
    });
})


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var cardSlideUp = {
        distance: '70%',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease',
        delay: 300,
        interval: 200
    };
} else {
    var cardSlideUp = {
        distance: '70%',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease',
        delay: 300,
        interval: 200,
        viewOffset: {
            bottom: 50
        }
    };
}
if(!navigator.userAgent.includes("Instagram")){
    ScrollReveal().reveal('.experienceCard', cardSlideUp);
}

var textSlideUp = {
    origin: 'bottom',
    opacity: 0,
    easing: 'ease',
    delay: 300,
    viewOffset: {
        bottom: -20
    }
};
if(!navigator.userAgent.includes("Instagram")){
    ScrollReveal().reveal('.textSlideUp', textSlideUp);
}




gsap.from(".aboutSlideUp", {
    scrollTrigger: {
        trigger: ".aboutSlideUp",
        start: "top 85%",
    },
    transform: "translateY(100%)",
    ease: "ease",
    opacity: 0,
    stagger: 0.1,
    duration: 1,
});

gsap.from(".skillSlideUp", {
    scrollTrigger: {
        trigger: ".aboutSlideUp",
        start: "top 85%",
    },
    transform: "translateY(50%)",
    ease: "ease",
    opacity: 0,
    stagger: 0.3,
    delay: 0.2
});


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    gsap.from(".madeWith", {
        scrollTrigger: {
            trigger: ".textSlideUp"
        },
        transform: "translateY(-20)",
        ease: "ease",
        opacity: 0,
        delay: 1,
    })
}