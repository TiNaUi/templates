(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/type-new/type-new" ], {
    "184b": function(e, t, n) {},
    "525e": function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            imageLoader: function() {
                return n.e("components/image-loader/image-loader").then(n.bind(null, "afcc"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "58fc": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, n("5a7a");
        var a = n("9692"), o = n("1f64"), r = n("134c"), c = n("5f10"), u = n("e4b5"), i = {
            data: function() {
                return {
                    jqTheme: "",
                    sort_cats: [],
                    top_cats: []
                };
            },
            onLoad: function(e) {
                a.scoreShare(e.source), u.setPage(this), this.loadCategories(0);
            },
            onShow: function() {},
            onShareAppMessage: function() {
                var e = "pages/type-new/type-new", t = o.getUser();
                return t && (e = e + "?source=" + t.user_id), {
                    title: getApp().globalData.appName,
                    path: e
                };
            },
            onShareTimeline: function() {
                var e = o.getUser();
                return {
                    title: getApp().globalData.appName,
                    query: e ? "source=" + e.user_id : ""
                };
            },
            methods: {
                clickCat: function(e) {
                    a.openLink("/pages/list/list?cat_id=" + e);
                },
                loadCategories: function(e) {
                    var t = this;
                    c.post(r.JIANGQIE_CATEGORY_INDEX2).then(function(e) {
                        t.sort_cats = e.data.sort_cats, t.top_cats = e.data.top_cats;
                    });
                }
            }
        };
        t.default = i;
    },
    "6cc2": function(e, t, n) {
        n.r(t);
        var a = n("525e"), o = n("f726");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("99fa");
        var c = n("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    8191: function(e, t, n) {
        (function(e) {
            n("060e"), a(n("66fd"));
            var t = a(n("6cc2"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    "99fa": function(e, t, n) {
        var a = n("184b");
        n.n(a).a;
    },
    f726: function(e, t, n) {
        n.r(t);
        var a = n("58fc"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    }
}, [ [ "8191", "common/runtime", "common/vendor" ] ] ]);