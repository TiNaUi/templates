(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/viewhtml/viewhtml" ], {
    3686: function(t, e, n) {
        var i = n("8e75");
        n.n(i).a;
    },
    "43a6": function(t, e, n) {
        n.r(e);
        var i = n("6581"), a = n("e389");
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("3686");
        var o = n("f0c5"), u = Object(o.a)(a.default, i.b, i.c, !1, null, "42244b47", null, !1, i.a, void 0);
        e.default = u.exports;
    },
    6581: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            mpHtml: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/mp-html/mp-html") ]).then(n.bind(null, "8b8c"));
            }
        }, a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
    },
    "7c10": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n("9692"), a = n("1f64"), r = n("134c"), o = n("5f10"), u = n("e4b5"), c = {
                data: function() {
                    return {
                        jqTheme: "",
                        article: "",
                        page_id: "",
                        title: ""
                    };
                },
                onLoad: function(e) {
                    u.setPage(this), i.scoreShare(e.source), this.page_id = e.page_id, t.$on("linktap", this.onMPHtmlLink);
                },
                onUnload: function() {
                    t.$off("linktap", this.onMPHtmlLink);
                },
                onShow: function() {
                    var e = this;
                    o.get(r.JIANGQIE_POST_PAGE, {
                        page_id: this.page_id
                    }).then(function(n) {
                        e.page_id = e.page_id, e.title = n.data.title, t.setNavigationBarTitle({
                            title: n.data.title
                        }), e.article = n.data.content;
                    });
                },
                onShareAppMessage: function() {
                    var t = "pages/viewhtml/viewhtml?page_id=" + this.page_id, e = a.getUser();
                    return e && (t = t + "&source=" + e.user_id), {
                        title: this.title,
                        path: t
                    };
                },
                onShareTimeline: function() {
                    var t = a.getUser();
                    return {
                        title: this.title,
                        query: "page_id=" + this.page_id + (t ? "&source=" + t.user_id : "")
                    };
                },
                methods: {
                    onMPHtmlLink: function(t) {
                        var e = t["data-link"];
                        if (e.startsWith("https://pan.baidu.com")) return this.net_disk_link = e, void this.adJiliClick();
                        e && i.openLink(t["data-link"]);
                    },
                    wxParseTagATap: function(t) {
                        var e = t.currentTarget.dataset.link;
                        if (e) i.openLink(e); else {
                            var n = t.currentTarget.dataset.src;
                            i.openASrc(n);
                        }
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "8e75": function(t, e, n) {},
    c1a0: function(t, e, n) {
        (function(t) {
            n("060e"), i(n("66fd"));
            var e = i(n("43a6"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    e389: function(t, e, n) {
        n.r(e);
        var i = n("7c10"), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = a.a;
    }
}, [ [ "c1a0", "common/runtime", "common/vendor" ] ] ]);