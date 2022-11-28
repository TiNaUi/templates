(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/history/history" ], {
    "04cc": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("5a7a"), a = n("9692"), i = n("1f64"), r = n("134c"), c = n("5f10"), u = n("e4b5"), s = {
                components: {
                    jiangqieNodata: function() {
                        n.e("components/nodata/nodata").then(function() {
                            return resolve(n("4536"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    imageLoader: function() {
                        n.e("components/image-loader/image-loader").then(function() {
                            return resolve(n("afcc"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    jiangqieLoadmore: function() {
                        n.e("components/loadmore/loadmore").then(function() {
                            return resolve(n("0330"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    jiangqieNomore: function() {
                        n.e("components/nomore/nomore").then(function() {
                            return resolve(n("e5f5"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        jqTheme: "",
                        currentTab: "views",
                        posts: [],
                        loadding: !1,
                        loaded: !1,
                        pullUpOn: !0,
                        list_mode: 0,
                        show_excerpt: 0,
                        stat: {
                            view_count: "",
                            like_count: "",
                            favorite_count: "",
                            comment_count: ""
                        }
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    i.getUser() ? (u.setPage(this), a.scoreShare(t.source), t.track && (this.currentTab = t.track), 
                    c.get(r.JIANGQIE_SETTING_HISTORY).then(function(e) {
                        n.list_mode = e.data.list_mode, n.show_excerpt = e.data.show_excerpt, n.stat = e.data.stat;
                    }), this.loadPost(!0)) : e.reLaunch({
                        url: "/pages/index/index"
                    });
                },
                onShow: function() {},
                onReachBottom: function() {
                    this.pullUpOn && this.loadPost(!1);
                },
                onShareAppMessage: function() {
                    var e = "pages/index/index", t = i.getUser();
                    return t && (e = e + "?source=" + t.user_id), {
                        title: getApp().globalData.appName,
                        path: e
                    };
                },
                onShareTimeline: function() {
                    var e = i.getUser();
                    return {
                        title: getApp().globalData.appName,
                        query: e ? "source=" + e.user_id : ""
                    };
                },
                methods: {
                    swichNav: function(e) {
                        var t = e.currentTarget.dataset.tab;
                        this.currentTab = t, this.loadPost(!0);
                    },
                    clickPost: function(e) {
                        1 == e.direct_link_switch ? a.openLink(e.direct_link) : a.openLink("/pages/view/view?post_id=" + e.id);
                    },
                    loadPost: function(e) {
                        var t = this;
                        this.loadding || (this.loadding = !0, c.get(r.JIANGQIE_POSTS_MY, {
                            offset: e ? 0 : this.posts.length,
                            track: this.currentTab
                        }).then(function(n) {
                            t.loaded = !0, t.loadding = !1, t.posts = e ? n.data : t.posts.concat(n.data), t.pullUpOn = n.data.length >= o.JQ_PER_PAGE_COUNT;
                        }));
                    }
                }
            };
            t.default = s;
        }).call(this, n("543d").default);
    },
    "50b0": function(e, t, n) {
        (function(e) {
            n("060e"), o(n("66fd"));
            var t = o(n("8355"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(t.default);
        }).call(this, n("543d").createPage);
    },
    8176: function(e, t, n) {
        var o = n("f423");
        n.n(o).a;
    },
    8355: function(e, t, n) {
        n.r(t);
        var o = n("8d5e"), a = n("be45");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("8176");
        var r = n("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, "753239fa", null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "8d5e": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            imageLoader: function() {
                return n.e("components/image-loader/image-loader").then(n.bind(null, "afcc"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    be45: function(e, t, n) {
        n.r(t);
        var o = n("04cc"), a = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = a.a;
    },
    f423: function(e, t, n) {}
}, [ [ "50b0", "common/runtime", "common/vendor" ] ] ]);