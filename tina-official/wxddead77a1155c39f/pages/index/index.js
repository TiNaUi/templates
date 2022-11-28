(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "0926": function(t, e, a) {
        (function(t) {
            a("060e"), n(a("66fd"));
            var e = n(a("d1af"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, t(e.default);
        }).call(this, a("543d").createPage);
    },
    "1eec": function(t, e, a) {
        var n = a("e459");
        a.n(n).a;
    },
    "273d": function(t, e, a) {
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return n;
        });
        var n = {
            uniNavBar: function() {
                return a.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(a.bind(null, "a99d"));
            },
            uniIcons: function() {
                return Promise.all([ a.e("common/vendor"), a.e("uni_modules/uni-icons/components/uni-icons/uni-icons") ]).then(a.bind(null, "de46"));
            },
            imageLoader: function() {
                return a.e("components/image-loader/image-loader").then(a.bind(null, "afcc"));
            }
        }, i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "71d2": function(t, e, a) {
        a.r(e);
        var n = a("8908"), i = a.n(n);
        for (var o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = i.a;
    },
    8908: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a("5a7a"), i = a("9692"), o = a("1f64"), c = a("134c"), r = a("5f10"), s = a("e4b5"), d = {
                components: {
                    jiangqieNodata: function() {
                        a.e("components/nodata/nodata").then(function() {
                            return resolve(a("4536"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    imageLoader: function() {
                        a.e("components/image-loader/image-loader").then(function() {
                            return resolve(a("afcc"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    jiangqieLoadmore: function() {
                        a.e("components/loadmore/loadmore").then(function() {
                            return resolve(a("0330"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    jiangqieNomore: function() {
                        a.e("components/nomore/nomore").then(function() {
                            return resolve(a("e5f5"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    return {
                        jqTheme: "",
                        logo: "",
                        title: "...",
                        slide: [],
                        iconNav: [],
                        currentTab: 0,
                        catNav: [],
                        nav_opacity: 0,
                        posts: [],
                        loadding: !1,
                        loaded: !1,
                        pullUpOn: !0,
                        hot_search: [],
                        ad: {
                            frequency_banner: 0,
                            switch_banner: "",
                            id_banner: "",
                            switch_video: "",
                            id_video: ""
                        },
                        maxad: !1,
                        list_mode: 0,
                        show_excerpt: 0,
                        tags_title: "",
                        tags_width: 0,
                        tags: [],
                        active_title: "",
                        active: [],
                        hot_title: "",
                        hot_index: void 0,
                        hot: [],
                        share_image: void 0,
                        currentSlide: "",
                        scrollleft: "",
                        undefined: "",
                        catbarLocationTop: 0,
                        catLength: [],
                        screenWidth: 0,
                        bd_title: void 0,
                        bd_keywords: void 0,
                        bd_description: void 0,
                        topNavHeight: 0
                    };
                },
                onLoad: function(e) {
                    var a = this;
                    i.scoreShare(e.source);
                    var n = t.getSystemInfoSync().statusBarHeight, o = wx.getMenuButtonBoundingClientRect();
                    this.topNavHeight = n + o.height + 2 * (o.top - n), r.get(c.JIANGQIE_SETTING_THEME).then(function(t) {
                        var e = t.data.theme;
                        s.setTheme(e), s.setPage(a), s.setTabbar();
                    }), this.init();
                },
                onShow: function() {},
                onReady: function() {
                    this.screenWidth = i.rpx2px(750);
                },
                onPullDownRefresh: function() {
                    this.init();
                },
                onReachBottom: function() {
                    this.pullUpOn && this.loadPost(!1);
                },
                onPageScroll: function(t) {
                    this.nav_opacity = (t.scrollTop > 255 ? 255 : t.scrollTop) / 255;
                },
                onShareAppMessage: function() {
                    var t = "pages/index/index", e = o.getUser();
                    e && (t = t + "?source=" + e.user_id);
                    var a = {
                        title: getApp().globalData.appName,
                        path: t
                    };
                    return this.share_image && (a.imageUrl = this.share_image), a;
                },
                onShareTimeline: function() {
                    var t = o.getUser();
                    return {
                        title: getApp().globalData.appName,
                        query: t ? "source=" + t.user_id : ""
                    };
                },
                methods: {
                    maxadClick: function(t) {
                        i.openLink(this.maxad.link), this.maxad = !1;
                    },
                    maxadCloseClick: function(t) {
                        this.maxad = !1;
                    },
                    clickSearch: function(t) {
                        i.openLink("/pages/search/search");
                    },
                    slideChange: function(t) {
                        this.currentSlide = t.detail.current;
                    },
                    slideItemClick: function(t) {
                        var e = t.currentTarget.dataset.link;
                        i.openLink(e);
                    },
                    iconNavItemClick: function(t) {
                        var e = t.currentTarget.dataset.link;
                        i.openLink(e);
                    },
                    activeItemClick: function(t) {
                        var e = t.currentTarget.dataset.link;
                        i.openLink(e);
                    },
                    swichNav: function(t) {
                        var e = t.currentTarget.dataset.inx;
                        if (e != this.currentTab) {
                            for (var a = 0, n = 0; n < e; n++) a += this.catLength[n];
                            var i = 0;
                            a > this.screenWidth / 2 && (i = a - this.screenWidth / 2), this.currentTab = e, 
                            this.scrollleft = i, this.loadPost(!0);
                        }
                    },
                    tagClickAction: function(t) {
                        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.tag;
                        i.openLink("/pages/list/list?title=" + a + "&tag_id=" + e);
                    },
                    tagsMoreClick: function(t) {
                        i.openLink("/pages/tags/tags");
                    },
                    typeClickAction: function(e) {
                        t.switchTab({
                            url: "/pages/type-new/type-new"
                        });
                    },
                    clickPost: function(t) {
                        1 == t.direct_link_switch ? i.openLink(t.direct_link) : i.openLink("/pages/view/view?post_id=" + t.id);
                    },
                    calculateCatLength: function(t) {
                        for (var e = 0; e < this.catNav.length; e++) {
                            var a = this.catNav[e];
                            this.catLength.push(i.rpx2px(28 * a.name.length + 56));
                        }
                    },
                    init: function() {
                        var e = this;
                        r.get(c.JIANGQIE_SETTING_HOME).then(function(a) {
                            e.logo = a.data.logo_nav, e.catNav = [ {
                                id: 0,
                                name: "近期"
                            } ].concat(a.data.top_nav), e.slide = a.data.slide, e.iconNav = a.data.icon_nav, 
                            e.hot_search = a.data.hot_search, e.ad = a.data.ad, e.maxad = e.getMaxAD(a.data.maxad), 
                            e.list_mode = a.data.list_mode, e.show_excerpt = a.data.show_excerpt, e.tags_title = a.data.tags_title, 
                            e.tags_width = a.data.tags_width, e.tags = a.data.tags, e.active_title = a.data.active_title, 
                            e.active = a.data.active, e.hot_title = a.data.hot_title, e.hot = a.data.hot, e.hot_index = a.data.hot_index, 
                            e.share_image = a.data.share_image, n.JQ_TEMPLATE_POST_PUBLISH = a.data.sub_post_publish, 
                            n.JQ_TEMPLATE_COMMENT_REPLY = a.data.sub_comment_reply, n.JQ_TEMPLATE_VIP_CERTIFY = a.data.sub_vip_certify, 
                            n.JQ_TEMPLATE_SCORE_CHANGE = a.data.sub_score_change, e.title = a.data.home_title, 
                            t.createSelectorQuery().select(".tab-view").boundingClientRect(function(t) {
                                t && (e.catbarLocationTop = t.top - getApp().globalData.statusBarHeight - 44);
                            }).exec(), e.calculateCatLength(), t.stopPullDownRefresh();
                        }), this.loadPost(!0);
                    },
                    loadPost: function(t) {
                        var e = this;
                        if (!this.loadding) {
                            this.loadding = !0;
                            var a = {};
                            a.offset = t ? 0 : this.posts.length, 0 != this.currentTab && (a.cat_id = this.catNav[this.currentTab].id);
                            var i = c.JIANGQIE_POSTS_CATEGORY;
                            0 == this.currentTab && (i = c.JIANGQIE_POSTS_LAST), r.get(i, a).then(function(a) {
                                e.loadding = !1, e.loaded = !0, e.posts = t ? a.data : e.posts.concat(a.data), e.pullUpOn = a.data.length >= n.JQ_PER_PAGE_COUNT;
                            });
                        }
                    },
                    getMaxAD: function(t) {
                        if (!t) return !1;
                        var e = i.getMaxADLastTime();
                        e || (e = 0);
                        var a = new Date().getTime();
                        return a - e > 36e5 * t.interval && (i.setMaxADLastTime(a), t);
                    }
                }
            };
            e.default = d;
        }).call(this, a("543d").default);
    },
    d1af: function(t, e, a) {
        a.r(e);
        var n = a("273d"), i = a("71d2");
        for (var o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        a("1eec");
        var c = a("f0c5"), r = Object(c.a)(i.default, n.b, n.c, !1, null, "4bb376a2", null, !1, n.a, void 0);
        e.default = r.exports;
    },
    e459: function(t, e, a) {}
}, [ [ "0926", "common/runtime", "common/vendor" ] ] ]);