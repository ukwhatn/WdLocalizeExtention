OZONE.dialog = {};
var Class = {
    create: function () {
        return function () {
            this.initialize.apply(this, arguments)
        }
    }
};
Object.extend = function (a, b) {
    for (property in b) {
        a[property] = b[property]
    }
    return a
};
OZONE.dialog.stock = new Array();
OZONE.dialog.cleanAll = function (a) {
    var b;
    if (!a || typeof (a.timeout) != "number") {
        b = 200
    } else {
        b = a.timeout
    }
    setTimeout("OZONE.dialog.factory.boxcontainer().hide()", b);
    setTimeout("OZONE.dialog.factory.shader().hide()", b)
};
OZONE.dialog.factory = {
    shader: function () {
        if (OZONE.dialog.factory.stock.shader == null) {
            OZONE.dialog.factory.stock.shader = new OZONE.dialog.shader()
        }
        return OZONE.dialog.factory.stock.shader
    },
    boxcontainer: function () {
        if (OZONE.dialog.factory.stock.boxcontainer == null) {
            OZONE.dialog.factory.stock.boxcontainer = new OZONE.dialog.boxcontainer2()
        }
        return OZONE.dialog.factory.stock.boxcontainer
    }
};
OZONE.dialog.factory.stock = {};
OZONE.dialog.shader = function () {
    this.color = null;
    this.cssClass = null;
    this.setColor = function (a) {
        this.color = a
    };
    this.show = function () {
        var c = document.getElementById("odialog-shader");
        if (c != null) {
            return
        }
        c = document.createElement("div");
        c.id = "odialog-shader";
        var a = document.getElementsByTagName("body").item(0);
        if (this.color != null) {
            c.style.backgroundColor = this.color
        }
        if (this.cssClass != null) {
            c.className = this.cssClass
        } else {
            c.className = "odialog-shader"
        }
        var b = document.createElement("iframe");
        b.id = "odialog-shader-iframe";
        b.src = "/common--misc/blank.html";
        b.frameBorder = 0;
        b.className = "odialog-shader-iframe";
        a.appendChild(b);
        a.appendChild(c)
    };
    this.hide = function () {
        var a = document.getElementsByTagName("body").item(0);
        var c = $("odialog-shader");
        var b = $("odialog-shader-iframe");
        if (c != null) {
            a.removeChild(c)
        }
        if (b != null) {
            a.removeChild(b)
        }
    }
};
OZONE.dialog.boxcontainer2 = function () {
    this.mDiv = null;
    this.cDiv = null;
    this.init = function () {
        var b = $("odialog-container");
        if (!b) {
            b = document.createElement("div");
            b.id = "odialog-container";
            var a = document.getElementsByTagName("body").item(0);
            a.appendChild(b);
            this.mDiv = b
        }
        b.style.display = "block"
    };
    this.setContent = function (f) {
        this.clearContent();
        if (typeof f == "string") {
            $j(this.mDiv).html(f)
        } else {
            this.mDiv.appendChild(f)
        }
        OZONE.dialog.hovertip.dominit(this.mDiv, {
            delay: 300
        });
        var d = this.mDiv.getElementsByTagName("div").item(0);
        this.cDiv = d;
        this.mDiv.style.display = "block";
        this.centerContent();
        d.id = "owindow-1";
        var c = d.getElementsByTagName("div");
        var b;
        for (b in c) {
            if (c[b].className == "title") {
                c[b].id = "ohandle-1";
                var a = new YAHOO.util.DD(this.cDiv.id);
                a.setHandleElId(c[b].id)
            }
            if (c[b].className == "close") {
                YAHOO.util.Event.addListener(c[b], "click", OZONE.dialog.cleanAll)
            }
        }
    };
    this.attachDD = function () {
        var c = this.cDiv.getElementsByTagName("div");
        var b;
        for (b in c) {
            if (c[b].className == "title") {
                c[b].id = "ohandle-1";
                var a = new YAHOO.util.DD(this.cDiv.id);
                a.setHandleElId(c[b].id)
            }
            if (c[b].className == "close") {
                YAHOO.util.Event.addListener(c[b], "click", OZONE.dialog.cleanAll)
            }
        }
    };
    this.clearContent = function () {
        this.cDiv = null;
        $j(this.mDiv).html("")
    };
    this.centerContent = function () {
        var d = this.cDiv;
        var a = d.offsetHeight;
        var c = d.offsetWidth;
        var f = YAHOO.util.Dom.getClientHeight();
        var b = YAHOO.util.Dom.getClientWidth();
        var h = Math.max((b - c) * 0.5, 0);
        var g = Math.max(OZONE.visuals.scrollOffsetY() + (f - a) * 0.5, 0);
        h = Math.max(0, h);
        g = Math.max(0, g);
        YAHOO.util.Dom.setXY(d, [h, g])
    };
    this.setContentObject = function (a) {
        this.mDiv.appendChild(a)
    };
    this.showContent = function (a) {
        this.mDiv.style.display = "block";
        if (a && a.smooth == true) {
            $j(this.cDiv).fadeIn(200)
        } else {
            $j(this.cDiv).show()
        }
    }, this.hideContent = function () {
        $j(this.cDiv).hide()
    };
    this.hide = function (a) {
        if (a && a.smooth == true) {
            $(this.cDiv).fadeOut(200)
        }
        this.clearContent();
        $("odialog-container").style.display = "none"
    };
    this.clickOutsideToHide = function (a) {
        YAHOO.util.Event.addListener("odialog-shader", "click", OZONE.dialog.cleanAll)
    };
    this.changeContent = function (a) {
        this.setContent(a);
        this.showContent()
    };
    this.init()
};
OZONE.dialog.hovertip = {
    container: null,
    bindings: new Array(),
    init: function () {
        var b = $("odialog-hovertips");
        if (!b) {
            b = document.createElement("div");
            b.id = "odialog-hovertips";
            b.style.position = "absolute";
            b.style.zIndex = 100;
            b.style.top = 0;
            b.style.width = "100%";
            var a = document.getElementsByTagName("body").item(0);
            a.appendChild(b);
            OZONE.dialog.hovertip.container = b
        }
    },
    makeTip: function (d, m) {
        if (typeof d != "string" && d.length > 0) {
            for (var f = 0; f < d.length; f++) {
                OZONE.dialog.hovertip.makeTip(d[f], m)
            }
        }
        OZONE.dialog.hovertip.init();
        var g = document.getElementsByTagName("body").item(0);
        var b = $(d);
        if (!b) {
            return
        }
        if (b.hovertip) {
            return
        }
        var a;
        if (m && m.context) {
            a = $(m.context);
            if (!a) {
                return
            }
        } else {
            if (m && m.text) {
                a = document.createElement("div");
                a.innerHTML = '<div class="content">' + m.text + "</div>"
            } else {
                var h;
                if (b.attributes) {
                    for (var j = 0; j < b.attributes.length; j++) {
                        if (b.attributes[j].nodeName.toLowerCase() == "title") {
                            h = b.attributes[j].nodeValue;
                            b.attributes[j].nodeValue = ""
                        }
                    }
                }
                if (!h) {
                    return
                }
                a = document.createElement("div");
                a.innerHTML = '<div class="content">' + h + "</div>"
            }
        }
        if (!a.className.match(/hovertip/)) {
            a.className = "hovertip " + a.className
        }
        if (m) {
            b.hovertipOptions = m
        }
        if (m && m.style) {
            for (var k in m.style) {
                a.style[k] = m.style[k]
            }
        }
        var l = a.getElementsByTagName("div");
        var c = false;
        for (var f = 0; f < l.length; f++) {
            if (YAHOO.util.Dom.hasClass(l[f], "content")) {
                c = true
            }
        }
        if (!c) {
            a.innerHTML = '<div class="content">' + a.innerHTML + "</div>"
        }
        b.hovertip = a;
        a.style.position = "absolute";
        a.style.display = "none";
        a.style.border = "1px solid black";
        if (b.tagName.toLowerCase() != "a" && (!m || !m.noCursorHelp)) {
            b.style.cursor = "help"
        }
        $("odialog-hovertips").appendChild(a);
        OZONE.dialog.hovertip.bindings.push([b, a]);
        YAHOO.util.Event.addListener(b, "mousemove", OZONE.dialog.hovertip._mousemove);
        YAHOO.util.Event.addListener(b, "mouseout", OZONE.dialog.hovertip._mouseout);
        YAHOO.util.Event.addListener(b, "mouseover", OZONE.dialog.hovertip._mouseover);
        return
    },
    _mouseover: function (d) {
        var b = YAHOO.util.Event.getTarget(d);
        var c = b.hovertip;
        c.style.display = "block";
        var a = b.hovertipOptions;
        YAHOO.util.Dom.setXY(b.hovertip, [0, 0]);
        OZONE.dialog.hovertip._mousemove(d);
        console.log(c);
        $j(c).fadeIn(50)
    },
    _mousemove: function (i) {
        var c = YAHOO.util.Event.getTarget(i);
        var b = c.hovertip;
        var k = 0;
        var j = 0;
        if (!i) {
            var i = window.event
        }
        if (i.pageX || i.pageY) {
            k = i.pageX;
            j = i.pageY
        } else {
            if (i.clientX || i.clientY) {
                k = i.clientX + document.documentElement.scrollLeft;
                j = i.clientY + document.documentElement.scrollTop
            }
        }
        var l = YAHOO.util.Dom.getViewportHeight();
        var a = YAHOO.util.Dom.getViewportWidth();
        var g = b.offsetHeight;
        var f = b.offsetWidth;
        var d = 20;
        if (c.hovertipOptions && c.hovertipOptions.smartWidthLimit) {
            var h = c.hovertipOptions.smartWidthLimit;
            if (f > h * a) {
                b.style.width = h * a + "px"
            }
        }
        if (c.hovertipOptions && c.hovertipOptions.valign) {
            switch (c.hovertipOptions.valign) {
                case "center":
                    if (l - i.clientY < g + 2 * d && i.clientY > g + 1.5 * d) {
                        j -= g + 1.5 * d
                    }
                    j += d;
                    k = i.clientX - f * 0.5;
                    if (k + f > a - d) {
                        k = a - f - d
                    }
                    if (k < d) {
                        k = d
                    }
            }
        } else {
            if (a - i.clientX < f + 2 * d && i.clientX > f + 1.5 * d) {
                k -= f + 1.5 * d
            }
            if (l - i.clientY < g + 2 * d && i.clientY > g + 1.5 * d) {
                j -= g + 1.5 * d
            }
            k += d;
            j += d
        }
        YAHOO.util.Dom.setXY(b, [k, j])
    },
    _mouseout: function (c) {
        var a = YAHOO.util.Event.getTarget(c);
        var b = a.hovertip;
        b.style.display = "none"
    },
    dominit: function (j, b) {
        OZONE.dialog.hovertip.init();
        var f;
        if (j) {
            f = $(j).getElementsByTagName("div")
        } else {
            f = document.getElementsByTagName("div")
        }
        var d = new Array();
        for (var c = 0; c < f.length; c++) {
            if (f[c].id.match(/\-hovertip$/)) {
                d.push(f[c])
            }
        }
        for (var c = 0; c < d.length; c++) {
            var h = d[c];
            var a = h.id.replace(/\-hovertip$/, "");
            var g = $(a);
            if (g) {
                if (!b) {
                    var b = new Object()
                }
                b.context = h;
                OZONE.dialog.hovertip.makeTip(g, b)
            }
        }
    },
    hideAll: function () {
        var a = $("odialog-hovertips");
        if (a) {
            var c = a.getElementsByTagName("div");
            for (var b = 0; b < c.length; b++) {
                if (c[b].className.match(/hovertip/)) {
                    c[b].style.display = "none"
                }
            }
        }
    }
};
OZONE.dialogs = {};
OZONE.dialogs.Base = function () {};
OZONE.dialogs.Base.prototype = {
    initialize: function () {
        this.templateBase = "/common--dialogs/";
        this.template = "";
        this.title = null;
        this.buttons = new Array();
        this.buttonObjects = new Array();
        this.clickOutsideToClose = false;
        this.smooth = false;
        this.focusButton = null;
        this.buttonListeners = new Object();
        this.windowClass = "";
        this.content = "";
        this.windowDiv = null;
        this.fixODate = true;
        this.style = new Object()
    },
    setButtons: function (a) {},
    addButtonListener: function (c, b, a) {
        this.buttonListeners[c] = b
    },
    show: function () {
        var d = document.createElement("div");
        this.windowDiv = d;
        d.className = "owindow " + this.windowClass;
        var i;
        for (i in this.style) {
            d.style[i] = this.style[i]
        }
        var l = document.createElement("div");
        $j(l).html(this.content);
        if (l.getElementsByTagName("div").item(0) && YAHOO.util.Dom.hasClass(l.getElementsByTagName("div").item(0), "owindow")) {
            d = l.getElementsByTagName("div").item(0)
        } else {
            if (YAHOO.util.Dom.getElementsByClassName("content", "div", l).length == 1) {
                $j(d).html(l.innerHTML)
            } else {
                if (this.title != null) {
                    var b = document.createElement("div");
                    b.className = "title modal-header";
                    $j(b).html(this.title);
                    d.appendChild(b)
                }
                var c = l;
                c.className = "content modal-body";
                d.appendChild(c);
                if (this.buttons.length > 0) {
                    var f = document.createElement("div");
                    f.className = "button-bar modal-footer";
                    for (var g = 0; g < this.buttons.length; g++) {
                        var k = this.buttons[g];
                        var h = document.createElement("a");
                        h.href = "javascript:;";
                        h.innerHTML = ogettext(k);
                        h.className = "btn btn-default button button-" + k.toLowerCase().replace(/ /g, "-");
                        if (this.buttonListeners[k]) {
                            YAHOO.util.Event.addListener(h, "click", this.buttonListeners[k], this, true)
                        }
                        f.appendChild(h);
                        this.buttonObjects[k] = h
                    }
                    d.appendChild(f)
                }
            }
        }
        OZONE.dialog.factory.shader().show();
        var a = OZONE.dialog.factory.boxcontainer();
        a.setContent(d);
        if (this.smooth == true) {
            a.showContent({
                smooth: true
            })
        } else {
            a.showContent()
        }
        if (this.clickOutsideToClose) {
            a.clickOutsideToHide()
        }
        if (this.focusButton && this.buttonObjects[this.focusButton]) {
            this.buttonObjects[this.focusButton].focus()
        }
    },
    hide: function () {
        $j(this.windowDiv).fadeOut(100)
    },
    close: function () {
        this.hide();
        OZONE.dialog.cleanAll({
            timeout: 200
        })
    }
};
OZONE.dialogs.SmallInfoBox = Class.create();
OZONE.dialogs.SmallInfoBox.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.smooth = true;
        this.windowClass = "o-infobox"
    }
});
OZONE.dialogs.WaitBox = Class.create();
OZONE.dialogs.WaitBox.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.smooth = true;
        this.windowClass = "owait"
    }
});
OZONE.dialogs.SuccessBox = Class.create();
OZONE.dialogs.SuccessBox.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.smooth = true;
        this.windowClass = "osuccess";
        this.timeout = 1500
    }
});
OZONE.dialogs.SuccessBox.prototype.show = function () {
    OZONE.dialogs.Base.prototype.show.call(this);
    if (this.timeout) {
        setTimeout("OZONE.dialog.cleanAll()", this.timeout)
    }
};
OZONE.dialogs.ErrorDialog = Class.create();
OZONE.dialogs.ErrorDialog.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.windowClass = "error";
        this.title = "Error";
        var a = "close message";
        this.buttons = [a];
        this.addButtonListener(a, this.close);
        this.focusButton = a
    }
});
OZONE.dialogs.ConfirmationDialog = Class.create();
OZONE.dialogs.ConfirmationDialog.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.windowClass = "confirmation";
        this.title = "Confirmation"
    }
});
OZONE.dialogs.SuccessDialog = Class.create();
OZONE.dialogs.SuccessDialog.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.smooth = true;
        this.windowClass = "confirm";
        this.title = "Success";
        this.buttons = ["close message"];
        this.addButtonListener("close message", this.close);
        this.focusButton = "close message"
    }
});
OZONE.dialogs.InfoDialog = Class.create();
OZONE.dialogs.InfoDialog.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.smooth = true;
        this.windowClass = "info";
        this.title = " ";
        this.buttons = ["close window"];
        this.addButtonListener("close window", this.close);
        this.focusButton = "close window"
    }
});
OZONE.dialogs.ActionDialog = Class.create();
OZONE.dialogs.ActionDialog.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.smooth = true;
        this.windowClass = "info";
        this.title = " ";
        this.buttons = ["Cancel"];
        this.addButtonListener("Cancel", this.close);
        this.focusButton = "Cancel"
    }
});
OZONE.dialogs.Dialog = Class.create();
OZONE.dialogs.Dialog.prototype = Object.extend(new OZONE.dialogs.Base(), {
    initialize: function () {
        OZONE.dialogs.Base.prototype.initialize.call(this);
        this.title = ""
    }
});

function exinfo2() {
    this.show = function () {
        var b = OZONE.dialog.factory.shader();
        b.show();
        var a = OZONE.dialog.factory.boxcontainer();
        a.setContent('<div class="box444">DUPA</div>');
        a.showContent()
    }
}

function listener1() {
    var a = new OZONE.dialog.shader();
    a.show()
}

function listener2() {
    e = new exinfo2();
    e.show()
}

function testdialog() {
    var a = new OZONE.dialogs.Base();
    a.template = "Warning";
    a.content = "dupowy content";
    a.buttons = ["cancel", "Ok"];
    a.addButtonListener("cancel", a.close);
    a.smooth = true;
    a.show()
}

function testdialog2() {
    var a = new OZONE.dialogs.ErrorDialog();
    a.content = "<h1>Error processing template...</h1>test";
    a.show()
}

function testdialog3() {
    var a = new OZONE.dialogs.SuccessBox();
    a.content = "Loading file...";
    a.timeout = 1000;
    a.show()
};
