(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/nodata/nodata" ], {
    4536: function(n, t, o) {
        o.r(t);
        var a = o("bf6c"), e = o("8e3d");
        for (var c in e) "default" !== c && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(c);
        o("c184");
        var u = o("f0c5"), f = Object(u.a)(e.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = f.exports;
    },
    "894f": function(n, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            data: function() {
                return {};
            },
            props: {
                text: {
                    type: String,
                    default: "什么也没有~"
                }
            }
        };
        t.default = a;
    },
    "8e3d": function(n, t, o) {
        o.r(t);
        var a = o("894f"), e = o.n(a);
        for (var c in a) "default" !== c && function(n) {
            o.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = e.a;
    },
    bf6c: function(n, t, o) {
        o.d(t, "b", function() {
            return a;
        }), o.d(t, "c", function() {
            return e;
        }), o.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, e = [];
    },
    c184: function(n, t, o) {
        var a = o("d45f");
        o.n(a).a;
    },
    d45f: function(n, t, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/nodata/nodata-create-component", {
    "components/nodata/nodata-create-component": function(n, t, o) {
        o("543d").createComponent(o("4536"));
    }
}, [ [ "components/nodata/nodata-create-component" ] ] ]);