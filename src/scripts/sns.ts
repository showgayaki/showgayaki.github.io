const links = document.querySelectorAll('.sns-item__link');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        console.log(link.getAttribute('data-appurl'));
        console.log(link.getAttribute('data-weburl'));

        // デフォルトのリンク動作をキャンセル
        e.preventDefault();
        const appUrl = link.getAttribute('data-appurl');
        const webUrl = link.getAttribute('data-weburl');

        // webUrlもなかったら何も開けません
        if(webUrl == null) return;
        // appUrlの設定がないときはwebを開く
        if(appUrl === '' || appUrl == null){
            window.location.href = webUrl;
        }else{
            // appUrlで開けなかったら(アプリがインストールされていなければ)
            // webで開く
            fetch(appUrl).catch((e)=> {
                console.log(`ERROR :Open [${appUrl}] =>`, e);
                location.href = webUrl;
            });
        }
    });
});
