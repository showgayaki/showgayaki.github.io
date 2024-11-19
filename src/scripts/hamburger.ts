// DOMが生成されてからでないとあきまへんで
window.addEventListener('DOMContentLoaded', () =>{
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerImage = document.getElementById('hamburgerImage');
    const qrCode = document.getElementById('qrCode');

    hamburgerMenu?.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('expanded');
        document.getElementById('navigation')?.classList.toggle('show');

        hamburgerImage?.classList.add('show');
        qrCode?.classList.remove('show');
    }, false);

    hamburgerImage?.addEventListener('click', () => {
        hamburgerImage.classList.toggle('show');
        qrCode?.classList.toggle('show');
    }, false);

    qrCode?.addEventListener('click', () => {
        hamburgerImage?.classList.toggle('show');
        qrCode.classList.toggle('show');
    }, false);
});
