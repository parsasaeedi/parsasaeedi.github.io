// custom cursor
let cursor = document.querySelector('#cursor');
window.onmousemove = (e) => {
    cursor.setAttribute('style', `top: ${e.clientY}px; left: ${e.clientX}px; z-index: 2;`)  
}

function copyEmailToClipboard() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById('mymailto').click();
    } else {
        navigator.clipboard.writeText("contact@parsa.dev");
    }
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

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    let madeWith = document.querySelector('.madeWith');
    madeWith.classList.remove("textSlideUp")
}