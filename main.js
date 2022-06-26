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