// custom cursor
let cursor = document.querySelector('#cursor');
window.onmousemove = (e) => {
    cursor.setAttribute('style', `top: ${e.clientY}px; left: ${e.clientX}px; z-index: 2;`)  
}

let hoverableTexts = Array.from(document.querySelectorAll('.hoverableText'));
hoverableTexts.forEach((text) => {
    text.addEventListener("mouseover", () => {
        cursor.classList.add("cursorHoverText")
    });
    text.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursorHoverText")
    });
})

let links = Array.from(document.querySelectorAll('.link'));
links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("linkHover")
    });
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("linkHover")
    });
})

// gsap.to(".experienceCard", {
//     scrollTrigger: {
//         trigger: ".experienceCard",
//         toggleActions: "restart none none none none"
//     },
//     x: -200,
//     duration: 1
// });
// gsap.from('.line1', { duration: 1, y: '-100%', ease: 'bounce' })

gsap.registerPlugin(ScrollTrigger);

gsap.to(".line1_1", {
    scrollTrigger: {
        trigger: ".line1_1",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-50vw)",
    ease: "none"
});

gsap.from(".line2_1", {
    scrollTrigger: {
        trigger: ".line2_1",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-50vw)",
    ease: "none"
});

gsap.to(".line1_2", {
    scrollTrigger: {
        trigger: ".line1_2",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-50vw)",
    ease: "none"
});

gsap.from(".line2_2", {
    scrollTrigger: {
        trigger: ".line2_2",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-50vw)",
    ease: "none"
});

gsap.to(".line1_3", {
    scrollTrigger: {
        trigger: ".line1_3",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-50vw)",
    ease: "none"
});

gsap.from(".line2_3", {
    scrollTrigger: {
        trigger: ".line2_3",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-50vw)",
    ease: "none"
});