(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/record/record" ], {
    "273c": function(n, e, t) {
        t.r(e);
        var o = t("aaf7"), a = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    "278c": function(n, e, t) {
        t.r(e);
        var o = t("fea3"), a = t("273c");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("cf0a");
        var d = t("f0c5"), c = Object(d.a)(a.default, o.b, o.c, !1, null, "4d2cd6fc", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    3442: function(n, e, t) {
        (function(n) {
            t("060e"), o(t("66fd"));
            var e = o(t("278c"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    aaf7: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, t("5a7a");
            var o = t("9692"), a = t("1f64"), r = t("134c"), d = t("5f10"), c = t("e4b5"), u = {
                data: function() {
                    return {
                        jqTheme: "",
                        orders: [],
                        loadding: !1,
                        pullUpOn: !0,
                        loaded: !1
                    };
                },
                onLoad: function(e) {
                    a.getUser() ? (c.setPage(this), o.scoreShare(e.source), this.loadOrders()) : n.reLaunch({
                        url: "/pages/index/index"
                    });
                },
                onShow: function() {},
                onPullDownRefresh: function() {
                    this.orders = [], this.loadOrders();
                },
                onReachBottom: function() {
                    this.pullUpOn && this.loadOrders();
                },
                methods: {
                    loadOrders: function() {
                        var e = this;
                        this.loadding || (this.loadding = !0, d.post(r.JIANGQIE_STORE_RECORD, {
                            offset: this.orders.length
                        }).then(function(t) {
                            e.loaded = !0, e.loadding = !1, e.orders = e.orders.concat(t.data.orders), e.pullUpOn = t.data.more, 
                            n.stopPullDownRefresh();
                        }));
                    }
                }
            };
            e.default = u;
        }).call(this, t("543d").default);
    },
    ca8e: function(n, e, t) {},
    cf0a: function(n, e, t) {
        var o = t("ca8e");
        t.n(o).a;
    },
    fea3: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
}, [ [ "3442", "common/runtime", "common/vendor" ] ] ]);