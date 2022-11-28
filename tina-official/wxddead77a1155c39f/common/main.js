(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "01d0": function(e, t, n) {},
    "2ebf": function(e, t, n) {
        n.r(t);
        var o = n("86ef");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("6c35");
        var r = n("f0c5"), c = Object(r.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = c.exports;
    },
    "6c35": function(e, t, n) {
        var o = n("01d0");
        n.n(o).a;
    },
    "86ef": function(e, t, n) {
        n.r(t);
        var o = n("c83a"), a = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = a.a;
    },
    ae80: function(e, t, n) {
        (function(e) {
            n("060e");
            var t = a(n("66fd")), o = a(n("2ebf"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t.default.config.productionTip = !1, o.default.mpType = "app", 
            e(new t.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, o.default))).$mount();
        }).call(this, n("543d").createApp);
    },
    c83a: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("1f64"), a = n("134c"), r = n("5f10"), c = n("e4b5"), l = {
                globalData: {
                    appName: "",
                    logoNav: "",
                    logoF: "",
                    userInfo: null,
                    jqTheme: "default",
                    platform: ""
                },
                onLaunch: function() {
                    var t = this;
                    o.checkSession(), e.getSystemInfo({
                        success: function(n) {
                            t.globalData.platform = n.platform, "devtools" != n.platform && e.setInnerAudioOption({
                                obeyMuteSwitch: !1
                            });
                        }
                    }), r.get(a.JIANGQIE_SETTING_HLOBAL).then(function(e) {
                        getApp().globalData.appName = e.data.title, getApp().globalData.logoNav = e.data.logo_nav, 
                        getApp().globalData.logoF = e.data.logo_f, c.setTheme(e.data.theme);
                    });
                }
            };
            t.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "ae80", "common/runtime", "common/vendor" ] ] ]);