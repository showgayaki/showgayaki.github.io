// DOMが生成されてからでないとあきまへんで
window.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('expanded');
        document.getElementById('navigation').classList.toggle('show');
    }, false);
});
