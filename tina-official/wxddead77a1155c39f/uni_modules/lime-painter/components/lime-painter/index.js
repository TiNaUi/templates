(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/lime-painter/components/lime-painter/index" ], {
    "4c1d": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("a34a")), a = n("0ad4"), i = n("6d55"), s = n("9f0d"), u = n("b495");
            function o(e, t, n, r, a, i, s) {
                try {
                    var u = e[i](s), o = u.value;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return void n(e);
                }
                u.done ? t(o) : Promise.resolve(o).then(r, a);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = e.apply(t, n);
                        function s(e) {
                            o(i, r, a, s, u, "next", e);
                        }
                        function u(e) {
                            o(i, r, a, s, u, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var d = {
                name: "l-painter",
                props: {
                    board: Object,
                    pathType: {
                        type: String
                    },
                    fileType: {
                        type: String,
                        default: "png"
                    },
                    quality: {
                        type: Number,
                        default: 1
                    },
                    width: [ Number, String ],
                    height: [ Number, String ],
                    pixelRatio: Number,
                    customStyle: String,
                    isRenderImage: Boolean,
                    isH5PathToBase64: Boolean,
                    sleep: {
                        type: Number,
                        default: 1e3 / 60
                    },
                    beforeDelay: {
                        type: Number,
                        default: 1e3 / 60
                    },
                    afterDelay: Number,
                    type: {
                        type: String,
                        default: "2d"
                    }
                },
                data: function() {
                    return {
                        use2dCanvas: !0,
                        draw: null,
                        ctx: null,
                        canvasHeight: 0,
                        canvasWidth: 0,
                        layout: new s.Layout(),
                        isDrawIng: !1,
                        isPC: !1
                    };
                },
                computed: {
                    canvasId: function() {
                        return "l-painter".concat(this._uid);
                    },
                    size: function() {
                        return "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px;");
                    },
                    dpr: function() {
                        return this.pixelRatio || e.getSystemInfoSync().pixelRatio;
                    },
                    boardWidth: function() {
                        var e = (this.board || {}).width;
                        return (0, a.toPx)(this.width || e);
                    },
                    boardHeight: function() {
                        var e = (this.board || {}).height, t = this.height, n = this.canvasHeight;
                        return /^auto$/.test(t || e) ? n || 1 : (0, a.toPx)(t || e);
                    }
                },
                watch: {
                    size: function() {
                        this.use2dCanvas && (this.inited = !1);
                    }
                },
                created: function() {
                    var t = e.getSystemInfoSync(), n = t.SDKVersion, r = t.version, i = t.platform, s = t.environment;
                    this.isPC = /windows/i.test(i), this.use2dCanvas = "2d" === this.type && (0, a.compareVersion)(n, "2.9.2") >= 0 && !(/ios/i.test(i) && /7.0.20/.test(r) || /wxwork/i.test(s)) && !this.isPC;
                },
                mounted: function() {
                    var e = this;
                    this.$watch("board", function() {
                        var t = c(r.default.mark(function t(n, i) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ("{}" !== JSON.stringify(n) && n) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    if (!e.beforeDelay) {
                                        t.next = 5;
                                        break;
                                    }
                                    return t.next = 5, (0, a.sleep)(e.beforeDelay);

                                  case 5:
                                    e.render();

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments);
                        };
                    }(), {
                        deep: !0,
                        immediate: !0
                    });
                },
                methods: {
                    update: function(e, t) {
                        var n = this;
                        return c(r.default.mark(function i() {
                            return r.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    return n.draw = null, n.use2dCanvas && (n.ctx = null, n.inited = !1), n.isDrawIng = !1, 
                                    r.next = 5, new Promise(function(e) {
                                        return n.$nextTick(e);
                                    });

                                  case 5:
                                    return r.next = 7, (0, a.sleep)(200);

                                  case 7:
                                    return r.abrupt("return", n.render(e, t));

                                  case 8:
                                  case "end":
                                    return r.stop();
                                }
                            }, i);
                        }))();
                    },
                    render: function() {
                        var e = arguments, t = this;
                        return c(r.default.mark(function n() {
                            var s, u, o, d, f, l, p, h, v, m, b, x, g, w;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (s = e.length > 0 && void 0 !== e[0] ? e[0] : {}, u = e.length > 1 && void 0 !== e[1] && e[1], 
                                    !t.isDrawIng) {
                                        n.next = 4;
                                        break;
                                    }
                                    return n.abrupt("return", t.update(s, u));

                                  case 4:
                                    return t.isDrawIng = !0, o = "{}" != JSON.stringify(s), n.next = 8, t.getContext();

                                  case 8:
                                    if (d = n.sent, f = t.use2dCanvas, l = t.boardWidth, p = t.boardHeight, h = t.board, 
                                    v = t.canvas, m = t.isH5PathToBase64, b = t.sleep, x = t.afterDelay, !f || v) {
                                        n.next = 12;
                                        break;
                                    }
                                    return n.abrupt("return", Promise.reject(new Error("render: fail canvas has not been created")));

                                  case 12:
                                    if (t.boundary = {
                                        top: 0,
                                        left: 0,
                                        width: l,
                                        height: p
                                    }, u || d.clearRect(0, 0, l, p), t.draw && !o || (t.draw = new i.Draw(d, v, f, m, b), 
                                    t.draw.listen("progressChange", function(e) {
                                        t.$emit("progress", e);
                                    })), t.layout.init(d, t.boundary, m), !(o || h && "{}" != JSON.stringify(h))) {
                                        n.next = 20;
                                        break;
                                    }
                                    return n.next = 19, t.layout.calcNode(o ? s : Object.assign({}, h, {
                                        height: h.type || "auto" != h.height ? h.height : p
                                    }));

                                  case 19:
                                    t.node = n.sent;

                                  case 20:
                                    if (g = t.layout.layoutHeight, !/auto/.test(t.height || h.height) || t.canvasHeight) {
                                        n.next = 24;
                                        break;
                                    }
                                    return t.canvasHeight = g, n.abrupt("return", t.update(s, u));

                                  case 24:
                                    if (!t.node) {
                                        n.next = 27;
                                        break;
                                    }
                                    return n.next = 27, null === (w = t.draw) || void 0 === w ? void 0 : w.drawNode(t.node);

                                  case 27:
                                    return n.next = 29, new Promise(function(e) {
                                        return t.$nextTick(e);
                                    });

                                  case 29:
                                    if (f || u) {
                                        n.next = 32;
                                        break;
                                    }
                                    return n.next = 32, t.canvasDraw(d);

                                  case 32:
                                    if (!x) {
                                        n.next = 35;
                                        break;
                                    }
                                    return n.next = 35, (0, a.sleep)(x);

                                  case 35:
                                    return t.$emit("done"), t.isRenderImage && !u && t.isDrawIng && t.canvasToTempFilePath().then(function() {
                                        var e = c(r.default.mark(function e(n) {
                                            var i, s;
                                            return r.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    if ("base64" != t.pathType) {
                                                        e.next = 11;
                                                        break;
                                                    }
                                                    if (!/^data:image\/(\w+);base64/.test(n.tempFilePath)) {
                                                        e.next = 5;
                                                        break;
                                                    }
                                                    t.$emit("success", n.tempFilePath), e.next = 9;
                                                    break;

                                                  case 5:
                                                    return e.next = 7, (0, a.pathToBase64)(n.tempFilePath);

                                                  case 7:
                                                    i = e.sent, t.$emit("success", i);

                                                  case 9:
                                                    e.next = 21;
                                                    break;

                                                  case 11:
                                                    if ("url" != t.pathType) {
                                                        e.next = 20;
                                                        break;
                                                    }
                                                    if (s = "", !/^data:image\/(\w+);base64/.test(n.tempFilePath)) {
                                                        e.next = 17;
                                                        break;
                                                    }
                                                    return e.next = 16, (0, a.base64ToPath)(n.tempFilePath);

                                                  case 16:
                                                    s = e.sent;

                                                  case 17:
                                                    t.$emit("success", s), e.next = 21;
                                                    break;

                                                  case 20:
                                                    t.$emit("success", n.tempFilePath);

                                                  case 21:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }()).catch(function(e) {
                                        t.$emit("fail", new Error(JSON.stringify(e)));
                                    }), t.isDrawIng = !1, n.abrupt("return", Promise.resolve({
                                        ctx: d,
                                        draw: t.draw,
                                        node: t.node
                                    }));

                                  case 39:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    custom: function(e) {
                        var t = this;
                        return c(r.default.mark(function n() {
                            var a, i, s;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.render({}, !0);

                                  case 2:
                                    return a = n.sent, i = a.ctx, s = a.draw, i.save(), n.next = 8, e(i, s);

                                  case 8:
                                    return i.restore(), n.abrupt("return", Promise.resolve(!0));

                                  case 10:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    single: function() {
                        var e = arguments, t = this;
                        return c(r.default.mark(function n() {
                            var a, i;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return a = e.length > 0 && void 0 !== e[0] ? e[0] : {}, n.next = 3, t.render(a, !0);

                                  case 3:
                                    return i = n.sent, n.abrupt("return", Promise.resolve(i));

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    canvasDraw: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.ctx;
                        return new Promise(function(n) {
                            t.draw(e, n);
                        });
                    },
                    getContext: function() {
                        var t = this;
                        return c(r.default.mark(function n() {
                            var a, i, s, o, c, d;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (!t.ctx || !t.inited) {
                                        n.next = 2;
                                        break;
                                    }
                                    return n.abrupt("return", Promise.resolve(t.ctx));

                                  case 2:
                                    if (a = t.type, i = t.use2dCanvas, s = t.dpr, o = t.boardWidth, c = t.boardHeight, 
                                    d = function() {
                                        return new Promise(function(n) {
                                            e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).boundingClientRect().exec(function(r) {
                                                if (r) {
                                                    var a = e.createCanvasContext(t.canvasId, t);
                                                    t.inited || (t.inited = !0, t.use2dCanvas = !1, t.canvas = r), t.isPC && a.scale(1 / s, 1 / s), 
                                                    t.ctx = (0, u.expand)(a), n(t.ctx);
                                                }
                                            });
                                        });
                                    }, i) {
                                        n.next = 6;
                                        break;
                                    }
                                    return n.abrupt("return", d());

                                  case 6:
                                    return n.abrupt("return", new Promise(function(n) {
                                        e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).node().exec(function(e) {
                                            var r = e[0].node;
                                            r || (t.use2dCanvas = !1, n(t.getContext()));
                                            var i = r.getContext(a);
                                            t.inited || (t.inited = !0, r.width = o * s, r.height = c * s, t.use2dCanvas = !0, 
                                            t.canvas = r, i.scale(s, s)), t.ctx = u.adaptor ? (0, u.adaptor)(i) : (0, u.expand)(i), 
                                            n(t.ctx);
                                        });
                                    }));

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    canvasToTempFilePath: function() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = this.use2dCanvas, a = this.canvasId, i = this.dpr, s = this.fileType, u = this.quality;
                        return new Promise(function(o, c) {
                            var d = t.boundary || t, f = d.top, l = void 0 === f ? 0 : f, p = d.left, h = void 0 === p ? 0 : p, v = d.width, m = d.height, b = v * i, x = m * i, g = Object.assign({
                                x: h,
                                y: l,
                                width: v,
                                height: m,
                                destWidth: b,
                                destHeight: x,
                                canvasId: a,
                                fileType: s,
                                quality: u,
                                success: o,
                                fail: c
                            }, n);
                            r && (delete g.canvasId, g.canvas = t.canvas), e.canvasToTempFilePath(g, t);
                        });
                    }
                }
            };
            t.default = d;
        }).call(this, n("543d").default);
    },
    "718e": function(e, t, n) {
        n.r(t);
        var r = n("4c1d"), a = n.n(r);
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = a.a;
    },
    8637: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
    },
    "8c96": function(e, t, n) {
        n.r(t);
        var r = n("8637"), a = n("718e");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        var s = n("f0c5"), u = Object(s.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/lime-painter/components/lime-painter/index-create-component", {
    "uni_modules/lime-painter/components/lime-painter/index-create-component": function(e, t, n) {
        n("543d").createComponent(n("8c96"));
    }
}, [ [ "uni_modules/lime-painter/components/lime-painter/index-create-component" ] ] ]);