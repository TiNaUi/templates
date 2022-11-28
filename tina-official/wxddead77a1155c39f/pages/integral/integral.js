(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/integral/integral" ], {
    "195f": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = e("5a7a"), o = e("9692"), a = e("1f64"), d = e("134c"), l = e("5f10"), s = e("e4b5"), c = {
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
                        my_score: "",
                        setting: {
                            title: "",
                            description: "",
                            background: ""
                        },
                        task_daily: [],
                        task_once: [],
                        currentTab: "task",
                        bills: [],
                        loadding: !1,
                        pullUpOn: !0,
                        loaded: !1,
                        videoAd: null,
                        task_jili: "",
                        jia_post_id: "",
                        jili_nonce: ""
                    };
                },
                onLoad: function(t) {
                    this.onLoadClone3389(t);
                },
                onShow: function() {},
                onShareAppMessage: function() {
                    var t = "pages/index/index", n = a.getUser();
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
                onPullDownRefresh: function() {
                    this.my_score = "", this.setting = {}, this.task_daily = [], this.task_once = [], 
                    this.currentTab = "task", this.bills = [], this.loadding = !1, this.pullUpOn = !0, 
                    this.loaded = !1, this.loadSetting();
                },
                onReachBottom: function() {
                    "task" != this.currentTab && this.pullUpOn && this.loadBills(!1);
                },
                methods: {
                    onLoadClone3389: function(n) {
                        a.getUser() ? (s.setPage(this), o.scoreShare(n.source), this.loadSetting(), n.tab && "record" == n.tab && (this.currentTab = "record", 
                        this.loadBills(!0))) : t.reLaunch({
                            url: "/pages/index/index"
                        });
                    },
                    swichNav: function(t) {
                        var n = t.currentTarget.dataset.tab;
                        this.currentTab = n, 0 != this.bills.length || this.loaded || this.loadBills(!0);
                    },
                    taskClickAction: function(t) {
                        var n = this, e = t.currentTarget.dataset.tid;
                        "certify" == e ? o.openLink("/pages/certification/certification") : "jili" == e && this.videoAd && this.videoAd.show().catch(function() {
                            n.videoAd.load().then(function() {
                                return n.videoAd.show();
                            }).catch(function(t) {
                                console.log("激励视频 广告显示失败");
                            });
                        });
                    },
                    loadSetting: function() {
                        var t = this;
                        l.get(d.JIANGQIE_SETTING_SCORE).then(function(n) {
                            t.setting = n.data, t.task_daily = n.data.task_daily, t.task_once = n.data.task_once, 
                            t.my_score = n.data.my_score, t.task_jili = n.data.task_jili, t.jia_post_id = n.data.jia_post_id, 
                            t.jili_nonce = n.data.jili_nonce, t.loadJiLi();
                        });
                    },
                    loadBills: function(t) {
                        var n = this;
                        this.loadding || (this.loadding = !0, l.get(d.JIANGQIE_SCORE_BILLS, {
                            offset: t ? 0 : this.bills.length
                        }).then(function(e) {
                            n.loadding = !1, n.loaded = !0, n.bills = t ? e.data : n.bills.concat(e.data), n.pullUpOn = e.data.length >= i.JQ_PER_PAGE_COUNT;
                        }));
                    },
                    loadJiLi: function() {
                        var n = this;
                        this.videoAd || this.task_jili && t.createRewardedVideoAd && (this.videoAd = t.createRewardedVideoAd({
                            adUnitId: this.task_jili
                        }), this.videoAd.onLoad(function() {}), this.videoAd.onError(function(t) {}), this.videoAd.onClose(function(t) {
                            t && t.isEnded && l.get(d.JIANGQIE_SCORE_ADD, {
                                action: "jili",
                                post_id: n.jia_post_id,
                                nonce: n.jili_nonce,
                                slient: !0
                            }).then(function(t) {
                                console.log(t);
                            }, function(t) {
                                console.log(t);
                            });
                        }));
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    },
    "337a": function(t, n, e) {
        e.r(n);
        var i = e("35f8"), o = e("44ec");
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        e("d5e8");
        var d = e("f0c5"), l = Object(d.a)(o.default, i.b, i.c, !1, null, "3a53e072", null, !1, i.a, void 0);
        n.default = l.exports;
    },
    "35f8": function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
    },
    "44ec": function(t, n, e) {
        e.r(n);
        var i = e("195f"), o = e.n(i);
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = o.a;
    },
    "63d4": function(t, n, e) {},
    a348: function(t, n, e) {
        (function(t) {
            e("060e"), i(e("66fd"));
            var n = i(e("337a"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    d5e8: function(t, n, e) {
        var i = e("63d4");
        e.n(i).a;
    }
}, [ [ "a348", "common/runtime", "common/vendor" ] ] ]);