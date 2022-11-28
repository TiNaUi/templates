(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/exchange/exchange" ], {
    "08e5": function(e, n, t) {
        t.r(n);
        var o = t("d467"), d = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = d.a;
    },
    "569d": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return d;
        }), t.d(n, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, d = [];
    },
    "752b": function(e, n, t) {
        (function(e) {
            t("060e"), o(t("66fd"));
            var n = o(t("e61b"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    cab2: function(e, n, t) {
        var o = t("fa94");
        t.n(o).a;
    },
    d467: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = t("9692"), d = t("1f64"), a = t("134c"), i = t("5f10"), s = t("e4b5"), r = {
                data: function() {
                    return {
                        jqTheme: "",
                        goods: void 0,
                        goods_id: void 0,
                        addressee: "",
                        mobile: "",
                        address: "",
                        remark: ""
                    };
                },
                onLoad: function(n) {
                    d.getUser() ? (s.setPage(this), o.scoreShare(n.source), this.goods_id = n.goods_id, 
                    this.loadGoods()) : e.reLaunch({
                        url: "/pages/index/index"
                    });
                },
                onShow: function() {},
                methods: {
                    onInputAddressee: function(e) {
                        this.addressee = e.detail.value;
                    },
                    onInputMobile: function(e) {
                        this.mobile = e.detail.value;
                    },
                    onInputAddress: function(e) {
                        this.address = e.detail.value;
                    },
                    onInputRemark: function(e) {
                        this.remark = e.detail.value;
                    },
                    exchangeClick: function() {
                        i.post(a.JIANGQIE_STORE_EXCHANGE, {
                            post_id: this.goods_id,
                            addressee: this.addressee,
                            mobile: this.mobile,
                            address: this.address,
                            remark: this.remark
                        }).then(function(n) {
                            0 == n.code && e.redirectTo({
                                url: "/pages/record/record"
                            });
                        }, function(e) {
                            o.toast(e);
                        });
                    },
                    loadGoods: function() {
                        var e = this;
                        i.post(a.JIANGQIE_STORE_PRE_EXCHANGE, {
                            post_id: this.goods_id
                        }).then(function(n) {
                            e.goods = n.data;
                        });
                    }
                }
            };
            n.default = r;
        }).call(this, t("543d").default);
    },
    e61b: function(e, n, t) {
        t.r(n);
        var o = t("569d"), d = t("08e5");
        for (var a in d) "default" !== a && function(e) {
            t.d(n, e, function() {
                return d[e];
            });
        }(a);
        t("cab2");
        var i = t("f0c5"), s = Object(i.a)(d.default, o.b, o.c, !1, null, "5098b4d6", null, !1, o.a, void 0);
        n.default = s.exports;
    },
    fa94: function(e, n, t) {}
}, [ [ "752b", "common/runtime", "common/vendor" ] ] ]);