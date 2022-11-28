(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mine/mine" ], {
    "2bf4": function(e, t, i) {
        var n = i("7124");
        i.n(n).a;
    },
    7124: function(e, t, i) {},
    "897a": function(e, t, i) {
        i.d(t, "b", function() {
            return n;
        }), i.d(t, "c", function() {
            return a;
        }), i.d(t, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    9188: function(e, t, i) {
        i.r(t);
        var n = i("897a"), a = i("97a5");
        for (var r in a) "default" !== r && function(e) {
            i.d(t, e, function() {
                return a[e];
            });
        }(r);
        i("2bf4");
        var o = i("f0c5"), c = Object(o.a)(a.default, n.b, n.c, !1, null, "1ecf528a", null, !1, n.a, void 0);
        t.default = c.exports;
    },
    "97a5": function(e, t, i) {
        i.r(t);
        var n = i("b4e1"), a = i.n(n);
        for (var r in n) "default" !== r && function(e) {
            i.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = a.a;
    },
    b4e1: function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i("5a7a"), a = i("9692"), r = i("1f64"), o = i("134c"), c = i("5f10"), s = i("e4b5"), u = {
                data: function() {
                    return function(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }({
                        jqTheme: "",
                        setting: {},
                        user: void 0,
                        is_certify: void 0,
                        menu: [],
                        views: [],
                        certify_updatetime: "",
                        background: "",
                        banner: "",
                        copyrightlogo: ""
                    }, "menu", []);
                },
                onLoad: function(e) {
                    var t = this;
                    s.setPage(this), a.scoreShare(e.source), c.get(o.JIANGQIE_SETTING_UCENTER).then(function(e) {
                        var i = t.menu;
                        e.data.menu.length > 0 && (i = e.data.menu), t.background = e.data.background, t.banner = e.data.banner ? e.data.banner : "/static/images/vip.png", 
                        t.is_certify = e.data.is_certify, t.menu = i;
                    }), this.copyrightlogo = getApp().globalData.logoF;
                },
                onShow: function() {
                    var e = this;
                    c.get(o.JIANGQIE_USER_INDEX).then(function(t) {
                        var i = r.getUser();
                        i.certify_updatetime != t.data.certify_updatetime && (e.certify_updatetime = t.data.certify_updatetime, 
                        i.certify = t.data.certify, i.certify_icon = t.data.certify_icon, i.certify_name = t.data.certify_name, 
                        r.setUser(i)), e.user = i, e.loadLastViews();
                    }, function(e) {
                        console.log(e);
                    });
                },
                onShareAppMessage: function() {
                    var e = "pages/index/index", t = r.getUser();
                    return t && (e = e + "?source=" + t.user_id), {
                        title: getApp().globalData.appName,
                        path: e
                    };
                },
                onShareTimeline: function() {
                    var e = r.getUser();
                    return {
                        title: getApp().globalData.appName,
                        query: e ? "source=" + e.user_id : ""
                    };
                },
                methods: {
                    clickLink: function(e) {
                        a.openLink(e);
                    },
                    postClickAction: function(e) {
                        var t = e.currentTarget.dataset.id;
                        a.openLink("/pages/view/view?post_id=" + t);
                    },
                    vipClickAction: function(e) {
                        1 == this.is_certify && a.openLink("/pages/certification/certification");
                    },
                    integralCllick: function() {
                        a.openLink("/pages/integral/integral");
                    },
                    orderCllick: function() {
                        a.openLink("/pages/order_list/order_list");
                    },
                    historyCllick: function() {
                        a.openLink("/pages/history/history");
                    },
                    subscribeClick: function() {
                        r.getUser() ? n.JQ_TEMPLATE_POST_PUBLISH ? e.requestSubscribeMessage({
                            tmplIds: [ n.JQ_TEMPLATE_POST_PUBLISH ],
                            success: function(e) {
                                "requestSubscribeMessage:ok" == e.errMsg && "reject" != e[n.JQ_TEMPLATE_POST_PUBLISH] && c.get(o.JIANGQIE_USER_SUBSCRIBE, {
                                    subscribe: "post_publish"
                                }).then(function(e) {
                                    a.toast("订阅成功");
                                });
                            },
                            fail: function(e) {
                                a.toast(e.errMsg);
                            }
                        }) : a.toast("尚未配置订阅模板") : e.navigateTo({
                            url: "/pages/login/login"
                        });
                    },
                    itemViewsClick: function(e) {
                        a.openLink("/pages/history/history?track=views");
                    },
                    itemLikesClick: function(e) {
                        a.openLink("/pages/history/history?track=likes");
                    },
                    itemFavouritesClick: function(e) {
                        a.openLink("/pages/history/history?track=favorites");
                    },
                    itemCommentsClick: function(e) {
                        a.openLink("/pages/history/history?track=comments");
                    },
                    itemCertifyClick: function(t) {
                        var i = this;
                        r.getUser() ? e.navigateTo({
                            url: "/pages/certification/certification",
                            success: function(e) {
                                if (i.certify_updatetime) {
                                    var t = r.getUser();
                                    t.certify_updatetime = i.certify_updatetime, r.setUser(t);
                                }
                                i.certify_updatetime = "";
                            }
                        }) : e.navigateTo({
                            url: "/pages/login/login"
                        });
                    },
                    itemClearClick: function(t) {
                        e.showModal({
                            title: "提示",
                            content: "清除缓存 需要重新登录",
                            success: function(t) {
                                t.confirm && (e.clearStorageSync(), e.showToast({
                                    title: "清除完毕"
                                }), e.reLaunch({
                                    url: "/pages/index/index"
                                }));
                            }
                        });
                    },
                    itemLinkClick: function(e) {
                        var t = e.currentTarget.dataset.link;
                        a.openLink(t);
                    },
                    itemPageClick: function(e) {
                        var t = e.currentTarget.dataset.page_id;
                        a.openLink("/pages/viewhtml/viewhtml?page_id=" + t);
                    },
                    loadLastViews: function() {
                        var e = this;
                        c.get(o.JIANGQIE_POSTS_LAST_VIEWS).then(function(t) {
                            e.views = t.data;
                        });
                    },
                    copyrightClick: function() {}
                }
            };
            t.default = u;
        }).call(this, i("543d").default);
    },
    c002: function(e, t, i) {
        (function(e) {
            i("060e"), n(i("66fd"));
            var t = n(i("9188"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = i, e(t.default);
        }).call(this, i("543d").createPage);
    }
}, [ [ "c002", "common/runtime", "common/vendor" ] ] ]);