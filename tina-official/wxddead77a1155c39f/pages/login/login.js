(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/login/login" ], {
    "09b8": function(t, e, n) {},
    "86cd": function(t, e, n) {
        n.r(e);
        var a = n("f4b3"), i = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = i.a;
    },
    b798: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    ca2e: function(t, e, n) {
        n.r(e);
        var a = n("b798"), i = n("86cd");
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("d23c");
        var c = n("f0c5"), u = Object(c.a)(i.default, a.b, a.c, !1, null, "a8bc4404", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    d23c: function(t, e, n) {
        var a = n("09b8");
        n.n(a).a;
    },
    d8e5: function(t, e, n) {
        (function(t) {
            n("060e"), a(n("66fd"));
            var e = a(n("ca2e"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    f4b3: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n("9692"), i = n("1f64"), o = n("134c"), c = n("5f10"), u = n("e4b5"), r = {
                data: function() {
                    return {
                        jqTheme: "",
                        type: "login",
                        code: "",
                        title: "",
                        background: "",
                        yhxy: void 0,
                        ystk: void 0,
                        logo: ""
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    u.setPage(this), a.scoreShare(e.source), e.type && (this.type = e.type), t.login({
                        success: function(t) {
                            n.code = t.code;
                        },
                        fail: function(t) {
                            a.toast("请确认配置正确");
                        }
                    }), this.logo = getApp().globalData.logoF, this.title = getApp().globalData.appName, 
                    c.get(o.JIANGQIE_SETTING_LOGIN).then(function(t) {
                        n.background = t.data.bg, n.yhxy = t.data.login_yhxy, n.ystk = t.data.login_ystk;
                    });
                },
                onShow: function() {},
                onShareAppMessage: function() {
                    var t = "pages/index/index", e = i.getUser();
                    return e && (t = t + "?source=" + e.user_id), {
                        title: getApp().globalData.appName,
                        path: t
                    };
                },
                onShareTimeline: function() {
                    var t = i.getUser();
                    return {
                        title: getApp().globalData.appName,
                        query: t ? "source=" + t.user_id : ""
                    };
                },
                methods: {
                    handlerLoginClick: function(e) {
                        var n = this;
                        t.getUserProfile({
                            desc: "使用平台的头像昵称初始化用户",
                            success: function(t) {
                                var e = t.userInfo;
                                n.login(e.nickName, e.avatarUrl);
                            },
                            fail: function(t) {
                                a.toast("需要同意才能登录");
                            }
                        });
                    },
                    login: function(t, e) {
                        var n = {
                            code: this.code,
                            nickName: t,
                            avatarUrl: e,
                            channel: "weixin"
                        };
                        c.get(o.JIANGQIE_USER_LOGIN, n).then(function(t) {
                            i.setUser(t.data), a.navigateBack();
                        }, function(t) {
                            console.log(t);
                        });
                    },
                    getuserinfo: function(t) {
                        var e = t.detail.userInfo;
                        this.login(e.nickName, e.avatarUrl);
                    },
                    getPhoneNumber: function(t) {
                        c.post(o.JIANGQIE_USER_SET_MOBILE, {
                            encrypted_data: t.detail.encryptedData,
                            iv: t.detail.iv,
                            code: this.code
                        }).then(function(t) {
                            Alert.toast(t.msg), a.navigateBack();
                        });
                    },
                    cancelClick: function(t) {
                        a.navigateBack();
                    },
                    yhxyClick: function(t) {
                        a.openLink("/pages/viewhtml/viewhtml?page_id=" + this.yhxy);
                    },
                    ystkClick: function(t) {
                        a.openLink("/pages/viewhtml/viewhtml?page_id=" + this.ystk);
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d").default);
    }
}, [ [ "d8e5", "common/runtime", "common/vendor" ] ] ]);