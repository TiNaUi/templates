(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/search" ], {
    "0e46": function(e, t, a) {},
    4142: function(e, t, a) {
        a.r(t);
        var n = a("6d04"), r = a.n(n);
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = r.a;
    },
    "59af": function(e, t, a) {
        a.r(t);
        var n = a("801a"), r = a("4142");
        for (var o in r) "default" !== o && function(e) {
            a.d(t, e, function() {
                return r[e];
            });
        }(o);
        a("e02b");
        var c = a("f0c5"), i = Object(c.a)(r.default, n.b, n.c, !1, null, "01e5e6f2", null, !1, n.a, void 0);
        t.default = i.exports;
    },
    "6d04": function(e, t, a) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a("5a7a"), r = a("9692"), o = a("1f64"), c = a("134c"), i = a("5f10"), s = a("e4b5"), u = {
                data: function() {
                    return {
                        jqTheme: "",
                        canSearch: !1,
                        historySearch: [],
                        hotSearch: [],
                        placeholder: "",
                        keyword: ""
                    };
                },
                onLoad: function(t) {
                    var a = this;
                    s.setPage(this), r.scoreShare(t.source), e.getStorage({
                        key: n.JQ_SEARCH_KEY,
                        success: function(e) {
                            a.historySearch = e.data;
                        }
                    }), this.placeholder = getApp().globalData.appName, i.get(c.JIANGQIE_POSTS_SEARCH_HOT).then(function(e) {
                        a.hotSearch = e.data;
                    });
                },
                onShow: function() {},
                onShareAppMessage: function() {
                    var e = "pages/index/index", t = o.getUser();
                    return t && (e = e + "?source=" + t.user_id), {
                        title: getApp().globalData.appName,
                        path: e
                    };
                },
                onShareTimeline: function() {
                    var e = o.getUser();
                    return {
                        title: getApp().globalData.appName,
                        query: e ? "source=" + e.user_id : ""
                    };
                },
                methods: {
                    handlerSearchInput: function(e) {
                        this.keyword = e.detail.value, this.canSearch = this.keyword.length > 0;
                    },
                    handerSearchConfirm: function(e) {
                        this.search();
                    },
                    handerSearchClick: function(e) {
                        this.search();
                    },
                    search: function() {
                        var t = this;
                        e.getStorage({
                            key: n.JQ_SEARCH_KEY,
                            success: function(a) {
                                for (var r = [ t.keyword ], o = 0; o < a.data.length && r.length < n.JQ_SEARCH_MAX_COUNT; o++) t.keyword != a.data[o] && r.push(a.data[o]);
                                t.historySearch = r, e.setStorage({
                                    data: r,
                                    key: n.JQ_SEARCH_KEY
                                });
                            },
                            fail: function(a) {
                                var r = [ t.keyword ];
                                t.historySearch = r, e.setStorage({
                                    data: r,
                                    key: n.JQ_SEARCH_KEY
                                });
                            }
                        }), r.openLink("/pages/list/list?title=" + this.keyword + "&search=" + this.keyword);
                    },
                    handerCancelClick: function(e) {
                        r.navigateBack();
                    },
                    handlerClearHistory: function(t) {
                        e.showModal({
                            title: "提示",
                            content: "确定要清除吗？",
                            success: function(t) {
                                var a = this;
                                t.confirm && e.setStorage({
                                    key: n.JQ_SEARCH_KEY,
                                    data: [],
                                    success: function() {
                                        a.historySearch = [];
                                    }
                                });
                            }
                        });
                    },
                    handlerSearchItemClick: function(e) {
                        this.keyword = e.currentTarget.dataset.item, this.search();
                    },
                    handlerSearchItemDelete: function(t) {
                        var a = this;
                        e.showModal({
                            title: "提示",
                            content: "确定要删除吗？",
                            success: function(r) {
                                if (r.confirm) {
                                    for (var o = t.currentTarget.dataset.item, c = [], i = 0; i < a.historySearch.length; i++) o != a.historySearch[i] && c.push(a.historySearch[i]);
                                    a.historySearch = c, e.setStorage({
                                        data: c,
                                        key: n.JQ_SEARCH_KEY
                                    });
                                }
                            }
                        });
                    }
                }
            };
            t.default = u;
        }).call(this, a("543d").default);
    },
    "801a": function(e, t, a) {
        a.d(t, "b", function() {
            return n;
        }), a.d(t, "c", function() {
            return r;
        }), a.d(t, "a", function() {});
        var n = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    e02b: function(e, t, a) {
        var n = a("0e46");
        a.n(n).a;
    },
    f437: function(e, t, a) {
        (function(e) {
            a("060e"), n(a("66fd"));
            var t = n(a("59af"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "f437", "common/runtime", "common/vendor" ] ] ]);