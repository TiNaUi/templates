(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/nomore/nomore" ], {
    "18ba": function(n, e, o) {},
    "411b": function(n, e, o) {
        var t = o("18ba");
        o.n(t).a;
    },
    "7a5b": function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var t = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "844a": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            data: function() {
                return {
                    dotText: "●"
                };
            },
            externalClasses: [ "jiangqie-nomore-class" ],
            props: {
                visible: {
                    type: Boolean,
                    default: !1
                },
                bgcolor: {
                    type: String,
                    default: "#FFFFFF"
                },
                isDot: {
                    type: Boolean,
                    default: !1
                },
                text: {
                    type: String,
                    default: "我是有底线的..."
                }
            },
            methods: {}
        };
        e.default = t;
    },
    "9f5a": function(n, e, o) {
        o.r(e);
        var t = o("844a"), a = o.n(t);
        for (var r in t) "default" !== r && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(r);
        e.default = a.a;
    },
    e5f5: function(n, e, o) {
        o.r(e);
        var t = o("7a5b"), a = o("9f5a");
        for (var r in a) "default" !== r && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(r);
        o("411b");
        var c = o("f0c5"), u = Object(c.a)(a.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/nomore/nomore-create-component", {
    "components/nomore/nomore-create-component": function(n, e, o) {
        o("543d").createComponent(o("e5f5"));
    }
}, [ [ "components/nomore/nomore-create-component" ] ] ]);