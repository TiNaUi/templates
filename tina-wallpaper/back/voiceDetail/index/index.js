var app = getApp();

var apiList = require("../../../../utils/api.js");

var login = require("../../../../utils/login.js");

var adVideoUtils = require("../../../../utils/adVideoUtils.js");

Page({
    onShareAppMessage: function onShareAppMessage(shareOption) {
        var code = this.data.code;
        var search_code = app.getCache("search_code") || "";
        var shareUrl = "pages/tabindex/voiceDetail/index/index?homepage_id=" + this.data.homepage_id + "&id=" + this.data.id + "&code=" + code + "&search_code=" + search_code;
        var path = "pages/index/index?path=" + encodeURIComponent(shareUrl);
        var stime = shareOption.channel == "video" ? "video" + app.getCurrentTime() : app.getCurrentTime();
        path = path + "&stime=" + stime;
        return app.share(shareOption, 0, path, stime);
    },
    data: {
        id: 1,
        indexImg: "",
        // 图片
        type: 0,
        // 图片类型
        imageSrc: "",
        // 缓存照片
        videoSrc: "",
        // 缓存视频
        // imageVideo
        file_type: "",
        saveFile_type: "",
        // 下载类型
        video_url: "",
        advTimes: 3,
        list: [],
        page: 1,
        // 页码
        hasMore: true,
        pageSize: 20,
        selectClassifyId: 0,
        // 分类id
        listIndex: -1
    },
    onLoad: function onLoad(options) {
        var _this = this;
        this.setData({
            id: options.id,
            homepage_id: options.homepage_id,
            selectClassifyId: 3,
            code: options.code == undefined ? "" : options.code
        });
        wx.setNavigationBarTitle({
            title: "表情包(" + this.data.code + ")"
        });
        app.showLoading("加载中");
        login.getUserOpenId(app).then(function(res) {
            _this.init();
            app.uv(_this.data.id);
        }).catch(function(error) {
            if (error.errNo == 21100) {
                _this.setData({
                    imageLoaded: true
                });
                commonUtils.showModal("温馨提示", "请先登录账号才可体验小程序", false);
            }
        });
    },
    // 监听是否加载到底部
    onReachBottom: function onReachBottom() {
        if (this.data.hasMore) {
            this.getList();
        }
    },
    init: function init() {
        var _this2 = this;
        var info = app.getCache("image-info") || "";
        if (info) {
            this.setData({
                info: info,
                indexImg: info.url,
                file_type: info.file_type,
                video_url: info.video_url
            });
            app.removeCache("image-info");
            this.getList();
            return false;
        }
        var param = {
            id: this.data.id,
            version: apiList.version,
            appid: apiList.appId,
            openid: app.getUserOpenId(),
            timestamp: app.getCurrentTime()
        };
        apiList.post(apiList.photoDetail, param, app.getToken()).then(function(ret) {
            console.log("info", ret);
            _this2.setData({
                indexImg: ret.url,
                file_type: ret.file_type,
                video_url: ret.video_url
            });
            var share = ret.share;
            app.globalData.notAdvPlayFinish = ret.notAdvPlayFinish == undefined ? false : ret.notAdvPlayFinish;
            var uv_type = ret.uv_type == undefined ? app.globalData.uv_type : ret.uv_type;
            app.globalData.uv_type = uv_type;
            if (share) {
                app.globalData.share = share;
            }
            _this2.getList();
        });
    },
    imageLoad: function imageLoad(e) {
        this.setData({
            imageLoaded: true
        });
    },
    imageError: function imageError(e) {
        this.setData({
            imageLoaded: true
        });
        app.showInfo("图片加载失败");
    },
    // 图片保存选择
    saveChange: function saveChange(e) {
        if (!app.globalData.isLogin) {
            app.getOpenId();
            return false;
        }
        var index = e.currentTarget.dataset.index;
        this.setData({
            type: index
        });
        this.checkAlbumAuth();
    },
    checkAlbumAuth: function checkAlbumAuth() {
        var _this3 = this;
        wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function success(res) {
                if (app.globalData.downSuccessStatus == false) {
                    _this3.saveImage();
                } else {
                    _this3.checkAdv();
                }
            },
            fail: function fail(err) {
                console.log("authorize fail", err);
                wx.showModal({
                    title: "温馨提示",
                    content: "保存图片需要相册权限,请授权相册权限",
                    showCancel: false,
                    confirmText: "前往授权",
                    success: function success(res) {
                        if (res.confirm) {
                            wx.openSetting({
                                success: function success(authSetting) {
                                    var json = authSetting.authSetting;
                                    if (json != undefined && json["scope.writePhotosAlbum"]) {} else {
                                        console.log(authSetting);
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });
        this.close();
    },
    close: function close() {
        this.setData({
            isSave: false
        });
    },
    goTop: function goTop() {
        wx.pageScrollTo({
            scrollTop: 0
        });
    },
    // 保存图片
    saveImage: function saveImage() {
        var _this4 = this;
        if (this.data.saveFile_type == 0) {
            if (this.data.videoSrc) {
                this.saveImageToPhotosAlbum(this.data.videoSrc);
            } else {
                setTimeout(function() {
                    app.showLoading("下载中");
                    _this4.downloadFile();
                }, 600);
            }
        } else {
            if (this.data.imageSrc) {
                console.log("图片缓存下载");
                this.saveImageToPhotosAlbum(this.data.imageSrc);
            } else {
                console.log("图片下载中");
                setTimeout(function() {
                    app.showLoading("下载中");
                    _this4.downloadFile();
                }, 600);
            }
        }
    },
    downloadFile: function downloadFile() {
        var _this5 = this;
        var that = this;
        // type = 0超清 1普通
                var src = this.data.saveFile_type == 0 ? this.data.video_url : that.data.indexImg;
        wx.downloadFile({
            url: src,
            success: function success(res) {
                var filePath = res.tempFilePath;
                console.log("filePath", filePath);
                if (_this5.data.saveFile_type == 0) {
                    that.setData({
                        videoSrc: filePath
                    });
                } else {
                    that.setData({
                        imageSrc: filePath
                    });
                }
                _this5.saveImageToPhotosAlbum(filePath);
            },
            fail: function fail(err) {
                app.globalData.downSuccessStatus = false;
                wx.hideLoading();
                wx.showModal({
                    title: "下载出错",
                    content: err.errMsg,
                    showCancel: false
                });
            }
        });
    },
    // 下载图片
    saveImageToPhotosAlbum: function saveImageToPhotosAlbum(filePath) {
        var _this6 = this;
        var that = this;
        if (that.data.saveFile_type == 0) {
            console.log("下载视频");
            wx.saveVideoToPhotosAlbum({
                filePath: filePath,
                // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
                success: function success(res) {
                    wx.hideLoading();
                    wx.showModal({
                        title: "保存成功",
                        content: "请到相册中查看",
                        showCancel: false
                    });
                    app.globalData.downSuccessStatus = true;
                    _this6.setDownCache();
                },
                fail: function fail(err) {
                    wx.hideLoading();
                    var errType = err.errMsg.includes("saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";
                    if (errType != "取消保存") {
                        app.globalData.downSuccessStatus = false;
                    }
                    wx.showModal({
                        title: errType,
                        content: err.errMsg,
                        showCancel: false
                    });
                }
            });
        } else {
            console.log("下载图片");
            wx.saveImageToPhotosAlbum({
                filePath: filePath,
                // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
                success: function success(res) {
                    wx.hideLoading();
                    wx.showModal({
                        title: "保存成功",
                        content: "请到相册中查看",
                        showCancel: false
                    });
                    app.globalData.downSuccessStatus = true;
                    _this6.setDownCache();
                },
                fail: function fail(err) {
                    wx.hideLoading();
                    var errType = err.errMsg.includes("saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";
                    if (errType != "取消保存") {
                        app.globalData.downSuccessStatus = false;
                    }
                    wx.showModal({
                        title: errType,
                        content: err.errMsg,
                        showCancel: false
                    });
                }
            });
        }
    },
    // 上一张
    preChange: function preChange() {
        var listIndex = this.data.listIndex;
        var list = this.data.list;
        if (listIndex == 0) {
            listIndex = list.length - 1;
        } else {
            listIndex--;
        }
        if (listIndex < 0) {
            return false;
        }
        this.setData({
            indexImg: list[listIndex].url,
            video_url: list[listIndex].video_url,
            listIndex: listIndex,
            id: list[listIndex].id,
            file_type: list[listIndex].file_type,
            imageSrc: "",
            videoSrc: ""
        });
    },
    // 下一张
    nextChange: function nextChange() {
        var listIndex = this.data.listIndex;
        var list = this.data.list;
        if (listIndex == list.length - 1) {
            listIndex = 0;
        } else {
            listIndex++;
        }
        this.setData({
            indexImg: list[listIndex].url,
            video_url: list[listIndex].video_url,
            listIndex: listIndex,
            id: list[listIndex].id,
            file_type: list[listIndex].file_type,
            imageSrc: "",
            videoSrc: ""
        });
    },
    // 推荐选择
    selectChange: function selectChange(e) {
        var index = e.currentTarget.dataset.index;
        var listIndex = index;
        var list = this.data.list;
        this.setData({
            indexImg: list[listIndex].url,
            video_url: list[listIndex].video_url,
            listIndex: listIndex,
            id: list[listIndex].id,
            file_type: list[listIndex].file_type,
            imageSrc: "",
            videoSrc: ""
        });
    },
    // 
    saveBtnChange: function saveBtnChange(e) {
        var index = e.currentTarget.dataset.index;
        // 0视频 1表情包
                this.setData({
            isSave: true,
            saveFile_type: index
        });
    },
    // 跳转语音表情包详情页
    goPage: function goPage() {
        if (this.data.video_url) {
            var url = this.data.video_url;
            var poster = this.data.indexImg;
            wx.navigateTo({
                url: "/pages/tabindex/voiceDetail/detail/index?id=" + this.data.id + "&url=" + encodeURI(url) + "&poster=" + poster
            });
        }
    },
    getList: function getList() {
        var _this7 = this;
        var param = {
            homepage_id: this.data.homepage_id,
            classify_id: this.data.selectClassifyId,
            album_id: 0,
            page: this.data.page,
            limit: this.data.pageSize,
            version: apiList.version,
            appid: apiList.appId,
            openid: app.getUserOpenId(),
            timestamp: app.getCurrentTime()
        };
        apiList.post(apiList.getRecommendList, param, app.getToken()).then(function(ret) {
            var length = ret.photoList.length;
            if (length) {
                var page = _this7.data.page + 1;
                var list = _this7.data.list.concat(ret.photoList);
                _this7.setData({
                    page: page,
                    list: list,
                    empty: false
                });
            }
            if (length < _this7.data.pageSize) {
                _this7.setData({
                    hasMore: false
                });
                if (_this7.data.list.length <= 0) {
                    _this7.setData({
                        empty: true
                    });
                }
            }
        });
    },
    setDownCache: function setDownCache() {
        var downloadHistory = app.getCache("downloadHistory") || [];
        for (var i = 0; i < downloadHistory.length; i++) {
            if (this.data.indexImg == downloadHistory[i].url) {
                downloadHistory.splice(i, 1);
                break;
            }
        }
        if (downloadHistory.length > 99) {
            downloadHistory.splice(downloadHistory.length - 1, 1);
        }
        var item = {
            url: this.data.indexImg,
            id: this.data.id,
            file_type: this.data.file_type,
            video_url: this.data.video_url,
            search_code: this.data.code != undefined ? this.data.code : ""
        };
        downloadHistory.splice(0, 0, item);
        app.setCache("downloadHistory", downloadHistory);
    },
    goToMini: function goToMini() {
        wx.navigateToMiniProgram({
            appId: "wx72b9be70038c8e0f",
            path: "pages/tabindex/voiceDetail/index/index?id=" + this.data.id + "&homepage_id=" + this.data.homepage_id,
            success: function success(res) {// 打开成功
            }
        });
    },
    /***广告逻辑开始 */
    checkAdv: function checkAdv() {
        var _this8 = this;
        if (this.data.buttonClicked != undefined && this.data.buttonClicked) {
            app.log("请勿频繁点击");
            return false;
        }
        adVideoUtils.buttonClicked(this);
        if (app.isReachLimitDownTimes()) {
            wx.showModal({
                title: "达到下载上限",
                // 标题
                content: "今日下载次数已经达到上限了,请明日再来",
                showCancel: false
            });
            return false;
        }
        app.isNotLookAdv().then(function(res) {
            if (res) {
                app.log("免看广告");
                _this8.advSuccess();
            } else {
                adVideoUtils.videoAdInit(apiList.advId, _this8);
                //初始化广告
                        }
        }).catch(function(err) {
            _this8.advSuccess();
            console.log("errrr111255", err);
        });
    },
    /**
  * 广告点击关闭逻辑
  */
    adVideoClose: function adVideoClose(status) {
        var _this9 = this;
        if (this.data.orderSubmited != undefined && this.data.orderSubmited) {
            app.log("订单请勿重复上传");
            return false;
        }
        adVideoUtils.orderSubmited(this);
        adVideoUtils.setAdvOrder(this.data.id, status).then(function(res) {
            if (res) {
                app.log("订单上传成功");
                if (status) {
                    _this9.advSuccess();
                }
            } else {
                if (status) {
                    _this9.advSuccess();
                }
                app.log("订单上传失败");
            }
        });
    },
    /**
  * 广告播放完并处理成功订单后的逻辑
  */
    advSuccess: function advSuccess() {
        if (this.data.submitButtonClicked != undefined && this.data.submitButtonClicked) {
            app.log("请勿重复提交");
            return false;
        }
        adVideoUtils.submitButtonClicked(this);
        this.saveImage();
    },
    /**
  * 广告组件出错
  */
    setAdvError: function setAdvError(err) {
        var _this10 = this;
        adVideoUtils.setAdvError(this.data.id, err).then(function(res) {
            if (res) {
                app.log("广告出错信息上传成功");
            } else {
                app.log("广告出错信息上传失败");
            }
            _this10.advSuccess();
        });
    },
    /***广告逻辑结束 */
    onUnload: function onUnload() {
        adVideoUtils.advDestroy();
    }
});