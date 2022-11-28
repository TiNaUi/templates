(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/mp-html/mp-html" ], {
    "66a9": function(t, e, n) {},
    "7c4b": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    "8b8c": function(t, e, n) {
        n.r(e);
        var o = n("7c4b"), i = n("a366");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("d4e9");
        var c = n("f0c5"), a = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    },
    a366: function(t, e, n) {
        n.r(e);
        var o = n("d190"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    d190: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = [ n("9501") ], i = n("e092"), r = {
                name: "mp-html",
                data: function() {
                    return {
                        nodes: []
                    };
                },
                props: {
                    containerStyle: {
                        type: String,
                        default: ""
                    },
                    content: String,
                    copyLink: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    domain: String,
                    errorImg: {
                        type: String,
                        default: ""
                    },
                    lazyLoad: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    loadingImg: {
                        type: String,
                        default: ""
                    },
                    pauseVideo: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    previewImg: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    scrollTable: [ Boolean, String ],
                    selectable: [ Boolean, String ],
                    setTitle: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    showImgMenu: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    tagStyle: Object,
                    useAnchor: [ Boolean, Number ]
                },
                components: {
                    node: function() {
                        n.e("components/mp-html/node/node").then(function() {
                            return resolve(n("e9af"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                watch: {
                    content: function(t) {
                        this.setContent(t);
                    }
                },
                created: function() {
                    this.plugins = [];
                    for (var t = o.length; t--; ) this.plugins.push(new o[t](this));
                },
                mounted: function() {
                    this.content && !this.nodes.length && this.setContent(this.content);
                },
                beforeDestroy: function() {
                    this._hook("onDetached"), clearInterval(this._timer);
                },
                methods: {
                    in: function(t, e, n) {
                        t && e && n && (this._in = {
                            page: t,
                            selector: e,
                            scrollTop: n
                        });
                    },
                    navigateTo: function(e, n) {
                        var o = this;
                        return new Promise(function(i, r) {
                            if (o.useAnchor) {
                                n = n || parseInt(o.useAnchor) || 0;
                                ">>>";
                                var c = t.createSelectorQuery().in(o._in ? o._in.page : o).select((o._in ? o._in.selector : "._root") + (e ? "".concat(">>>", "#").concat(e) : "")).boundingClientRect();
                                o._in ? c.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect() : c.selectViewport().scrollOffset(), 
                                c.exec(function(e) {
                                    if (e[0]) {
                                        var c = e[1].scrollTop + e[0].top - (e[2] ? e[2].top : 0) + n;
                                        o._in ? o._in.page[o._in.scrollTop] = c : t.pageScrollTo({
                                            scrollTop: c,
                                            duration: 300
                                        }), i();
                                    } else r(Error("Label not found"));
                                });
                            } else r(Error("Anchor is disabled"));
                        });
                    },
                    getText: function(t) {
                        var e = "";
                        return function t(n) {
                            for (var o = 0; o < n.length; o++) {
                                var i = n[o];
                                if ("text" === i.type) e += i.text.replace(/&amp;/g, "&"); else if ("br" === i.name) e += "\n"; else {
                                    var r = "p" === i.name || "div" === i.name || "tr" === i.name || "li" === i.name || "h" === i.name[0] && i.name[1] > "0" && i.name[1] < "7";
                                    r && e && "\n" !== e[e.length - 1] && (e += "\n"), i.children && t(i.children), 
                                    r && "\n" !== e[e.length - 1] ? e += "\n" : "td" !== i.name && "th" !== i.name || (e += "\t");
                                }
                            }
                        }(t || this.nodes), e;
                    },
                    getRect: function() {
                        var e = this;
                        return new Promise(function(n, o) {
                            t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec(function(t) {
                                return t[0] ? n(t[0]) : o(Error("Root label not found"));
                            });
                        });
                    },
                    setContent: function(t, e) {
                        var n = this;
                        e && this.imgList || (this.imgList = []);
                        var o, r = new i(this).parse(t);
                        this.$set(this, "nodes", e ? (this.nodes || []).concat(r) : r), this._videos = [], 
                        this.$nextTick(function() {
                            n._hook("onLoad"), n.$emit("load");
                        }), clearInterval(this._timer), this._timer = setInterval(function() {
                            n.getRect().then(function(t) {
                                t.height === o && (n.$emit("ready", t), clearInterval(n._timer)), o = t.height;
                            }).catch(function() {});
                        }, 350);
                    },
                    _hook: function(t) {
                        for (var e = o.length; e--; ) this.plugins[e][t] && this.plugins[e][t]();
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d").default);
    },
    d4e9: function(t, e, n) {
        var o = n("66a9");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/mp-html/mp-html-create-component", {
    "components/mp-html/mp-html-create-component": function(t, e, n) {
        n("543d").createComponent(n("8b8c"));
    }
}, [ [ "components/mp-html/mp-html-create-component" ] ] ]);