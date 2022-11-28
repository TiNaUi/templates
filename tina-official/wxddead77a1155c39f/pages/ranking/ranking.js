(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/ranking/ranking" ], {
    "582c": function(t, n, e) {
        e.r(n);
        var o = e("b844"), a = e.n(o);
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        n.default = a.a;
    },
    6330: function(t, n, e) {},
    6718: function(t, n, e) {
        (function(t) {
            e("060e"), o(e("66fd"));
            var n = o(e("8e00"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    7653: function(t, n, e) {
        var o = e("6330");
        e.n(o).a;
    },
    "8e00": function(t, n, e) {
        e.r(n);
        var o = e("d0c0"), a = e("582c");
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        e("7653");
        var i = e("f0c5"), u = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = u.exports;
    },
    b844: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, e("5a7a");
        var o = e("9692"), a = e("1f64"), r = e("134c"), i = e("5f10"), u = e("e4b5"), c = {
            data: function() {
                return {
                    jqTheme: "",
                    background: void 0,
                    tabs: [ {
                        sort: "view",
                        name: "浏览数"
                    }, {
                        sort: "like",
                        name: "点赞数"
                    }, {
                        sort: "favorite",
                        name: "收藏数"
                    }, {
                        sort: "comment",
                        name: "评论数"
                    } ],
                    cur_sort: "view",
                    posts: []
                };
            },
            onLoad: function(t) {
                o.scoreShare(t.source), u.setPage(this), t.sort && (this.cur_sort = t.sort), this.loadSetting(), 
                this.loadData();
            },
            onShow: function() {},
            onShareAppMessage: function() {
                var t = "pages/ranking/ranking", n = a.getUser();
                return n && (t = t + "?source=" + n.user_id), {
                    title: getApp().globalData.appName,
                    path: t
                };
            },
            onShareTimeline: function() {
                var t = a.getUser();
                return {
                    title: getApp().globalData.appName,
                    query: t ? "source=" + t.user_id : ""
                };
            },
            methods: {
                clickTab: function(t) {
                    this.cur_sort != t.sort && (this.cur_sort = t.sort, this.posts = [], this.loadData());
                },
                clickPost: function(t) {
                    1 == t.direct_link_switch ? o.openLink(t.direct_link) : o.openLink("/pages/view/view?post_id=" + t.id);
                },
                loadSetting: function() {
                    var t = this;
                    i.post(r.JIANGQIE_SETTING_RANKING).then(function(n) {
                        t.background = n.data.background;
                    });
                },
                loadData: function() {
                    var t = this;
                    i.post(r.JIANGQIE_POSTS_RANKING, {
                        sort: this.cur_sort
                    }).then(function(n) {
                        t.posts = n.data;
                    });
                }
            }
        };
        n.default = c;
    },
    d0c0: function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    }
}, [ [ "6718", "common/runtime", "common/vendor" ] ] ]);