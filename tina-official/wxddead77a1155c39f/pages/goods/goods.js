(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/goods/goods" ], {
    "228a": function(o, n, t) {},
    "46fb": function(o, n, t) {
        (function(o) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = t("9692"), i = t("1f64"), a = t("134c"), d = t("5f10"), s = t("e4b5"), u = {
                data: function() {
                    return {
                        jqTheme: "",
                        goods_id: void 0,
                        goods: void 0,
                        article: ""
                    };
                },
                onLoad: function(n) {
                    s.setPage(this), e.scoreShare(n.source), this.goods_id = n.goods_id, this.loadGoods(), 
                    o.$on("linktap", this.onMPHtmlLink);
                },
                onUnload: function() {
                    o.$off("linktap", this.onMPHtmlLink);
                },
                onShow: function() {
                    this.loadGoods();
                },
                onPullDownRefresh: function() {
                    this.loadGoods();
                },
                onShareAppMessage: function() {
                    var o = "pages/goods/goods?goods_id=" + this.goods_id, n = i.getUser();
                    return n && (o = o + "&source=" + n.user_id), {
                        title: this.goods.title,
                        path: o
                    };
                },
                methods: {
                    onMPHtmlLink: function(o) {
                        var n = o["data-link"];
                        if (n.startsWith("https://pan.baidu.com")) return this.net_disk_link = n, void this.adJiliClick();
                        n && e.openLink(o["data-link"]);
                    },
                    exchangeClick: function() {
                        e.openLink("/pages/exchange/exchange?goods_id=" + this.goods_id);
                    },
                    loadGoods: function() {
                        var n = this;
                        d.post(a.JIANGQIE_STORE_DETAIL, {
                            post_id: this.goods_id
                        }).then(function(t) {
                            n.goods = t.data, o.stopPullDownRefresh();
                        });
                    }
                }
            };
            n.default = u;
        }).call(this, t("543d").default);
    },
    "5e8a": function(o, n, t) {
        var e = t("228a");
        t.n(e).a;
    },
    "75b9": function(o, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {
            return e;
        });
        var e = {
            mpHtml: function() {
                return Promise.all([ t.e("common/vendor"), t.e("components/mp-html/mp-html") ]).then(t.bind(null, "8b8c"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "9a61": function(o, n, t) {
        t.r(n);
        var e = t("75b9"), i = t("f4de");
        for (var a in i) "default" !== a && function(o) {
            t.d(n, o, function() {
                return i[o];
            });
        }(a);
        t("5e8a");
        var d = t("f0c5"), s = Object(d.a)(i.default, e.b, e.c, !1, null, "5e851b6f", null, !1, e.a, void 0);
        n.default = s.exports;
    },
    b54d: function(o, n, t) {
        (function(o) {
            t("060e"), e(t("66fd"));
            var n = e(t("9a61"));
            function e(o) {
                return o && o.__esModule ? o : {
                    default: o
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, o(n.default);
        }).call(this, t("543d").createPage);
    },
    f4de: function(o, n, t) {
        t.r(n);
        var e = t("46fb"), i = t.n(e);
        for (var a in e) "default" !== a && function(o) {
            t.d(n, o, function() {
                return e[o];
            });
        }(a);
        n.default = i.a;
    }
}, [ [ "b54d", "common/runtime", "common/vendor" ] ] ]);