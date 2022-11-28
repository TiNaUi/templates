(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/list/list" ], {
    "0aa1": function(t, e, i) {
        var a = i("aee5");
        i.n(a).a;
    },
    "2fd3": function(t, e, i) {
        i.r(e);
        var a = i("40cc"), n = i("db6c");
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        i("0aa1");
        var c = i("f0c5"), d = Object(c.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = d.exports;
    },
    "40cc": function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {
            return a;
        });
        var a = {
            imageLoader: function() {
                return i.e("components/image-loader/image-loader").then(i.bind(null, "afcc"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "93a7": function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i("5a7a"), n = i("9692"), o = i("1f64"), c = i("134c"), d = i("5f10"), s = i("e4b5"), r = {
                components: {
                    jiangqieNodata: function() {
                        i.e("components/nodata/nodata").then(function() {
                            return resolve(i("4536"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    jiangqieLoadmore: function() {
                        i.e("components/loadmore/loadmore").then(function() {
                            return resolve(i("0330"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    imageLoader: function() {
                        i.e("components/image-loader/image-loader").then(function() {
                            return resolve(i("afcc"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    jiangqieNomore: function() {
                        i.e("components/nomore/nomore").then(function() {
                            return resolve(i("e5f5"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                data: function() {
                    return {
                        jqTheme: "",
                        posts: [],
                        loadding: !1,
                        pullUpOn: !0,
                        loaded: !1,
                        ad: {
                            frequency_banner: 0,
                            switch_banner: "",
                            id_banner: "",
                            switch_video: "",
                            id_video: ""
                        },
                        list_mode: 0,
                        show_excerpt: 0,
                        title: "",
                        tag_id: void 0,
                        cat_id: void 0,
                        cat: void 0,
                        search: void 0,
                        track: void 0
                    };
                },
                onLoad: function(e) {
                    var i = this;
                    s.setPage(this), n.scoreShare(e.source);
                    var a = {};
                    e.cat_id ? (this.cat_id = e.cat_id, a.cat_id = e.cat_id) : e.tag_id ? this.tag_id = e.tag_id : e.search && (this.search = e.search), 
                    e.title && (this.title = e.title, t.setNavigationBarTitle({
                        title: this.title
                    })), d.get(c.JIANGQIE_SETTING_LIST, a).then(function(t) {
                        i.ad = t.data.ad, i.list_mode = t.data.list_mode, i.show_excerpt = t.data.show_excerpt, 
                        t.data.cat && (i.cat = t.data.cat);
                    }), this.loadPost(!0);
                },
                onShow: function() {},
                onReachBottom: function() {
                    this.pullUpOn && this.loadPost(!1);
                },
                onShareAppMessage: function() {
                    var t = "pages/list/list";
                    this.cat_id ? t += "?cat_id=" + this.cat_id : this.tag_id ? t += "?tag_id=" + this.tag_id : this.search ? t += "?search=" + this.search : t += "?null=null";
                    var e = getApp().globalData.appName;
                    this.title && (t += "&title=" + this.title, e = this.title + "-" + e);
                    var i = o.getUser();
                    return i && (t += "&source=" + i.user_id), {
                        title: e,
                        path: t
                    };
                },
                onShareTimeline: function() {
                    var t = "";
                    t = this.cat_id ? "cat_id=" + this.cat_id : this.tag_id ? "tag_id=" + this.tag_id : this.search ? "search=" + this.search : "null=null";
                    var e = getApp().globalData.appName;
                    this.title && (t += "&title=" + this.title, e = this.title + "-" + e);
                    var i = o.getUser();
                    return i && (t += "&source=" + i.user_id), {
                        title: e,
                        query: t
                    };
                },
                methods: {
                    userClickAction: function(t) {
                        var e = t.currentTarget.dataset.user_id;
                        n.openLink("/pages/mysite/mysite?user_id=" + e);
                    },
                    clickPost: function(t) {
                        1 == t.direct_link_switch ? n.openLink(t.direct_link) : n.openLink("/pages/view/view?post_id=" + t.id);
                    },
                    loadPost: function(t) {
                        var e = this;
                        if (!this.loadding) {
                            this.loadding = !0;
                            var i = "", n = {
                                offset: t ? 0 : this.posts.length
                            };
                            void 0 !== this.cat_id ? (i = c.JIANGQIE_POSTS_CATEGORY, n.cat_id = this.cat_id) : void 0 !== this.tag_id ? (i = c.JIANGQIE_POSTS_TAG, 
                            n.tag_id = this.tag_id) : void 0 !== this.search ? (i = c.JIANGQIE_POSTS_SEARCH, 
                            n.search = this.search) : void 0 !== this.track ? (i = c.JIANGQIE_POSTS_MY, n.track = this.track) : i = c.JIANGQIE_POSTS_LAST, 
                            d.get(i, n).then(function(i) {
                                e.loaded = !0, e.loadding = !1, e.posts = t ? i.data : e.posts.concat(i.data), e.pullUpOn = i.data.length >= a.JQ_PER_PAGE_COUNT;
                            });
                        }
                    }
                }
            };
            e.default = r;
        }).call(this, i("543d").default);
    },
    aee5: function(t, e, i) {},
    db6c: function(t, e, i) {
        i.r(e);
        var a = i("93a7"), n = i.n(a);
        for (var o in a) "default" !== o && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = n.a;
    },
    ff47: function(t, e, i) {
        (function(t) {
            i("060e"), a(i("66fd"));
            var e = a(i("2fd3"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = i, t(e.default);
        }).call(this, i("543d").createPage);
    }
}, [ [ "ff47", "common/runtime", "common/vendor" ] ] ]);