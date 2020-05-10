function account_settings() {
    document.querySelector("#menu-sources > li:nth-child(1) > a").innerHTML = "アカウント";
    document.querySelector("#menu-sources > li:nth-child(2) > a").innerHTML = "プロフィール";
    document.querySelector("#menu-sources > li:nth-child(3) > a").innerHTML = "署名";
    document.querySelector("#menu-sources > li:nth-child(4) > a").innerHTML = "ツールバー";
    document.querySelector("#menu-sources > li:nth-child(5) > a").innerHTML = "ニュースレター";
    document.querySelector("#menu-sources > li:nth-child(6) > a").innerHTML = "招待";
    document.querySelector("#menu-sources > li:nth-child(7) > a").innerHTML = "Facebook連携";
    document.querySelector("#menu-sources > li:nth-child(8) > a").innerHTML = "APIアクセス";

    (function () {
        if (document.querySelector("#accordion > li.accordion-top[accordionname='screen'] > span.accordion-top-sp1")) {
            console.log("アカウント情報の読み込みが完了しました。アカウント情報を日本語化しています。")

            
            //AccountName
            document.querySelector("#accordion > li.accordion-top[accordionname='screen'] > span.accordion-top-sp1").innerHTML = "アカウント名";
            document.querySelector("#accordion > li.accordion-top[accordionname='screen'] > span.accordion-top-sp3 > a").innerHTML = "変更";

            var accname = document.querySelector("#accordion > li.accordion-screen > h3").innerHTML.split(/<|>/)[2];
            document.querySelector("#accordion > li.accordion-screen > h3").innerHTML = "現在のアカウント名: <strong>" + accname + "</strong>."

            var accchangetime = document.querySelector("#accordion > li.accordion-screen > .alert").innerHTML.split(/<|>/)[6];
            document.querySelector("#accordion > li.accordion-screen > .alert-warning").innerHTML = "アカウント名を変更できるのは<strong>2回</strong>までです。あと<strong>" + accchangetime + "回</strong>変更できます。"

            document.querySelector("#accordion > li.accordion-screen > form > div.form-group > label[for='ap-screen-name-input']").innerHTML = "新しいアカウント名:";
            document.querySelector("#accordion > li.accordion-screen > form > div.form-group a[onclick*='.submit();']").innerHTML = "変更";
            
            document.querySelector("#accordion > li.accordion-screen > .alert-info").innerHTML = 'アカウント名は変更後すぐに反映されない場合があります。変更後、<a href="javascript:;" onclick="WIKIDOT.page.listeners.logoutClick(event);" class="btn btn-primary btn-xs"><strong>サインアウト</strong></a>して再度サインインすることで反映されます。';

            
            //EmailAddress
            document.querySelector("#accordion > li.accordion-top[accordionname='email'] > span.accordion-top-sp1").innerHTML = "メールアドレス";
            document.querySelector("#accordion > li.accordion-top[accordionname='email'] > span.accordion-top-sp3 > a").innerHTML = "変更";

            var accemail = document.querySelector("#accordion > li.accordion-email > h3").innerHTML.split(/<|>/)[2];
            document.querySelector("#accordion > li.accordion-email > h3").innerHTML = "現在のメールアドレス: <strong>" + accemail + "</strong>."

            document.querySelector("#accordion > li.accordion-email > .alert-warning").innerHTML = "メールアドレスの変更はログイン時にも影響します。新しいメールアドレス（確認後）とパスワード（変更なし）が必要になります。"

            document.querySelector("#accordion > li.accordion-email > #email-change-area > form > div.form-group > label[for='ch-email']").innerHTML = "新しいメールアドレス:";
            document.querySelector("#accordion > li.accordion-email p.help-block").innerHTML = "認証リンクが記載されたメールが送信されます。";
            
            document.querySelector("#accordion > li.accordion-email > #email-change-area a[onclick*='.submit();']").innerHTML = "変更";

            
            //PassWord
            document.querySelector("#accordion > li.accordion-top[accordionname='password'] > span.accordion-top-sp1").innerHTML = "パスワード";
            document.querySelector("#accordion > li.accordion-top[accordionname='password'] > span.accordion-top-sp2").innerHTML = "パスワードを変更できます。";
            document.querySelector("#accordion > li.accordion-top[accordionname='password'] > span.accordion-top-sp3 > a").innerHTML = "変更";
            
            document.querySelector("#accordion > li.accordion-password > #change-password-form > div.form-group > label[for='old-password']").innerHTML = "現在のパスワード:";
            document.querySelector("#accordion > li.accordion-password > #change-password-form > div.form-group > label[for='new-password1']").innerHTML = "新しいパスワード:";
            document.querySelector("#accordion > li.accordion-password > #change-password-form > div.form-group > label[for='new-password2']").innerHTML = "新しいパスワード(再入力):";
            
            document.querySelector("#accordion > li.accordion-password > #change-password-form > div.form-group:nth-child(2) > div > .help-block").innerHTML = "6文字以上で入力してください。"; 
            document.querySelector("#accordion > li.accordion-password > #change-password-form > div.form-group:nth-child(3) > div > .help-block").innerHTML = "タイプミスを防ぐためにもう一度入力してください。";
            
            
            document.querySelector("#accordion > li.accordion-password > #change-password-form a[onclick*='.submit();']").innerHTML = "変更";
            
            var rssid = document.querySelector("#accordion > li.accordion-password > .alert-info > tt:nth-child(1)").innerHTML;
            var rsspass = document.querySelector("#accordion > li.accordion-password > .alert-info > tt:nth-child(2)").innerHTML;
            
            document.querySelector("#accordion > li.accordion-password > .alert-info").innerHTML = "RSSフィードの中には、プライベートサイトのフィードなど認証を必要とするものもあります。その場合は以下の情報で認証してください。<br>ログインID: <tt>" + rssid + "</tt> パスワード: <tt>" + rsspass + "</tt>";
            
            
            //Icon
            document.querySelector("#accordion > li.accordion-top[accordionname='avatar'] > span.accordion-top-sp1").innerHTML = "アイコン";
            document.querySelector("#accordion > li.accordion-top[accordionname='avatar'] > span.accordion-top-sp2").innerHTML = "アイコンを変更できます。";
            document.querySelector("#accordion > li.accordion-top[accordionname='avatar'] > span.accordion-top-sp3 > a").innerHTML = "変更";
            
            document.querySelector("#accordion > li.accordion-avatar > h3").innerHTML = "現在のアイコン";
            document.querySelector("#accordion > li.accordion-avatar input[onclick='WIKIDOT.modules.DSAccountModule.listeners.deleteAvatar(event)']").value = "変更";
            
            
            //Language
            document.querySelector("#accordion > li.accordion-top[accordionname='language'] > span.accordion-top-sp1").innerHTML = "言語";
            document.querySelector("#accordion > li.accordion-top[accordionname='language'] > span.accordion-top-sp3 > a").innerHTML = "変更";
            
            document.querySelector("#accordion > li.accordion-language > .alert-info").innerHTML = "ユーザーインターフェースの言語を変更できます。この設定は、サイトマネージャで設定されたサイトごとの言語設定には影響しません。";
            document.querySelector("#accordion > li.accordion-language label[for='as-language-select']").innerHTML = "言語";
            document.querySelector("#accordion > li.accordion-language a[onclick*='.submit();']").innerHTML = "変更";
            
            
            
            document.querySelector("#accordion > li.accordion-top[accordionname='delete'] > span.accordion-top-sp1").innerHTML = "アカウント削除";
            document.querySelector("#accordion > li.accordion-top[accordionname='delete'] > span.accordion-top-sp2").innerHTML = "アカウントを削除したい場合のみ、「削除する」を選択してください";
            document.querySelector("#accordion > li.accordion-top[accordionname='delete'] > span.accordion-top-sp3 > a").innerHTML = "削除する";
            
            document.querySelector("#accordion > li.accordion-delete > .alert-warning").innerHTML = "<strong>注:</strong> あなたは現在、いくつかのサイトの最高管理者になっています。サイトを削除するか、最高管理者権限を他のユーザーに移譲するまでアカウントを削除することは出来ません。" + " <a href='/account/sites#/master_admin' class='btn btn-default btn-xs'>ここをクリック</a> して、最高管理者になっているサイトを確認できます。";
            
            document.querySelector("#accordion > li.accordion-delete a[onclick*='WIKIDOT.modules.DSAccountModule.listeners.proceed(event);']").innerHTML = "アカウント削除を開始する";
            console.log("アカウント情報を日本語化しました。")
        } else {
            console.log("アカウント情報の読み込みを待っています。")
            return setTimeout(arguments.callee, 1000);
        }
    })();

}

document.addEventListener("DOMContentLoaded", account_settings);
