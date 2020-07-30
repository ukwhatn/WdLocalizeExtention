//履歴などを含む全ページで読み込むコード
function account_base() {
    (function () {
        if (document.getElementById("account-top-tabs")) {
            document.querySelector("#account-top-tabs > li.activity > a").innerHTML = '<i class="icon-dashboard"></i> アクティビティ(ベータ版)';
            document.querySelector("#account-top-tabs > li.messages > a").innerHTML = '<i class="icon-envelope"></i> メッセージ';
            document.querySelector("#account-top-tabs > li.sites > a").innerHTML = '<i class="icon-th"></i> サイト';
            document.querySelector("#account-top-tabs > li.recent > a").innerHTML = '<i class="icon-time"></i> 最近の活動履歴';
            document.querySelector("#account-top-tabs > li.settings > a").innerHTML = '<i class="icon-cogs"></i> アカウント設定';
            document.querySelector("#account-top-tabs > li.upgrades > a").innerHTML = '<i class="icon-credit-card"></i> アップグレード';
        } else {
            return setTimeout(arguments.callee, 1000);
        }
    })();
}

document.addEventListener("DOMContentLoaded", account_base);
