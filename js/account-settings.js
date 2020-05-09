function account_settings() {
    document.querySelector("#menu-sources > li:nth-child(1) > a").innerHTML = "アカウント";
    document.querySelector("#menu-sources > li:nth-child(2) > a").innerHTML = "プロフィール";
    document.querySelector("#menu-sources > li:nth-child(3) > a").innerHTML = "署名";
    document.querySelector("#menu-sources > li:nth-child(4) > a").innerHTML = "ツールバー";
    document.querySelector("#menu-sources > li:nth-child(5) > a").innerHTML = "ニュースレター";
    document.querySelector("#menu-sources > li:nth-child(6) > a").innerHTML = "招待";
    document.querySelector("#menu-sources > li:nth-child(7) > a").innerHTML = "Facebook連携";
    document.querySelector("#menu-sources > li:nth-child(8) > a").innerHTML = "APIアクセス";

    document.querySelector("#accordion > li.accordion-top[accordionname='screen'] > span.accordion-top-sp1").innerHTML = "アカウント名";
    document.querySelector("#accordion > li.accordion-top[accordionname='screen'] > span.accordion-top-sp3 > a").innerHTML = "変更";

    document.querySelector("#accordion > li.accordion-top[accordionname='email'] > span.accordion-top-sp1").innerHTML = "メールアドレス";
    document.querySelector("#accordion > li.accordion-top[accordionname='email'] > span.accordion-top-sp3 > a").innerHTML = "変更";

    document.querySelector("#accordion > li.accordion-top[accordionname='password'] > span.accordion-top-sp1").innerHTML = "パスワード";
    document.querySelector("#accordion > li.accordion-top[accordionname='password'] > span.accordion-top-sp2").innerHTML = "パスワードを変更できます。";
    document.querySelector("#accordion > li.accordion-top[accordionname='password'] > span.accordion-top-sp3 > a").innerHTML = "変更";

    document.querySelector("#accordion > li.accordion-top[accordionname='avatar'] > span.accordion-top-sp1").innerHTML = "アイコン";
    document.querySelector("#accordion > li.accordion-top[accordionname='avatar'] > span.accordion-top-sp2").innerHTML = "アイコンを変更できます。";
    document.querySelector("#accordion > li.accordion-top[accordionname='avatar'] > span.accordion-top-sp3 > a").innerHTML = "変更";

    document.querySelector("#accordion > li.accordion-top[accordionname='language'] > span.accordion-top-sp1").innerHTML = "言語";
    document.querySelector("#accordion > li.accordion-top[accordionname='language'] > span.accordion-top-sp3 > a").innerHTML = "変更";

    document.querySelector("#accordion > li.accordion-top[accordionname='delete'] > span.accordion-top-sp1").innerHTML = "アカウント削除";
    document.querySelector("#accordion > li.accordion-top[accordionname='delete'] > span.accordion-top-sp3 > a").innerHTML = "削除する";
}

document.addEventListener("load", account_settings);
