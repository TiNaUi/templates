var app = getApp();

var apiList = require("../../../../utils/api.js");

var adVideoUtils = require("../../../../utils/adVideoUtils.js");

Page({
    data: {
        id: 1,
        indexImg: "",
        // 图片
        imageSrc: "",
        // 缓存照片
        file_type: "",
        video_url: "",
        advTimes: 3
    },
    onLoad: function onLoad(options) {
        this.setData({
            id: options.id,
            video_url: decodeURI(options.url),
            poster: decodeURI(options.poster)
        });
    },
    goPage: function goPage(e) {
        wx.navigateBack({});
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
        var _this = this;
        wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function success(res) {
                if (app.globalData.downSuccessStatus == false) {
                    _this.saveImage();
                } else {
                    _this.checkAdv();
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
    },
    // 保存图片
    saveImage: function saveImage() {
        var _this2 = this;
        if (this.data.imageSrc) {
            app.log("缓存下载", this.data.imageSrc);
            this.saveImageToPhotosAlbum(this.data.imageSrc);
        } else {
            app.log("图片下载中");
            setTimeout(function() {
                app.showLoading("下载中");
                _this2.downloadFile();
            }, 600);
        }
    },
    downloadFile: function downloadFile() {
        var _this3 = this;
        var that = this;
        // type = 0超清 1普通
                var src = this.data.video_url;
        wx.downloadFile({
            url: src,
            success: function success(res) {
                var filePath = res.tempFilePath;
                that.setData({
                    imageSrc: filePath
                });
                _this3.saveImageToPhotosAlbum(filePath);
            },
            fail: function fail(err) {
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
        var _this4 = this;
        var that = this;
        wx.saveVideoToPhotosAlbum({
            filePath: filePath,
            // 暂不支持网络图片/本地图片地址，需与wx.downloadFile一起使用
            success: function success(res) {
                console.log("下载成功");
                wx.hideLoading();
                wx.showModal({
                    title: "保存成功",
                    content: "请到相册中查看",
                    showCancel: false
                });
                app.globalData.downSuccessStatus = true;
                _this4.setDownCache();
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
            video_url: this.data.video_url
        };
        downloadHistory.splice(0, 0, item);
        app.setCache("downloadHistory", downloadHistory);
    },
    /***广告逻辑开始 */
    checkAdv: function checkAdv() {
        var _this5 = this;
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
                _this5.advSuccess();
            } else {
                adVideoUtils.videoAdInit(apiList.advId, _this5);
                //初始化广告
                        }
        }).catch(function(err) {
            _this5.advSuccess();
            console.log("errrr", err);
        });
    },
    /**
  * 广告点击关闭逻辑
  */
    adVideoClose: function adVideoClose(status) {
        var _this6 = this;
        if (this.data.orderSubmited != undefined && this.data.orderSubmited) {
            app.log("订单请勿重复上传");
            return false;
        }
        adVideoUtils.orderSubmited(this);
        adVideoUtils.setAdvOrder(this.data.id, status).then(function(res) {
            if (res) {
                app.log("订单上传成功");
                if (status) {
                    _this6.advSuccess();
                }
            } else {
                if (status) {
                    _this6.advSuccess();
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
        var _this7 = this;
        adVideoUtils.setAdvError(this.data.id, err).then(function(res) {
            if (res) {
                app.log("广告出错信息上传成功");
            } else {
                app.log("广告出错信息上传失败");
            }
            _this7.advSuccess();
        });
    },
    /***广告逻辑结束 */
    onUnload: function onUnload() {
        adVideoUtils.advDestroy();
    }
});