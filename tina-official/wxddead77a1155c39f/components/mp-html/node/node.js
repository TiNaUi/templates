require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/mp-html/node/node" ], {
    1958: function(t, e, n) {},
    "37e8": function(t, e, n) {
        e.a = function(t) {
            t.options.wxsCallMethods || (t.options.wxsCallMethods = []);
        };
    },
    5099: function(t, e, n) {
        var o = n("1958");
        n.n(o).a;
    },
    a921: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                name: "node",
                options: {
                    virtualHost: !0
                },
                data: function() {
                    return {
                        ctrl: {}
                    };
                },
                props: {
                    name: String,
                    attrs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    childs: Array,
                    opts: Array
                },
                components: {
                    myAudio: function() {
                        n.e("components/mp-html/audio/audio").then(function() {
                            return resolve(n("fd97"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    node: function() {
                        Promise.resolve().then(function() {
                            return resolve(n("e9af"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mounted: function() {
                    for (this.root = this.$parent; "mp-html" !== this.root.$options.name; this.root = this.root.$parent) ;
                },
                beforeDestroy: function() {},
                methods: {
                    toJSON: function() {},
                    play: function(e) {
                        if (this.root.pauseVideo) {
                            for (var n = !1, o = e.target.id, i = this.root._videos.length; i--; ) this.root._videos[i].id === o ? n = !0 : this.root._videos[i].pause();
                            if (!n) {
                                var r = t.createVideoContext(o, this);
                                r.id = o, this.root._videos.push(r);
                            }
                        }
                    },
                    imgTap: function(e) {
                        var n = this.childs[e.currentTarget.dataset.i];
                        n.a ? this.linkTap(n.a) : n.attrs.ignore || (this.root.$emit("imgtap", n.attrs), 
                        this.root.previewImg && t.previewImage({
                            current: parseInt(n.attrs.i),
                            urls: this.root.imgList
                        }));
                    },
                    imgLongTap: function(t) {},
                    imgLoad: function(t) {
                        var e = t.currentTarget.dataset.i;
                        this.childs[e].w ? (this.opts[1] && !this.ctrl[e] || -1 === this.ctrl[e]) && this.$set(this.ctrl, e, 1) : this.$set(this.ctrl, e, t.detail.width);
                    },
                    linkTap: function(e) {
                        var n = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {}, o = n.attrs || e, i = o.href;
                        t.$emit("linktap", Object.assign({
                            innerText: this.root.getText(n.children || [])
                        }, o)), i && ("#" === i[0] ? this.root.navigateTo(i.substring(1)).catch(function() {}) : i.includes("://") ? this.root.copyLink && t.setClipboardData({
                            data: i,
                            success: function() {
                                return t.showToast({
                                    title: "链接已复制"
                                });
                            }
                        }) : t.navigateTo({
                            url: i,
                            fail: function() {
                                t.switchTab({
                                    url: i,
                                    fail: function() {}
                                });
                            }
                        }));
                    },
                    mediaError: function(t) {
                        var e = t.currentTarget.dataset.i, n = this.childs[e];
                        if ("video" === n.name || "audio" === n.name) {
                            var o = (this.ctrl[e] || 0) + 1;
                            if (o > n.src.length && (o = 0), o < n.src.length) return void this.$set(this.ctrl, e, o);
                        } else "img" === n.name && this.opts[2] && this.$set(this.ctrl, e, -1);
                        this.root && this.root.$emit("error", {
                            source: n.name,
                            attrs: n.attrs,
                            errMsg: t.detail.errMsg
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    d3ad: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
    },
    db0e: function(t, e, n) {
        n.r(e);
        var o = n("a921"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    e9af: function(t, e, n) {
        n.r(e);
        var o = n("d3ad"), i = n("db0e");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("5099");
        var a = n("f0c5"), s = n("37e8"), c = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        "function" == typeof s.a && Object(s.a)(c), e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/mp-html/node/node-create-component", {
    "components/mp-html/node/node-create-component": function(t, e, n) {
        n("543d").createComponent(n("e9af"));
    }
}, [ [ "components/mp-html/node/node-create-component" ] ] ]);