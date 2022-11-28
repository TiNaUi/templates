(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/store/store" ], {
    "0ad2": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "38c1": function(n, e, t) {},
    "81ce": function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = t("9692"), a = t("1f64"), i = t("134c"), r = t("5f10"), c = t("e4b5"), s = {
                components: {
                    jiangqieNodata: function() {
                        t.e("components/nodata/nodata").then(function() {
                            return resolve(t("4536"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    jiangqieLoadmore: function() {
                        t.e("components/loadmore/loadmore").then(function() {
                            return resolve(t("0330"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    imageLoader: function() {
                        t.e("components/image-loader/image-loader").then(function() {
                            return resolve(t("afcc"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    jiangqieNomore: function() {
                        t.e("components/nomore/nomore").then(function() {
                            return resolve(t("e5f5"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        jqTheme: "",
                        share_image: void 0,
                        slide: [],
                        icon_nav: [],
                        my_score: "",
                        posts: [],
                        loadding: !1,
                        pullUpOn: !0,
                        loaded: !1
                    };
                },
                onLoad: function(n) {
                    c.setPage(this), o.scoreShare(n.source), this.loadSetting(), this.loadGoodsList(!0);
                },
                onShow: function() {},
                onPullDownRefresh: function() {
                    this.loadSetting(), this.loadGoodsList(!0);
                },
                onReachBottom: function() {
                    this.pullUpOn && this.loadGoodsList(!1);
                },
                onShareAppMessage: function() {
                    var n = "pages/store/store", e = a.getUser();
                    e && (n += "?source=" + e.user_id);
                    var t = {
                        title: "积分商城-" + getApp().globalData.appName,
                        path: n
                    };
                    return this.share_image && (t.imageUrl = this.share_image), t;
                },
                methods: {
                    iconNavItemClick: function(n) {
                        var e = n.currentTarget.dataset.link;
                        o.openLink(e);
                    },
                    slideItemClick: function(n) {
                        var e = n.currentTarget.dataset.link;
                        o.openLink(e);
                    },
                    myScoreClick: function(n) {
                        o.openLink("/pages/integral/integral");
                    },
                    scoreGoodsClick: function(n) {
                        var e = n.currentTarget.dataset.id;
                        o.openLink("/pages/goods/goods?goods_id=" + e);
                    },
                    loadSetting: function() {
                        var n = this;
                        r.get(i.JIANGQIE_SETTING_STORE).then(function(e) {
                            n.share_image = e.data.share_image, n.slide = e.data.slide, n.icon_nav = e.data.icon_nav, 
                            n.my_score = e.data.my_score;
                        });
                    },
                    loadGoodsList: function(e) {
                        var t = this;
                        this.loadding || (this.loadding = !0, r.post(i.JIANGQIE_STORE_LAST, {
                            offset: e ? 0 : this.posts.length
                        }).then(function(o) {
                            t.loaded = !0, t.loadding = !1, t.posts = e ? o.data.list : t.posts.concat(o.data.list), 
                            t.pullUpOn = o.data.more, n.stopPullDownRefresh();
                        }));
                    }
                }
            };
            e.default = s;
        }).call(this, t("543d").default);
    },
    ba47: function(n, e, t) {
        var o = t("38c1");
        t.n(o).a;
    },
    c372: function(n, e, t) {
        t.r(e);
        var o = t("0ad2"), a = t("ea77");
        for (var i in a) "default" !== i && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(i);
        t("ba47");
        var r = t("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, "560096d8", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    d743: function(n, e, t) {
        (function(n) {
            t("060e"), o(t("66fd"));
            var e = o(t("c372"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(e.default);
        }).call(this, t("543d").createPage);
    },
    ea77: function(n, e, t) {
        t.r(e);
        var o = t("81ce"), a = t.n(o);
        for (var i in o) "default" !== i && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        e.default = a.a;
    }
}, [ [ "d743", "common/runtime", "common/vendor" ] ] ]);