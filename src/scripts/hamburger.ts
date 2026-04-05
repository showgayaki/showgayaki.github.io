// DOMが生成されてからでないとあきまへんで
window.addEventListener('DOMContentLoaded', () =>{
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    hamburgerMenu?.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('expanded');
        document.getElementById('navigation')?.classList.toggle('show');

    }, false);
});
