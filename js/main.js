function wikidot_main() {
    //Account Menu
    if (document.getElementById("my-account")) {
        document.getElementById("my-account").innerHTML = "マイアカウント";
        document.querySelector("#account-options > ul > li:nth-child(1) > a").innerHTML = "アクティビティ";
        document.querySelector("#account-options > ul > li:nth-child(2) > a").innerHTML = "メッセージ";
        document.querySelector("#account-options > ul > li:nth-child(3) > a").innerHTML = "サイト";
        document.querySelector("#account-options > ul > li:nth-child(4) > a").innerHTML = "アカウント設定";
        document.querySelector("#account-options > ul > li:nth-child(5) > a").innerHTML = "アップグレード";
        document.querySelector("#account-options > ul > li:nth-child(6) > a").innerHTML = "サインアウト";
    }

    //Search Box
    if (document.getElementById("search-top-box-input")) {
        document.getElementById("search-top-box-input").value = "このサイトを検索";
    }

    //Page-Options for NormalPages
    if (document.getElementById("page-options-bottom")) {
        document.getElementById("edit-button").innerHTML = "編集";

        if (document.getElementById("pagerate-button") != null) {
            var getratestr = document.getElementById("pagerate-button").innerHTML;
            var splitratestr = getratestr.split(/<|>/);
            var ratenum = splitratestr[2];
            document.getElementById("pagerate-button").innerHTML = "評価 (" + ratenum + ")";
        }

        document.getElementById("tags-button").innerHTML = "タグ";

        if (document.getElementById("discuss-button")) {
            var getdiscstr = document.getElementById("discuss-button").innerHTML;
            var splitdiscstr = getdiscstr.split(/\(|\)/);
            var discussionposts = splitdiscstr[1];
            document.getElementById("discuss-button").innerHTML = "ディスカッション (" + discussionposts + ")";
        }

        document.getElementById("history-button").innerHTML = "履歴";
        document.getElementById("files-button").innerHTML = "ファイル";
        document.getElementById("print-button").innerHTML = "印刷";
        document.getElementById("site-tools-button").innerHTML = "サイトツール";
        document.getElementById("more-options-button").innerHTML = "+ オプション";
        document.getElementById("edit-sections-button").innerHTML = "セクションを編集";
        document.getElementById("edit-append-button").innerHTML = "追加";
        document.getElementById("edit-meta-button").innerHTML = "メタ";
        document.getElementById("watchers-button").innerHTML = "ウォッチャー";
        document.getElementById("backlinks-button").innerHTML = "バックリンク";
        document.getElementById("view-source-button").innerHTML = "ページのソース";
        document.getElementById("parent-page-button").innerHTML = "親ページ";
        document.getElementById("page-block-button").innerHTML = "ロック";
        document.getElementById("rename-move-button").innerHTML = "リネーム";
        document.getElementById("delete-button").innerHTML = "削除";
    }

    //NewPost Button for Forum
    if (document.getElementById("thread-options-2")) {
        document.getElementById("new-post-button").innerHTML = "新しいポスト";
    }

    


}

document.addEventListener("DOMContentLoaded", wikidot_main);
