var injectScript;

injectScript = function (file, node) {
    var s, th;
    th = document.getElementsByTagName(node)[0];
    s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    return th.appendChild(s);
};

setTimeout(function () {
    injectScript(chrome.extension.getURL('/js/ozone-script.js'), 'body');
}, 5000);
