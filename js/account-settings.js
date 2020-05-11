function account_settings() {
    //共通して読み込む
    (function () {
        if (document.getElementById("account-top-tabs")) {
            document.querySelector("#account-top-tabs > li.activity > a").innerHTML = '<i class="icon-dashboard"></i> アクティビティ(ベータ版)';
            document.querySelector("#account-top-tabs > li.messages > a").innerHTML = '<i class="icon-envelope"></i> メッセージ';
            document.querySelector("#account-top-tabs > li.sites > a").innerHTML = '<i class="icon-th"></i> サイト';
            document.querySelector("#account-top-tabs > li.recent > a").innerHTML = '<i class="icon-time"></i> 最近の活動履歴';
            document.querySelector("#account-top-tabs > li.settings > a").innerHTML = '<i class="icon-cogs"></i> アカウント設定';
            document.querySelector("#account-top-tabs > li.upgrades > a").innerHTML = '<i class="icon-credit-card"></i> アップグレード';

            document.querySelector("#menu-sources > li:nth-child(1) > a").innerHTML = "アカウント";
            document.querySelector("#menu-sources > li:nth-child(2) > a").innerHTML = "プロフィール";
            document.querySelector("#menu-sources > li:nth-child(3) > a").innerHTML = "署名";
            document.querySelector("#menu-sources > li:nth-child(4) > a").innerHTML = "ツールバー";
            document.querySelector("#menu-sources > li:nth-child(5) > a").innerHTML = "ニュースレター";
            document.querySelector("#menu-sources > li:nth-child(6) > a").innerHTML = "招待";
            document.querySelector("#menu-sources > li:nth-child(7) > a").innerHTML = "Facebook連携";
            document.querySelector("#menu-sources > li:nth-child(8) > a").innerHTML = "APIアクセス";

            console.log("左メニューバーにonclick属性を追加します");
            document.querySelector("#menu-sources > li:nth-child(1) > a").setAttribute("onclick", "account_settings()");
        } else {
            return setTimeout(arguments.callee, 1000);
        }
    })();
}

document.addEventListener("DOMContentLoaded", account_settings);

// load refresh functions
(function () {
    if (document.getElementsByTagName("body")[0]) {
        console.log("設定メニュー日本語化スクリプトを挿入します。")
        var s, th;
        th = document.getElementsByTagName("body")[0];
        s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', chrome.extension.getURL('/js/account-script.js'));
        return th.appendChild(s);
    } else {
        return setTimeout(arguments.callee, 1000);
    }
})();
