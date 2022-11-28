(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/type/type" ], {
    "415a": function(t, e, n) {},
    5016: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "83e9": function(t, e, n) {
        n.r(e);
        var a = n("5016"), r = n("c3c0");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("fd94");
        var c = n("f0c5"), i = Object(c.a)(r.default, a.b, a.c, !1, null, "13e6ee63", null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "98b3": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("5a7a"), r = n("9692"), o = n("1f64"), c = n("134c"), i = n("5f10"), u = n("e4b5"), s = {
                data: function() {
                    return {
                        jqTheme: "",
                        tabbar: [],
                        categries: [],
                        menuHeight: "",
                        currentTab: 0,
                        scrollTop: 0,
                        setting: {
                            background: ""
                        }
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    r.scoreShare(e.source), u.setPage(this), t.getSystemInfo({
                        success: function(t) {
                            n.menuHeight = t.windowHeight - t.windowWidth / 750 * 92;
                        }
                    }), i.get(c.JIANGQIE_SETTING_CATEGORY).then(function(t) {
                        n.setting = t.data;
                    }), this.loadCategories(0);
                },
                onShow: function() {},
                onShareAppMessage: function() {
                    var t = "pages/type/type", e = o.getUser();
                    return e && (t = t + "?source=" + e.user_id), {
                        title: getApp().globalData.appName,
                        path: t
                    };
                },
                onShareTimeline: function() {
                    var t = o.getUser();
                    return {
                        title: getApp().globalData.appName,
                        query: t ? "source=" + t.user_id : ""
                    };
                },
                methods: {
                    subCatClick: function(t) {
                        var e = t.currentTarget.dataset.id, n = t.currentTarget.dataset.cat;
                        r.openLink("/pages/list/list?cat_id=" + e + "&title=" + n);
                    },
                    swichNav: function(e) {
                        var n = e.currentTarget.dataset.current;
                        if (this.currentTab == n) return !1;
                        t.pageScrollTo({
                            scrollTop: 0
                        }), this.currentTab = n, this.checkCor();
                    },
                    subscribeClick: function() {
                        o.getUser() ? a.JQ_TEMPLATE_POST_PUBLISH ? t.requestSubscribeMessage({
                            tmplIds: [ a.JQ_TEMPLATE_POST_PUBLISH ],
                            success: function(t) {
                                "requestSubscribeMessage:ok" == t.errMsg && "reject" != t[a.JQ_TEMPLATE_POST_PUBLISH] && i.get(c.JIANGQIE_USER_SUBSCRIBE, {
                                    subscribe: "post_publish"
                                }).then(function(t) {
                                    r.toast("订阅成功");
                                });
                            },
                            fail: function(t) {
                                r.toast(t.errMsg);
                            }
                        }) : r.toast("尚未配置订阅模板") : t.navigateTo({
                            url: "/pages/login/login"
                        });
                    },
                    checkCor: function() {
                        this.currentTab > 7 ? this.scrollTop = 500 : this.scrollTop = 0;
                    },
                    loadCategories: function(t) {
                        var e = this;
                        i.get(c.JIANGQIE_CATEGORY_INDEX, {
                            parent: t
                        }).then(function(t) {
                            e.tabbar = t.data;
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    a2e4: function(t, e, n) {
        (function(t) {
            n("060e"), a(n("66fd"));
            var e = a(n("83e9"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    c3c0: function(t, e, n) {
        n.r(e);
        var a = n("98b3"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    fd94: function(t, e, n) {
        var a = n("415a");
        n.n(a).a;
    }
}, [ [ "a2e4", "common/runtime", "common/vendor" ] ] ]);