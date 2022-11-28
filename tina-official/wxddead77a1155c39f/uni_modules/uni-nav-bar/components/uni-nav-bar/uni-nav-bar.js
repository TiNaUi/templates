(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar" ], {
    1980: function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {
            return i;
        });
        var i = {
            uniIcons: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uni_modules/uni-icons/components/uni-icons/uni-icons") ]).then(e.bind(null, "de46"));
            }
        }, o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    "7e3f": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = function(t) {
                return "number" == typeof t ? t + "px" : t;
            }, o = {
                name: "UniNavBar",
                components: {
                    statusBar: function() {
                        e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar").then(function() {
                            return resolve(e("05a1"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                emits: [ "clickLeft", "clickRight", "clickTitle" ],
                props: {
                    dark: {
                        type: Boolean,
                        default: !1
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    leftText: {
                        type: String,
                        default: ""
                    },
                    rightText: {
                        type: String,
                        default: ""
                    },
                    leftIcon: {
                        type: String,
                        default: ""
                    },
                    rightIcon: {
                        type: String,
                        default: ""
                    },
                    fixed: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    color: {
                        type: String,
                        default: ""
                    },
                    backgroundColor: {
                        type: String,
                        default: ""
                    },
                    statusBar: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    shadow: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    border: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    opacity: {
                        type: Number,
                        default: 1
                    },
                    height: {
                        type: [ Number, String ],
                        default: 44
                    },
                    leftWidth: {
                        type: [ Number, String ],
                        default: 60
                    },
                    rightWidth: {
                        type: [ Number, String ],
                        default: 60
                    }
                },
                computed: {
                    themeBgColor: function() {
                        return this.dark ? this.backgroundColor ? this.backgroundColor : this.dark ? "#333" : "#FFF" : this.backgroundColor || "#FFF";
                    },
                    themeColor: function() {
                        return this.dark ? this.color ? this.color : this.dark ? "#fff" : "#333" : this.color || "#333";
                    },
                    navbarHeight: function() {
                        return i(this.height);
                    },
                    leftIconWidth: function() {
                        return i(this.leftWidth);
                    },
                    rightIconWidth: function() {
                        return i(this.rightWidth);
                    }
                },
                mounted: function() {
                    t.report && "" !== this.title && t.report("title", this.title);
                },
                methods: {
                    onClickLeft: function() {
                        this.$emit("clickLeft");
                    },
                    onClickRight: function() {
                        this.$emit("clickRight");
                    },
                    onClickTitle: function() {
                        this.$emit("clickTitle");
                    }
                }
            };
            n.default = o;
        }).call(this, e("543d").default);
    },
    a99d: function(t, n, e) {
        e.r(n);
        var i = e("1980"), o = e("d4c2");
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        e("e10e");
        var r = e("f0c5"), a = Object(r.a)(o.default, i.b, i.c, !1, null, "2c1bbaea", null, !1, i.a, void 0);
        n.default = a.exports;
    },
    cadb: function(t, n, e) {},
    d4c2: function(t, n, e) {
        e.r(n);
        var i = e("7e3f"), o = e.n(i);
        for (var u in i) "default" !== u && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = o.a;
    },
    e10e: function(t, n, e) {
        var i = e("cadb");
        e.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component", {
    "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component": function(t, n, e) {
        e("543d").createComponent(e("a99d"));
    }
}, [ [ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component" ] ] ]);