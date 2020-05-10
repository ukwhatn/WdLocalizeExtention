(function () {
    if (document.getElementsByTagName("body")[0]) {
        console.log("bodyの読み込みが完了しました。")
        var s, th;
        th = document.getElementsByTagName("body")[0];
        s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', chrome.extension.getURL('/js/ozone-script.js'));
        return th.appendChild(s);
    } else {
        console.log("bodyの読み込みを待っています。")
        return setTimeout(arguments.callee, 1000);
    }
})();
