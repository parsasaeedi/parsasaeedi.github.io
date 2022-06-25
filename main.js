// custom cursor
const cursor = document.querySelector('.cursor');
window.onmousemove = (e) => {
    cursor.setAttribute('style', `top: ${e.clientY}px; left: ${e.clientX}px; z-index: 2;`)   
}