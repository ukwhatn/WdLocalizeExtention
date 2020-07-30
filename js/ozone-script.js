/*jshint esversion: 6*/
let t;
(function() {
  if (typeof OZONE == "function") {
    try {
      var ozone_show = OZONE.dialogs.Base.prototype.show;
      console.log("OZONEの読み込みが完了しました。ダイアログを日本語化します。");
      OZONE.dialogs.Base.prototype.show = function() {
        switch (this.content) {
          case "Saving page...":
            this.content = "ページを保存中...";
            break;
          case "Page saved!":
            this.content = "ページを保存しました";
            break;
          case "Saving tgs...":
            this.content = "タグを保存中...";
            break;
          case "tgs saved!":
            this.content = "タグを保存しました";
            break;
          default:
            break;
        }
        ozone_show.apply(this, arguments);
      };

      console.log("ダイアログを日本語化しました。");
    } catch (e) {
      console.log("ダイアログの日本語化に失敗しました。");
    }
  } else {
    console.log("OZONEの読み込みを待っています。");
    return setTimeout(arguments.callee, 1000);
  }
})();

(function() {
  if (document.querySelector("#odialog-container .title.modal-header")) {
    if (document.querySelector("#odialog-container .title.modal-header").innerHTML.includes("User info") && !document.querySelector("#odialog-container .table > tbody > tr > td > b").innerHTML.includes("本名")) {
      console.log("アカウント情報の表示を検出しました。日本語化を開始します。");
      let ta = document.querySelectorAll("#odialog-container > .owindow > .modal-body .table > tbody > tr > td > b");
      for (let step = 0; step < ta.length; step++) {
        let t = ta[step];
        switch (t.innerHTML) {
          case "Real name":
            t.innerHTML = "本名";
            break;
          case "From":
            t.innerHTML = "居住地";
            break;
          case "Website":
            t.innerHTML = "ウェブサイト";
            break;
          case "Wikidot.com User since:":
            t.innerHTML = "Wikidotユーザー登録";
            break;
          case "About":
            t.innerHTML = "自己紹介";
            break;
          case "Account type":
            t.innerHTML = "ユーザー種別";
            break;
          case "Karma level":
            t.innerHTML = "カルマレベル";
            break;
          case "Member of this Site: since":
            t.innerHTML = "サイト登録";
            break;
          case "Role in this Site":
            t.innerHTML = "このサイトでの権限";
            break;
          case "Scpper profile":
            t.innerHTML = "Scpperプロフィール";
            break;
          default:
            break;
        }
      }
      document.querySelector("#odialog-container > .owindow > .modal-body .table > tbody > tr > td > a[href='http://www.wikidot.com/doc:karma']").innerHTML = "これは何？";
    } else if (document.querySelector("#odialog-container .title.modal-header").innerHTML.includes("Page locked") && !document.querySelector("#odialog-container .modal-body h1").innerHTML.includes("このページはロックされています")){
      console.log("ページロックダイアログを日本語化します");
      document.querySelector("#odialog-container .modal-body h1").innerHTML = "このページはロックされています...";
      document.querySelectorAll("#odialog-container .modal-body p")[0].innerHTML = "他のユーザーがページを編集しているため、排他的なページロックがかけられています。<br><br> ページロックを上書きしたい場合、またはロックが間違ってロックされていることが明らかな場合は、競合しているロックの強制解除を試みることができます。";
    }
  }
  return setTimeout(arguments.callee, 1000);
})();
