(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/mp-html/audio/audio" ], {
    "22c6": function(t, n, i) {
        var a = i("aa22");
        i.n(a).a;
    },
    a030: function(t, n, i) {
        i.d(n, "b", function() {
            return a;
        }), i.d(n, "c", function() {
            return e;
        }), i.d(n, "a", function() {});
        var a = function() {
            this.$createElement;
            this._self._c;
        }, e = [];
    },
    a3e4: function(t, n, i) {
        i.r(n);
        var a = i("aa6e"), e = i.n(a);
        for (var o in a) "default" !== o && function(t) {
            i.d(n, t, function() {
                return a[t];
            });
        }(o);
        n.default = e.a;
    },
    aa22: function(t, n, i) {},
    aa6e: function(t, n, i) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = i("c084"), e = {
                data: function() {
                    return {
                        error: !1,
                        playing: !1,
                        time: "00:00",
                        value: 0
                    };
                },
                props: {
                    aid: String,
                    name: String,
                    author: String,
                    poster: String,
                    autoplay: [ Boolean, String ],
                    controls: [ Boolean, String ],
                    loop: [ Boolean, String ],
                    src: String
                },
                watch: {
                    src: function(t) {
                        this.setSrc(t);
                    }
                },
                mounted: function() {
                    var n = this;
                    this._ctx = t.createInnerAudioContext(), this._ctx.onError(function(t) {
                        n.error = !0, n.$emit("error", t);
                    }), this._ctx.onTimeUpdate(function() {
                        var t = n._ctx.currentTime, i = parseInt(t / 60), a = Math.ceil(t % 60);
                        n.time = (i > 9 ? i : "0" + i) + ":" + (a > 9 ? a : "0" + a), n.lastTime || (n.value = t / n._ctx.duration * 100);
                    }), this._ctx.onEnded(function() {
                        n.loop || (n.playing = !1);
                    }), a.set(this.aid, this), this.setSrc(this.src);
                },
                beforeDestroy: function() {
                    this._ctx.destroy(), a.remove(this.aid);
                },
                onPageShow: function() {
                    this.playing && this._ctx.paused && this._ctx.play();
                },
                methods: {
                    setSrc: function(t) {
                        this._ctx.autoplay = this.autoplay, this._ctx.loop = this.loop, this._ctx.src = t, 
                        this.autoplay && !this.playing && (this.playing = !0);
                    },
                    play: function() {
                        this._ctx.play(), this.playing = !0, this.$emit("play", {
                            target: {
                                id: this.aid
                            }
                        });
                    },
                    pause: function() {
                        this._ctx.pause(), this.playing = !1, this.$emit("pause");
                    },
                    seek: function(t) {
                        this._ctx.seek(t);
                    },
                    _buttonTap: function() {
                        this.playing ? this.pause() : this.play();
                    },
                    _seeking: function(t) {
                        if (!(t.timeStamp - this.lastTime < 200)) {
                            var n = Math.round(t.detail.value / 100 * this._ctx.duration), i = parseInt(n / 60), a = n % 60;
                            this.time = (i > 9 ? i : "0" + i) + ":" + (a > 9 ? a : "0" + a), this.lastTime = t.timeStamp;
                        }
                    },
                    _seeked: function(t) {
                        this.seek(t.detail.value / 100 * this._ctx.duration), this.lastTime = void 0;
                    }
                }
            };
            n.default = e;
        }).call(this, i("543d").default);
    },
    fd97: function(t, n, i) {
        i.r(n);
        var a = i("a030"), e = i("a3e4");
        for (var o in e) "default" !== o && function(t) {
            i.d(n, t, function() {
                return e[t];
            });
        }(o);
        i("22c6");
        var s = i("f0c5"), c = Object(s.a)(e.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/mp-html/audio/audio-create-component", {
    "components/mp-html/audio/audio-create-component": function(t, n, i) {
        i("543d").createComponent(i("fd97"));
    }
}, [ [ "components/mp-html/audio/audio-create-component" ] ] ]);