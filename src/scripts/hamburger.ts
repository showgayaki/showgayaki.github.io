// DOMが生成されてからでないとあきまへんで
window.addEventListener('DOMContentLoaded', (e) => {
    const navigation = document.getElementById('navigation');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    const closeNavigation = () => {
        hamburgerMenu?.classList.remove('expanded');
        navigation?.classList.remove('show');

        // openになっているdetailsを全部閉じる
        navigation
            ?.querySelectorAll<HTMLDetailsElement>('details[open]')
            .forEach((el) => {
                el.open = false;
            });
    };

    // ハンバーガー以外をクリックしたら閉じるために、クリックイベントを全部取ります
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        // ハンバーガーをクリックしたら開閉
        if (hamburgerMenu?.contains(target)) {
            e.stopPropagation();

            hamburgerMenu.classList.toggle('expanded');
            navigation?.classList.toggle('show');

            return;
        } else if (navigation?.contains(target)) {
            // ナビゲーション内でリンクがクリックされたら閉じる
            if ((target as HTMLElement).closest('a')) {
                closeNavigation();
            }

            // リンク以外は何もしない
            return;
        }

        // それ以外をクリックしたら閉じる
        closeNavigation();
    });
});
