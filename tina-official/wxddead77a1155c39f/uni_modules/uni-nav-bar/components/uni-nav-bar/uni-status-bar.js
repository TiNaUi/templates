(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar" ], {
    "05a1": function(n, a, t) {
        t.r(a);
        var u = t("ec45"), e = t("af1e");
        for (var o in e) "default" !== o && function(n) {
            t.d(a, n, function() {
                return e[n];
            });
        }(o);
        t("26a4");
        var i = t("f0c5"), r = Object(i.a)(e.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        a.default = r.exports;
    },
    "26a4": function(n, a, t) {
        var u = t("d36e");
        t.n(u).a;
    },
    "5b6a": function(n, a, t) {
        (function(n) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t = {
                name: "UniStatusBar",
                data: function() {
                    return {
                        statusBarHeight: 20
                    };
                },
                mounted: function() {
                    this.statusBarHeight = n.getSystemInfoSync().statusBarHeight + "px";
                }
            };
            a.default = t;
        }).call(this, t("543d").default);
    },
    af1e: function(n, a, t) {
        t.r(a);
        var u = t("5b6a"), e = t.n(u);
        for (var o in u) "default" !== o && function(n) {
            t.d(a, n, function() {
                return u[n];
            });
        }(o);
        a.default = e.a;
    },
    d36e: function(n, a, t) {},
    ec45: function(n, a, t) {
        t.d(a, "b", function() {
            return u;
        }), t.d(a, "c", function() {
            return e;
        }), t.d(a, "a", function() {});
        var u = function() {
            this.$createElement;
            this._self._c;
        }, e = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar-create-component", {
    "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar-create-component": function(n, a, t) {
        t("543d").createComponent(t("05a1"));
    }
}, [ [ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar-create-component" ] ] ]);