(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/certification/certification" ], {
    "2bf0": function(t, e, n) {
        var i = n("d877");
        n.n(i).a;
    },
    "34f5": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("5a7a"), a = n("9692"), c = n("1f64"), o = n("134c"), r = n("5f10"), u = n("e4b5"), s = {
                data: function() {
                    return {
                        jqTheme: "",
                        certify: void 0,
                        apply: {
                            certificate: "",
                            name: "",
                            contact: "",
                            brief: ""
                        },
                        background: "",
                        title2: "",
                        description2: "",
                        icon_nav: ""
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    c.getUser() ? (u.setPage(this), a.scoreShare(e.source), r.get(o.JIANGQIE_SETTING_CERTIFY).then(function(t) {
                        n.background = t.data.background, n.title2 = t.data.title2, n.description2 = t.data.description2, 
                        n.icon_nav = t.data.icon_nav;
                    })) : t.reLaunch({
                        url: "/pages/index/index"
                    });
                },
                onShow: function() {
                    this.certify || this.loadData();
                },
                onShareAppMessage: function() {
                    var t = "pages/index/index", e = c.getUser();
                    return e && (t = t + "?source=" + e.user_id), {
                        title: getApp().globalData.appName,
                        path: t
                    };
                },
                onShareTimeline: function() {
                    var t = c.getUser();
                    return {
                        title: getApp().globalData.appName,
                        query: t ? "source=" + t.user_id : ""
                    };
                },
                methods: {
                    chooseImage: function(e) {
                        var n = this;
                        t.chooseImage({
                            count: 1,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(t) {
                                t.tempFilePaths.forEach(function(t) {
                                    r.upload(o.JIANGQIE_OTHER_UPLOAD, t).then(function(t) {
                                        n.apply.certificate = t.data.src;
                                    }, function(t) {
                                        a.toast(t);
                                    });
                                });
                            }
                        });
                    },
                    loadData: function() {
                        var t = this;
                        r.get(o.JIANGQIE_USER_MY_CERTIFY).then(function(e) {
                            e.data.apply && (t.apply = e.data.apply), t.certify = e.data.certify;
                        });
                    },
                    formSubmit: function(e) {
                        var n = this;
                        this.certify && this.certify.name ? t.showModal({
                            title: "提示",
                            content: "再次提交，需要重新审核。",
                            success: function(t) {
                                t.confirm && n.submitCerity(n.apply);
                            }
                        }) : this.submitCerity(this.apply), this.subscribe();
                    },
                    submitCerity: function(t) {
                        r.get(o.JIANGQIE_USER_APPLY_CERTIFY, t).then(function(t) {
                            a.toast("提交成功，请耐心等待审核");
                        }, function(t) {
                            a.toast(t);
                        });
                    },
                    subscribe: function() {
                        i.JQ_TEMPLATE_VIP_CERTIFY && t.requestSubscribeMessage({
                            tmplIds: [ i.JQ_TEMPLATE_VIP_CERTIFY ],
                            success: function(t) {
                                "requestSubscribeMessage:ok" == t.errMsg && "reject" != t[i.JQ_TEMPLATE_VIP_CERTIFY] && r.get(o.JIANGQIE_USER_SUBSCRIBE, {
                                    subscribe: "vip_certify"
                                }).then(function(t) {
                                    a.toast("订阅成功");
                                });
                            },
                            fail: function(t) {
                                a.toast(t.errMsg);
                            }
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    "49d8": function(t, e, n) {
        n.r(e);
        var i = n("b854"), a = n("bc58");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("2bf0");
        var o = n("f0c5"), r = Object(o.a)(a.default, i.b, i.c, !1, null, "cd784916", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    b854: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uniIcons: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uni-icons/components/uni-icons/uni-icons") ]).then(n.bind(null, "de46"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    bc58: function(t, e, n) {
        n.r(e);
        var i = n("34f5"), a = n.n(i);
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        e.default = a.a;
    },
    d518: function(t, e, n) {
        (function(t) {
            n("060e"), i(n("66fd"));
            var e = i(n("49d8"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    d877: function(t, e, n) {}
}, [ [ "d518", "common/runtime", "common/vendor" ] ] ]);