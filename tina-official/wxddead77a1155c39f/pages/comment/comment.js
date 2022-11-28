(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/comment/comment" ], {
    "33ef": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("9692"), c = n("1f64"), o = n("134c"), a = n("5f10"), s = n("e4b5"), u = n("5a7a"), r = {
                data: function() {
                    return {
                        jqTheme: "",
                        show_subscribe: !1,
                        content: "",
                        placeholder: "请输入内容",
                        post_id: "0",
                        comment_id: "0"
                    };
                },
                onLoad: function(e) {
                    c.getUser() && e.post_id ? (s.setPage(this), i.scoreShare(e.source), this.post_id = e.post_id, 
                    e.comment_id && (this.comment_id = e.comment_id)) : t.reLaunch({
                        url: "/pages/index/index"
                    });
                },
                onShow: function() {},
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
                    contentInputAction: function(t) {
                        this.content = t.detail.value;
                    },
                    submitClickAction: function(e) {
                        var n = this;
                        0 != this.content.length ? a.get(o.JIANGQIE_COMMENT_ADD, {
                            post_id: this.post_id,
                            parent_id: this.comment_id,
                            content: this.content
                        }).then(function(t) {
                            a.get(o.JIANGQIE_SCORE_ADD, {
                                action: "comment",
                                post_id: n.post_id,
                                slient: !0
                            }).then(function(t) {}, function(t) {
                                console.log(t);
                            }), "0" == n.comment_id && (n.show_subscribe = !0);
                        }, function(t) {
                            i.toast(t);
                        }) : t.showToast({
                            icon: "none",
                            title: "请输入评论内容"
                        });
                    },
                    clickSubscribeCancel: function() {
                        this.show_subscribe = !1, i.navigateBack();
                    },
                    clickSubscribeOK: function() {
                        this.show_subscribe = !1, this.subscribe();
                    },
                    subscribe: function() {
                        u.JQ_TEMPLATE_COMMENT_REPLY ? t.requestSubscribeMessage({
                            tmplIds: [ u.JQ_TEMPLATE_COMMENT_REPLY ],
                            success: function(t) {
                                "requestSubscribeMessage:ok" == t.errMsg && "reject" != t[u.JQ_TEMPLATE_COMMENT_REPLY] ? a.get(o.JIANGQIE_USER_SUBSCRIBE, {
                                    subscribe: "comment_reply"
                                }).then(function(t) {
                                    i.toast("订阅成功"), setTimeout(function() {
                                        i.navigateBack();
                                    }, 2e3);
                                }) : i.navigateBack();
                            },
                            fail: function(t) {
                                i.toast(t.errMsg), setTimeout(function() {
                                    i.navigateBack();
                                }, 2e3);
                            }
                        }) : setTimeout(function() {
                            i.navigateBack();
                        }, 2e3);
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d").default);
    },
    "62f9": function(t, e, n) {
        var i = n("ec60");
        n.n(i).a;
    },
    "635a": function(t, e, n) {
        n.r(e);
        var i = n("6b8d"), c = n("ec30");
        for (var o in c) "default" !== o && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(o);
        n("62f9");
        var a = n("f0c5"), s = Object(a.a)(c.default, i.b, i.c, !1, null, "5462c949", null, !1, i.a, void 0);
        e.default = s.exports;
    },
    "6b8d": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
    },
    bafc: function(t, e, n) {
        (function(t) {
            n("060e"), i(n("66fd"));
            var e = i(n("635a"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    ec30: function(t, e, n) {
        n.r(e);
        var i = n("33ef"), c = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = c.a;
    },
    ec60: function(t, e, n) {}
}, [ [ "bafc", "common/runtime", "common/vendor" ] ] ]);