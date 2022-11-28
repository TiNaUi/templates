(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/webview/webview" ], {
    "06b6": function(e, n, t) {
        t.r(n);
        var u = t("0bd7"), a = t("4ac7");
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        var o = t("f0c5"), c = Object(o.a)(a.default, u.b, u.c, !1, null, "5a06b491", null, !1, u.a, void 0);
        n.default = c.exports;
    },
    "0bd7": function(e, n, t) {
        t.d(n, "b", function() {
            return u;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var u = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "4ac7": function(e, n, t) {
        t.r(n);
        var u = t("e3c0"), a = t.n(u);
        for (var r in u) "default" !== r && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(r);
        n.default = a.a;
    },
    b6d4: function(e, n, t) {
        (function(e) {
            t("060e"), u(t("66fd"));
            var n = u(t("06b6"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(n.default);
        }).call(this, t("543d").createPage);
    },
    e3c0: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var u = {
            data: function() {
                return {
                    url: ""
                };
            },
            onLoad: function(e) {
                e.url && (this.url = decodeURIComponent(e.url));
            },
            onShow: function() {},
            onShareAppMessage: function() {
                var e = "pages/webview/webview?url=" + encodeURIComponent(this.url), n = Auth.getUser();
                return n && (e = e + "&source=" + n.user_id), {
                    title: getApp().globalData.appName,
                    path: e
                };
            },
            onShareTimeline: function() {
                var e = Auth.getUser();
                return {
                    title: getApp().globalData.appName,
                    query: e ? "source=" + e.user_id : ""
                };
            },
            methods: {}
        };
        n.default = u;
    }
}, [ [ "b6d4", "common/runtime", "common/vendor" ] ] ]);