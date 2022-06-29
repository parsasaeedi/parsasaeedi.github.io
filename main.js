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

function copyEmailToClipboard() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById('mymailto').click();
    } else {
        navigator.clipboard.writeText("contact@parsa.dev");
    }
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".squigglyLine", {
    scrollTrigger: {
        trigger: ".squigglyLine",
        toggleActions: "restart none none none",
        scrub: true
    },
    transform: "translateX(-35%)",
    ease: "none"
});

gsap.to(".line1_1", {
    scrollTrigger: {
        trigger: ".line1_1",
        toggleActions: "restart none none none",
        scrub: 0.5
    },
    transform: "translateX(-35vw)",
    ease: "none"
});

gsap.from(".line2_1", {
    scrollTrigger: {
        trigger: ".line2_1",
        toggleActions: "restart none none none",
        scrub: 0.5
    },
    transform: "translateX(-35vw)",
    ease: "none"
});

gsap.to(".line1_2", {
    scrollTrigger: {
        trigger: ".line1_2",
        toggleActions: "restart none none none",
        scrub: 0.5
    },
    transform: "translateX(-35vw)",
    ease: "none"
});

gsap.from(".line2_2", {
    scrollTrigger: {
        trigger: ".line2_2",
        toggleActions: "restart none none none",
        scrub: 0.5
    },
    transform: "translateX(-35vw)",
    ease: "none"
});

gsap.to(".line1_3", {
    scrollTrigger: {
        trigger: ".line1_3",
        toggleActions: "restart none none none",
        scrub: 0.5
    },
    transform: "translateX(-35vw)",
    ease: "none"
});

gsap.from(".line2_3", {
    scrollTrigger: {
        trigger: ".line2_3",
        toggleActions: "restart none none none",
        scrub: 0.5
    },
    transform: "translateX(-35vw)",
    ease: "none"
});