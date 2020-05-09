function account_base() {
    if (document.getElementById("account-top-tabs") != null) {
        document.querySelector("#account-top-tabs > li.activity > a").innerHTML = '<i class="icon-dashboard"></i> アクティビティ(ベータ版)';
        document.querySelector("#account-top-tabs > li.messages > a").innerHTML = '<i class="icon-envelope"></i> メッセージ';
        document.querySelector("#account-top-tabs > li.sites > a").innerHTML = '<i class="icon-th"></i> サイト';
        document.querySelector("#account-top-tabs > li.recent > a").innerHTML = '<i class="icon-time"></i> 最近の活動履歴';
        document.querySelector("#account-top-tabs > li.settings > a").innerHTML = '<i class="icon-cogs"></i> アカウント設定';
        document.querySelector("#account-top-tabs > li.upgrades > a").innerHTML = '<i class="icon-credit-card"></i> アップグレード';
    }
};

document.addEventListener("DOMContentLoaded", account_base);
