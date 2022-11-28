(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tags/tags" ], {
    3132: function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    6781: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = e("5a7a"), o = e("9692"), i = e("1f64"), c = e("134c"), r = e("5f10"), u = e("e4b5"), l = {
            components: {
                jiangqieNodata: function() {
                    e.e("components/nodata/nodata").then(function() {
                        return resolve(e("4536"));
                    }.bind(null, e)).catch(e.oe);
                },
                jiangqieLoadmore: function() {
                    e.e("components/loadmore/loadmore").then(function() {
                        return resolve(e("0330"));
                    }.bind(null, e)).catch(e.oe);
                },
                jiangqieNomore: function() {
                    e.e("components/nomore/nomore").then(function() {
                        return resolve(e("e5f5"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    jqTheme: "",
                    tags: [],
                    loadding: !1,
                    pullUpOn: !0,
                    loaded: !1,
                    tag: {
                        id: "",
                        name: "",
                        cover: "",
                        count: ""
                    }
                };
            },
            onLoad: function(n) {
                u.setPage(this), o.scoreShare(n.source), this.loadTags(!0);
            },
            onShow: function() {},
            onReachBottom: function() {
                this.pullUpOn && this.loadTags(!1);
            },
            onShareAppMessage: function() {
                var n = "pages/index/index", t = i.getUser();
                return t && (n = n + "?source=" + t.user_id), {
                    title: getApp().globalData.appName,
                    path: n
                };
            },
            onShareTimeline: function() {
                var n = i.getUser();
                return {
                    title: getApp().globalData.appName,
                    query: n ? "source=" + n.user_id : ""
                };
            },
            methods: {
                tagClickAction: function(n) {
                    var t = n.currentTarget.dataset.id, e = n.currentTarget.dataset.tag;
                    o.openLink("/pages/list/list?title=" + e + "&tag_id=" + t);
                },
                loadTags: function(n) {
                    var t = this;
                    this.loadding || (this.loadding = !0, r.get(c.JIANGQIE_CATEGORY_TAGS, {
                        offset: n ? 0 : this.tags.length
                    }).then(function(e) {
                        t.loaded = !0, t.loadding = !1, t.tags = n ? e.data : t.tags.concat(e.data), t.pullUpOn = e.data.length >= a.JQ_PER_PAGE_COUNT;
                    }));
                }
            }
        };
        t.default = l;
    },
    "680b": function(n, t, e) {},
    "8ce4": function(n, t, e) {
        e.r(t);
        var a = e("6781"), o = e.n(a);
        for (var i in a) "default" !== i && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(i);
        t.default = o.a;
    },
    aac5: function(n, t, e) {
        var a = e("680b");
        e.n(a).a;
    },
    cb9c: function(n, t, e) {
        (function(n) {
            e("060e"), a(e("66fd"));
            var t = a(e("d3e7"));
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(t.default);
        }).call(this, e("543d").createPage);
    },
    d3e7: function(n, t, e) {
        e.r(t);
        var a = e("3132"), o = e("8ce4");
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        e("aac5");
        var c = e("f0c5"), r = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    }
}, [ [ "cb9c", "common/runtime", "common/vendor" ] ] ]);