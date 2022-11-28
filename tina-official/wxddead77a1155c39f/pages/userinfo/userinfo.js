(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/userinfo/userinfo" ], {
    "0d94": function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, t("5a7a");
            var u = t("9692"), o = t("1f64"), a = t("134c"), c = t("5f10"), i = t("e4b5"), r = {
                data: function() {
                    return {
                        jqTheme: "",
                        user: void 0
                    };
                },
                onLoad: function(e) {
                    this.user = o.getUser(), this.user ? (i.setPage(this), u.scoreShare(e.source)) : n.reLaunch({
                        url: "/pages/index/index"
                    });
                },
                methods: {
                    onChooseAvatar: function(e) {
                        var t = this;
                        n.chooseImage({
                            count: 1,
                            sizeType: [ "compressed" ],
                            success: function(n) {
                                var e = n.tempFilePaths[0];
                                c.upload(a.JIANGQIE_OTHER_UPLOAD, e).then(function(n) {
                                    t.user.avatar = n.data.src;
                                }, function(n) {
                                    Alert.error(n);
                                });
                            }
                        });
                    },
                    clickSubmit: function() {
                        var n = this;
                        c.post(a.JIANGQIE_USER_SETINFO, {
                            nickname: this.user.nickname,
                            avatar: this.user.avatar
                        }).then(function(e) {
                            0 == e.code ? (o.setUser(n.user), u.toast(e.msg), setTimeout(function() {
                                u.navigateBack();
                            }, 1500)) : u.toast(e.msg);
                        }, function(n) {
                            u.toast(n);
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, t("543d").default);
    },
    "55ce": function(n, e, t) {},
    "82dd": function(n, e, t) {
        t.r(e);
        var u = t("c156"), o = t("98c1");
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        t("8e28");
        var c = t("f0c5"), i = Object(c.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = i.exports;
    },
    "8e28": function(n, e, t) {
        var u = t("55ce");
        t.n(u).a;
    },
    "97a8": function(n, e, t) {
        (function(n) {
            t("060e"), u(t("66fd"));
            var e = u(t("82dd"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    "98c1": function(n, e, t) {
        t.r(e);
        var u = t("0d94"), o = t.n(u);
        for (var a in u) "default" !== a && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(a);
        e.default = o.a;
    },
    c156: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {
            return u;
        });
        var u = {
            uniIcons: function() {
                return Promise.all([ t.e("common/vendor"), t.e("uni_modules/uni-icons/components/uni-icons/uni-icons") ]).then(t.bind(null, "de46"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
}, [ [ "97a8", "common/runtime", "common/vendor" ] ] ]);