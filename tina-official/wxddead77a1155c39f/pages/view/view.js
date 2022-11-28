(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/view/view" ], {
    "255f": function(t, i, e) {},
    "5f34": function(t, i, e) {
        e.r(i);
        var o = e("7503"), n = e.n(o);
        for (var s in o) "default" !== s && function(t) {
            e.d(i, t, function() {
                return o[t];
            });
        }(s);
        i.default = n.a;
    },
    7392: function(t, i, e) {
        (function(t) {
            e("060e"), o(e("66fd"));
            var i = o(e("aacb"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(i.default);
        }).call(this, e("543d").createPage);
    },
    7503: function(t, i, e) {
        (function(t) {
            var o;
            function n(t, i, e) {
                return i in t ? Object.defineProperty(t, i, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[i] = e, t;
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0, e("c93d");
            var s = e("5a7a"), a = e("9692"), c = e("1f64"), r = e("134c"), d = e("5f10"), l = e("e4b5"), u = (e("d923"), 
            function() {
                e.e("components/nodata/nodata").then(function() {
                    return resolve(e("4536"));
                }.bind(null, e)).catch(e.oe);
            }), p = (requirePlugin("netdiskShare"), n(o = {
                components: {
                    jiangqieNodata: u,
                    jiangqieLoadmore: function() {
                        e.e("components/loadmore/loadmore").then(function() {
                            return resolve(e("0330"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    imageLoader: function() {
                        e.e("components/image-loader/image-loader").then(function() {
                            return resolve(e("afcc"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    jiangqieNomore: function() {
                        e.e("components/nomore/nomore").then(function() {
                            return resolve(e("e5f5"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    lPainter: function() {
                        Promise.all([ e.e("common/vendor"), e.e("uni_modules/lime-painter/components/lime-painter/index") ]).then(function() {
                            return resolve(e("8c96"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        jqTheme: "",
                        post: {
                            title: "",
                            show_header: 0,
                            time: "",
                            cats: [ {
                                name: ""
                            } ],
                            views: "",
                            switch_score: 0,
                            switch_certify: 0,
                            switch_jili: 0,
                            require_score: "",
                            certify_require: "",
                            baidu_disk: {
                                url: "",
                                name: "",
                                jili: 0
                            },
                            tags: [],
                            switch_comment: 0,
                            comment_count: "",
                            favorites: ""
                        },
                        post_content: "",
                        post_like: 0,
                        post_favorite: 0,
                        comment_count: 0,
                        comments: [],
                        loadding: !1,
                        pullUpOn: !0,
                        loaded: !1,
                        show_comment_submit: !1,
                        comment_content: "",
                        comment_count_change: 0,
                        recommend: [],
                        ad: {
                            switch_banner: "",
                            id_banner: "",
                            switch_video: "",
                            id_video: ""
                        },
                        show_jili: !0,
                        show_baidu_jili: !0,
                        like_list: [],
                        like_count: 0,
                        wxParseData: "",
                        copyright: "",
                        ad_top: {
                            link: "",
                            image: ""
                        },
                        ad_bottom: {
                            link: "",
                            image: ""
                        },
                        posterConfig: {},
                        showPopLogin: !1,
                        post_id: 0,
                        comment_id: 0,
                        wxacode: "",
                        needRefresh: !0,
                        videoAd: null,
                        audios: new Map(),
                        timeIdView: null,
                        scene: void 0,
                        net_disk_link: void 0,
                        isShowPainter: !1,
                        painterImage: "",
                        base: void 0
                    };
                },
                onLoad: function(i) {
                    var e = this;
                    if (l.setPage(this), a.scoreShare(i.source), i.scene) {
                        var o = decodeURIComponent(i.scene);
                        if (o.indexOf(",") > 0) {
                            var n = o.split(",");
                            this.post_id = n[0], a.scoreShare(n[1]);
                        } else this.post_id = o;
                    } else i.post_id && (this.post_id = i.post_id);
                    d.get(r.JIANGQIE_SETTING_POST).then(function(i) {
                        if (e.loadWxacode(), e.loadRecmmend(), e.ad = i.data.ad, e.copyright = i.data.copyright, 
                        e.ad_top = i.data.ad_top, e.ad_bottom = i.data.ad_bottom, "yes" == e.ad.switch_chp && 1154 != e.scene) {
                            var o = null;
                            t.createInterstitialAd && ((o = t.createInterstitialAd({
                                adUnitId: e.ad.id_chp
                            })).onLoad(function() {}), o.onError(function(t) {}), o.onClose(function() {})), 
                            o && o.show().catch(function(t) {
                                console.error(t);
                            });
                        }
                        e.loadJiLi();
                    }), t.$on("linktap", this.onMPHtmlLink);
                },
                onUnload: function() {
                    t.$off("linktap", this.onMPHtmlLink);
                },
                onShow: function() {
                    var t = this;
                    this.needRefresh ? d.get(r.JIANGQIE_POST_DETAIL, {
                        post_id: this.post_id
                    }).then(function(i) {
                        t.post = i.data, t.post_like = i.data.user.islike, t.post_favorite = i.data.user.isfavorite, 
                        t.comment_count = Number(i.data.comment_count), t.like_list = i.data.like_list, 
                        t.like_count = t.like_list.length, t.post_content = i.data.content, t.loadComments(!0), 
                        t.timeIdView && clearTimeout(t.timeIdView), t.timeIdView = setTimeout(function() {
                            t.timeIdView = null, d.get(r.JIANGQIE_SCORE_ADD, {
                                action: "view",
                                post_id: t.post_id,
                                slient: !0
                            }).then(function(t) {
                                console.log(t);
                            }, function(t) {
                                console.log(t);
                            });
                        }, 5e3);
                    }) : this.needRefresh = !0;
                }
            }, "onUnload", function() {
                this.timeIdView && clearTimeout(this.timeIdView);
            }), n(o, "onReachBottom", function() {
                this.pullUpOn && this.loadComments(!1);
            }), n(o, "onShareAppMessage", function() {
                var t = "pages/view/view?post_id=" + this.post_id, i = c.getUser();
                return i && (t = t + "&source=" + i.user_id), {
                    title: this.post.title,
                    imageUrl: this.post.thumbnail,
                    path: t
                };
            }), n(o, "onShareTimeline", function() {
                var t = "post_id=" + this.post_id, i = c.getUser();
                return {
                    title: this.post.title,
                    query: i ? t + "&source=" + i.user_id : t,
                    imageUrl: this.post.thumbnail
                };
            }), n(o, "methods", {
                onMPHtmlLink: function(t) {
                    var i = t["data-link"];
                    if (i.startsWith("https://pan.baidu.com")) return this.net_disk_link = i, void this.adJiliClick();
                    i && a.openLink(t["data-link"]);
                },
                loadJiLi: function() {
                    var i = this;
                    this.videoAd || (t.createRewardedVideoAd && this.ad.id_jili && this.ad.id_jili.length > 0 && 1154 != this.scene ? (this.videoAd = t.createRewardedVideoAd({
                        adUnitId: this.ad.id_jili
                    }), this.videoAd.onLoad(function() {}), this.videoAd.onError(function(t) {}), this.videoAd.onClose(function(e) {
                        e && e.isEnded && (i.show_jili = !1, i.show_baidu_jili = !1, i.net_disk_link ? t.setClipboardData({
                            data: i.net_disk_link,
                            success: function(t) {
                                i.net_disk_link = void 0, a.toast("网盘链接已复制");
                            }
                        }) : i.loadContent(), d.get(r.JIANGQIE_SCORE_ADD, {
                            action: "jili",
                            post_id: i.post_id,
                            nonce: i.post.jili_nonce,
                            slient: !0
                        }).then(function(t) {
                            console.log(t);
                        }, function(t) {
                            console.log(t);
                        }));
                    })) : (this.show_jili = !1, this.show_baidu_jili = !1));
                },
                adTopClick: function(t) {
                    var i = t.currentTarget.dataset.link;
                    a.openLink(i);
                },
                adBottomClick: function(t) {
                    var i = t.currentTarget.dataset.link;
                    a.openLink(i);
                },
                buyPostClick: function(i) {
                    var e = this;
                    c.getUser() ? t.showModal({
                        title: "提示",
                        content: "确认使用" + this.post.require_score + "积分阅读",
                        success: function(i) {
                            if (i.confirm) {
                                if (d.get(r.JIANGQIE_SCORE_BUY_POST, {
                                    post_id: e.post_id
                                }).then(function(t) {
                                    e.post.switch_score = 0, e.post.switch_certify = 0, e.post.switch_jili = 0, a.toast("已购买此篇文章"), 
                                    e.loadContent();
                                }, function(t) {
                                    a.toast(t);
                                }), !s.JQ_TEMPLATE_SCORE_CHANGE) return;
                                t.requestSubscribeMessage({
                                    tmplIds: [ s.JQ_TEMPLATE_SCORE_CHANGE ],
                                    success: function(t) {
                                        "requestSubscribeMessage:ok" == t.errMsg && "reject" != t[s.JQ_TEMPLATE_SCORE_CHANGE] && d.get(r.JIANGQIE_USER_SUBSCRIBE, {
                                            subscribe: "score_change",
                                            post_id: e.post_id
                                        }).then(function(t) {
                                            a.toast("订阅成功");
                                        });
                                    },
                                    fail: function(t) {
                                        a.toast(t.errMsg);
                                    }
                                });
                            } else if (i.cancel) return;
                        }
                    }) : t.navigateTo({
                        url: "/pages/login/login"
                    });
                },
                avatarClickAction: function(t) {
                    var i = t.currentTarget.dataset.user_id;
                    a.openLink("/pages/mysite/mysite?user_id=" + i);
                },
                clickCertify: function() {
                    a.openLink("/pages/certification/certification");
                },
                adJiliClick: function(t) {
                    var i = this;
                    this.videoAd && this.videoAd.show().catch(function() {
                        i.videoAd.load().then(function() {
                            return i.videoAd.show();
                        }).catch(function(t) {
                            console.log("激励视频 广告显示失败");
                        });
                    });
                },
                baiduDiskClick: function(i) {
                    if (this.post.baidu_disk && this.post.baidu_disk.url && this.post.baidu_disk.name) if (1 == this.post.baidu_disk.jili && this.show_baidu_jili) this.adJiliClick(); else {
                        var e = "plugin-private://wx8c873f830774d652/pages/outsite-chain/share-code/index?url=".concat(this.post.baidu_disk.url, "&origin=").concat(this.post.baidu_disk.name);
                        this.post.baidu_disk.code && (e += "&sharecode=".concat(this.post.baidu_disk.code)), 
                        this.post.baidu_disk.home && (e += "&home=".concat(this.post.baidu_disk.home)), 
                        t.setClipboardData({
                            data: this.post.baidu_disk.code,
                            success: function(i) {
                                a.toast("提取码已复制"), setTimeout(function() {
                                    t.navigateTo({
                                        url: e
                                    });
                                }, 1e3);
                            }
                        });
                    }
                },
                subscribeClick: function(i) {
                    c.getUser() ? s.JQ_TEMPLATE_POST_PUBLISH ? t.requestSubscribeMessage({
                        tmplIds: [ s.JQ_TEMPLATE_POST_PUBLISH ],
                        success: function(t) {
                            "requestSubscribeMessage:ok" == t.errMsg && "reject" != t[s.JQ_TEMPLATE_POST_PUBLISH] && d.get(r.JIANGQIE_USER_SUBSCRIBE, {
                                subscribe: "post_publish"
                            }).then(function(t) {
                                a.toast("订阅成功");
                            });
                        },
                        fail: function(t) {
                            a.toast(t.errMsg);
                        }
                    }) : a.toast("尚未配置订阅模板") : t.navigateTo({
                        url: "/pages/login/login"
                    });
                },
                handlerTagClick: function(t) {
                    var i = t.currentTarget.dataset.id, e = t.currentTarget.dataset.tag;
                    a.openLink("/pages/list/list?title=" + e + "&tag_id=" + i);
                },
                recPostClickAction: function(t) {
                    if (1 == t.currentTarget.dataset.swith) a.openLink(t.currentTarget.dataset.link); else {
                        var i = t.currentTarget.dataset.id;
                        a.openLink("/pages/view/view?post_id=" + i);
                    }
                },
                likeClickAction: function(t) {
                    var i = this;
                    d.get(r.JIANGQIE_USER_LIKE, {
                        post_id: this.post.id
                    }).then(function(t) {
                        for (var e = t.data.user_id, o = -1, n = 0; n < i.like_list.length; n++) if (e == i.like_list[n].user_id) {
                            o = n;
                            break;
                        }
                        var s = c.getUser().avatar;
                        o > -1 ? i.like_list.splice(o, 1) : i.like_list.unshift({
                            user_id: e,
                            avatar: s
                        }), i.like_count = i.like_list.length, i.post_like = 1 == i.post_like ? 0 : 1, d.get(r.JIANGQIE_SCORE_ADD, {
                            action: "like",
                            post_id: i.post_id,
                            slient: !0
                        }).then(function(t) {
                            console.log(t);
                        }, function(t) {
                            console.log(t);
                        });
                    });
                },
                commentReplyClickAction: function(t) {
                    var i = t.currentTarget.dataset.id;
                    a.openLink("/pages/comment/comment?post_id=" + this.post_id + "&comment_id=" + i);
                },
                commentDeleteClickAction: function(i) {
                    var e = this;
                    t.showModal({
                        title: "提示",
                        content: "确定要删除吗？",
                        success: function(t) {
                            if (t.confirm) {
                                var o = i.currentTarget.dataset.id;
                                d.get(r.JIANGQIE_COMMENT_DELETE, {
                                    comment_id: o
                                }).then(function(t) {
                                    e.comment_count_change = e.comment_count_change - 1, e.loadComments(!0);
                                });
                            }
                        }
                    });
                },
                commentClickAction: function(t) {
                    a.openLink("/pages/comment/comment?post_id=" + this.post_id);
                },
                favoriteClickAction: function(t) {
                    var i = this;
                    d.get(r.JIANGQIE_USER_FAVORITE, {
                        post_id: this.post.id
                    }).then(function(t) {
                        1 == i.post_favorite ? (i.post.favorites = i.post.favorites - 1, i.post_favorite = 0) : (i.post.favorites = i.post.favorites + 1, 
                        i.post_favorite = 1), d.get(r.JIANGQIE_SCORE_ADD, {
                            action: "favorite",
                            post_id: i.post_id,
                            slient: !0
                        }).then(function(t) {
                            console.log(t);
                        }, function(t) {
                            console.log(t);
                        });
                    });
                },
                sideBackClick: function(t) {
                    a.navigateBack();
                },
                loadComments: function(t) {
                    var i = this;
                    this.loadding || (this.loadding = !0, d.get(r.JIANGQIE_COMMENT_INDEX, {
                        post_id: this.post_id,
                        offset: t ? 0 : this.comments.length
                    }).then(function(e) {
                        i.loaded = !0, i.loadding = !1, i.comments = t ? e.data : i.comments.concat(e.data), 
                        i.pullUpOn = e.data.length >= s.JQ_PER_PAGE_COUNT;
                    }));
                },
                loadWxacode: function() {
                    var t = this;
                    d.get(r.JIANGQIE_POST_WXACODE, {
                        post_id: this.post_id
                    }).then(function(i) {
                        t.wxacode = i.data;
                    });
                },
                loadRecmmend: function() {
                    var t = this;
                    d.get(r.JIANGQIE_POST_DETAIL_RECOMMEND, {
                        post_id: this.post_id
                    }).then(function(i) {
                        t.recommend = i.data;
                    });
                },
                cancelLoginClick: function(t) {
                    this.showPopLogin = !1;
                },
                goLoginClick: function(i) {
                    t.navigateTo({
                        url: "/pages/login/login"
                    }), this.showPopLogin = !1;
                },
                clickPoster: function() {
                    var i;
                    this.painterImage ? t.previewImage({
                        urls: [ this.painterImage ]
                    }) : (this.isShowPainter = !0, this.base = {
                        width: "750rpx",
                        height: "1334rpx",
                        backgroundColor: l.getThemeColor(),
                        views: [ {
                            type: "view",
                            css: {
                                left: "30rpx",
                                top: "234rpx",
                                width: "690rpx",
                                height: "1000rpx",
                                background: "#FFFFFF",
                                radius: "30rpx"
                            }
                        }, {
                            type: "text",
                            text: getApp().globalData.appName,
                            css: (i = {
                                left: "15rpx",
                                top: "70rpx",
                                width: "720rpx",
                                color: l.getPosterTitleColor(),
                                fontSize: "38rpx",
                                textAlign: "center"
                            }, n(i, "color", "#FFFFFF"), n(i, "maxLines", 1), i)
                        }, {
                            type: "image",
                            src: this.post.thumbnail,
                            mode: "aspectFill",
                            css: {
                                left: "30rpx",
                                top: "234rpx",
                                width: "690rpx",
                                height: "400rpx",
                                radius: "30rpx"
                            }
                        }, {
                            type: "image",
                            src: getApp().globalData.logoF,
                            mode: "aspectFill",
                            css: {
                                left: "295rpx",
                                top: "140rpx",
                                width: "160rpx",
                                height: "160rpx",
                                radius: "80rpx"
                            }
                        }, {
                            type: "text",
                            text: this.post.title,
                            css: {
                                left: "70rpx",
                                top: "720rpx",
                                width: "610rpx",
                                color: "#000000",
                                fontSize: "36rpx",
                                textAlign: "left",
                                maxLines: 1
                            }
                        }, {
                            type: "text",
                            text: this.post.excerpt,
                            css: {
                                left: "70rpx",
                                top: "780rpx",
                                width: "610rpx",
                                color: "#000000",
                                fontSize: "28rpx",
                                lineHeight: "50rpx",
                                maxLines: 2
                            }
                        }, {
                            type: "image",
                            src: this.wxacode,
                            mode: "aspectFill",
                            css: {
                                left: "275rpx",
                                top: "960rpx",
                                width: "200rpx",
                                height: "200rpx",
                                background: "#FFFFFF"
                            }
                        }, {
                            type: "text",
                            text: "识别小程序，发现不一样的美好",
                            css: {
                                left: "30rpx",
                                top: "1170rpx",
                                width: "690rpx",
                                color: "#888888",
                                fontSize: "28rpx",
                                textAlign: "center"
                            }
                        } ]
                    });
                },
                onPainterSuccess: function(i) {
                    this.painterImage = i, t.previewImage({
                        urls: [ i ]
                    });
                },
                loadContent: function() {
                    var t = this;
                    d.post(r.JIANGQIE_POST_CONTENT, {
                        post_id: this.post_id
                    }).then(function(i) {
                        t.post_content = i.data;
                    });
                }
            }), o);
            i.default = p;
        }).call(this, e("543d").default);
    },
    "903e": function(t, i, e) {
        var o = e("255f");
        e.n(o).a;
    },
    "968d": function(t, i, e) {
        e.d(i, "b", function() {
            return n;
        }), e.d(i, "c", function() {
            return s;
        }), e.d(i, "a", function() {
            return o;
        });
        var o = {
            uniIcons: function() {
                return Promise.all([ e.e("common/vendor"), e.e("uni_modules/uni-icons/components/uni-icons/uni-icons") ]).then(e.bind(null, "de46"));
            },
            mpHtml: function() {
                return Promise.all([ e.e("common/vendor"), e.e("components/mp-html/mp-html") ]).then(e.bind(null, "8b8c"));
            },
            imageLoader: function() {
                return e.e("components/image-loader/image-loader").then(e.bind(null, "afcc"));
            }
        }, n = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
    },
    aacb: function(t, i, e) {
        e.r(i);
        var o = e("968d"), n = e("5f34");
        for (var s in n) "default" !== s && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(s);
        e("903e");
        var a = e("f0c5"), c = Object(a.a)(n.default, o.b, o.c, !1, null, "70409867", null, !1, o.a, void 0);
        i.default = c.exports;
    }
}, [ [ "7392", "common/runtime", "common/vendor" ] ] ]);