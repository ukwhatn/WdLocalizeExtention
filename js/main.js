/*jshint esversion: 6*/

function wikidot_main() {
  console.log("ヘッダ要素を日本語化します。");
  //アカウントメニュー
  if (document.getElementById("my-account")) {
    document.getElementById("my-account").innerHTML = "マイアカウント";
    let t = document.querySelectorAll("#account-options > ul > li > a");
    t[0].innerHTML = "アクティビティ";
    t[1].innerHTML = "メッセージ";
    t[2].innerHTML = "サイト";
    t[3].innerHTML = "アカウント設定";
    t[4].innerHTML = "アップグレード";
    t[5].innerHTML = "サインアウト";
  }

  //検索ボックス
  if (document.getElementById("search-top-box-input")) {
    document.getElementById("search-top-box-input").value = "このサイトを検索";
  }

  //ページ下部オプション
  console.log("ページオプションを日本語化します。");
  if (document.getElementById("page-options-bottom")) {
    document.getElementById("edit-button").innerHTML = "編集";

    if (document.getElementById("pagerate-button")) {
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
      if (discussionposts) {
        document.getElementById("discuss-button").innerHTML = "ディスカッション(" + discussionposts + ")";
      } else {
        document.getElementById("discuss-button").innerHTML = "ディスカッション(0)";
      }
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

  //フォーラムの新しいポストボタン
  if (document.getElementById("thread-options-2")) {
    console.log("フォーラム要素の日本語化を行います");
    document.getElementById("new-post-button").innerHTML = "新しいポスト";
  }

}

document.addEventListener("DOMContentLoaded", wikidot_main);
