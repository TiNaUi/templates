var _defineProperty2 = require("../../../@babel/runtime/helpers/defineProperty");

var app = getApp();

var apiList = require("../../../utils/api.js");

var login = require("../../../utils/login.js");

var commonUtils = require("../../../utils/common.js");

Page({
    onShareAppMessage: function onShareAppMessage(shareOption) {
        var search_code = app.getCache("search_code") || "";
        if (search_code.length <= 0) {
            search_code = this.data.homepageInfo.search_code;
        }
        var path, shareUrl;
        if (this.data.parameterListIndex == 0) {
            shareUrl = "pages/tabindex/isfp/index?homepage_id=" + this.data.homepage_id + "&search_code=" + search_code;
        } else {
            shareUrl = "pages/tabindex/isfp/index?homepage_id=" + this.data.homepage_id + "&search_code=" + search_code + "&album_id=" + this.data.album_id;
        }
        path = "pages/index/index?path=" + encodeURIComponent(shareUrl);
        var stime = shareOption.channel == "video" ? "video" + app.getCurrentTime() : app.getCurrentTime();
        path = path + "&stime=" + stime;
        return app.share(shareOption, 0, path, stime);
    },
    data: {
        homepage_id: 1,
        isMe: true,
        // 是否为自己的账号
        menuInfo: null,
        goodList: [],
        // 商品列表
        albumList: [],
        // 专辑列表
        totalPhoto: 0,
        // 作品总数量
        totalAlbum: 0,
        // 专辑总数量
        homepageInfo: null,
        // 个人信息
        parameterListIndex: 0,
        // tab索引 0图片 1专辑
        tabList: [],
        // 分类列表
        selectClassifyId: 0,
        // 分类id
        album_id: 0,
        // 专辑id
        page: 1,
        // 页码
        hasMore: true,
        pageSize: 15,
        albumPage: 1,
        albumPaseSize: 15,
        albumHasMore: true,
        albumTabList: [],
        // 专辑列表
        albumTabListIndex: 0,
        // 专辑下标
        photoListByDate: [],
        // 日期列表
        isDateShow: false,
        // 是否显示为日期 
        dateShow: true,
        //排序是否显示
        dataArr: [],
        totop: false,
        bottomDateShow: false
    },
    onLoad: function onLoad(options) {
        var _this = this;
        var search_code = options.search_code == undefined ? "" : options.search_code;
        if (search_code.length > 0) {
            app.setCache("search_code", search_code);
        }
        var menuInfo = wx.getMenuButtonBoundingClientRect();
        //胶囊信息
                var selectClassifyId = Number(options.selectClassifyId) || 0;
        var album_id = options.album_id || 0;
        if (album_id) {
            this.setData({
                parameterListIndex: 1
            });
        }
        this.setData({
            menuInfo: menuInfo,
            homepage_id: options.homepage_id,
            selectClassifyId: selectClassifyId,
            album_id: album_id
        });
        login.getUserOpenId(app).then(function(res) {
            _this.getHomepageInfo();
        }).catch(function(error) {
            if (error.errNo == 21100) {
                _this.setData({
                    imageLoaded: true
                });
                commonUtils.showModal("温馨提示", "请先登录账号才可体验小程序", false).then(function(res) {
                    commonUtils.pageBack();
                });
            } else {
                _this.getHomepageInfo();
            }
        });
    },
    // 监听是否加载到底部
    onReachBottom: function onReachBottom() {
        if (this.data.hasMore) {
            this.init();
        }
    },
    bindscrolltolower: function bindscrolltolower() {
        if (this.data.albumHasMore) {
            this.getHomepageAlbumList();
        }
    },
    setDataList: function setDataList(page, list) {
        var _this$setData;
        var column = 3;
        if (this.data.selectClassifyId == 2) {
            column = 2;
        } else if (this.data.selectClassifyId == 6) {
            column = 4;
        }
        var list1 = [];
        //第一列
                var list2 = [];
        //第二列
                var list3 = [];
        //第3列
                var list4 = [];
        //第3列
                for (var i = 0; i < list.length; i++) {
            if (i % column == 0) {
                list1.push(list[i]);
            } else if (i % column == 1) {
                list2.push(list[i]);
            } else if (i % column == 2) {
                list3.push(list[i]);
            } else {
                list4.push(list[i]);
            }
        }
        this.setData((_this$setData = {}, _defineProperty2(_this$setData, "list1[" + (page - 1) + "]", list1), 
        _defineProperty2(_this$setData, "list2[" + (page - 1) + "]", list2), _defineProperty2(_this$setData, "list3[" + (page - 1) + "]", list3), 
        _defineProperty2(_this$setData, "list4[" + (page - 1) + "]", list4), _this$setData));
    },
    imageLoad: function imageLoad(e) {
        var listIndex = e.currentTarget.dataset.listIndex;
        //第几列
                var itemIndex = e.currentTarget.dataset.itemIndex;
        //页码
                var index = e.currentTarget.dataset.index;
        //第几个
                this.setData(_defineProperty2({}, "list" + (listIndex + 1) + "[" + itemIndex + "][" + index + "].loaded", true));
    },
    imageLoad2: function imageLoad2(e) {
        var listIndex = e.currentTarget.dataset.listIndex;
        //第几列
                var index = e.currentTarget.dataset.index;
        //第几个
                this.setData(_defineProperty2({}, "photoListByDate" + "[" + listIndex + "]list[" + index + "].loaded", true));
    },
    getHeight: function getHeight(classify_id) {
        var height = 0;
        switch (classify_id) {
          case 1:
            height = 360;
            break;

          case 5:
            height = 360;
            break;

          default:
            height = 230;
        }
        return height;
    },
    // 获取主页信息
    getHomepageInfo: function getHomepageInfo() {
        var _this2 = this;
        var homepageInfo = app.getCache("homepageInfo_" + this.data.homepage_id) || "";
        if (homepageInfo) {
            this.getData(homepageInfo);
            app.removeCache("homepageInfo_" + this.data.homepage_id);
            return false;
        }
        var param = {
            homepage_id: this.data.homepage_id,
            limit: this.data.pageSize,
            search_code: app.getCache("search_code") || "",
            version: apiList.version,
            appid: apiList.appId,
            openid: app.getUserOpenId(),
            timestamp: app.getCurrentTime()
        };
        apiList.post(apiList.homepageInfo, param, app.getToken()).then(function(ret) {
            _this2.getData(ret);
        });
    },
    getData: function getData(ret) {
        var picClassifyList = ret.picClassifyList;
        if (picClassifyList.length == 1) {
            this.setData({
                selectClassifyId: picClassifyList[0].id
            });
        }
        this.setData({
            homepageInfo: ret.homepageInfo,
            tabList: ret.picClassifyList,
            totalPhoto: ret.totalPhoto,
            totalAlbum: ret.totalAlbum
        });
        if (this.data.totalPhoto > 0 || this.data.totalAlbum > 0) {
            this.init();
        } else {
            this.setData({
                hasMore: false,
                empty: true
            });
        }
    },
    // 获取专辑信息
    getHomepageAlbumList: function getHomepageAlbumList() {
        var _this3 = this;
        var param = {
            homepage_id: this.data.homepage_id,
            version: apiList.version,
            appid: apiList.appId,
            openid: app.getUserOpenId(),
            timestamp: app.getCurrentTime(),
            page: this.data.albumPage,
            limit: this.data.albumPaseSize
        };
        apiList.post(apiList.homepageAlbumList, param, app.getToken()).then(function(ret) {
            var albumPage = _this3.data.albumPage;
            var list = ret.albumList;
            var albumTabList = _this3.data.albumTabList.concat(list);
            _this3.setData({
                albumTabList: albumTabList,
                albumPage: albumPage + 1,
                album_id: albumTabList.length > 0 ? albumTabList[_this3.data.albumTabListIndex].id : 0
            });
            if (list.length < _this3.data.albumPaseSize || list.length > _this3.data.albumPaseSize) {
                _this3.setData({
                    albumHasMore: false
                });
            }
            if (albumPage == 1) {
                _this3.setData({
                    albumTabListIndex: _this3.getTabListIndex(ret.albumList, _this3.data.album_id)
                });
                _this3.getAlbumDataList();
            }
        });
    },
    // 列表
    init: function init() {
        var _this4 = this;
        if (this.data.page == 1) {
            app.showLoading("加载中");
        }
        // parameterListIndex: 0, // tab索引 0图片 1专辑
                if (this.data.parameterListIndex == 1) {
            if (this.data.totalAlbum > 0) {
                if (this.data.page == 1 && this.data.albumTabList <= 0) {
                    this.getHomepageAlbumList();
                } else {
                    this.getAlbumDataList();
                }
            } else {
                app.hideLoading();
                this.setData({
                    hasMore: false,
                    empty: true
                });
            }
        } else {
            if (this.data.totalPhoto <= 0) {
                app.hideLoading();
                this.setData({
                    hasMore: false,
                    empty: true
                });
                return false;
            }
            var limit = this.data.pageSize;
            if (!this.data.isDateShow) {
                if (this.data.selectClassifyId == 6) {
                    limit = 20;
                } else if (this.data.selectClassifyId == 2) {
                    limit = 10;
                }
            }
            var param = {
                homepage_id: this.data.homepage_id,
                classify_id: this.data.selectClassifyId,
                album_id: this.data.album_id,
                page: this.data.page,
                limit: limit,
                action: "cover",
                version: apiList.version,
                appid: apiList.appId,
                openid: app.getUserOpenId(),
                timestamp: app.getCurrentTime()
            };
            // isDateShow true日期显示  false默认显示
                        if (this.data.isDateShow) {
                // 日期列表显示
                apiList.post(apiList.getPhotoListByDate, param, app.getToken()).then(function(ret) {
                    var length = ret.photoList.length;
                    if (length) {
                        var page = _this4.data.page + 1;
                        _this4.photoListByDateInit(ret.photoList);
                        _this4.setData({
                            page: page,
                            empty: false
                        });
                    }
                    if (length < limit) {
                        _this4.setData({
                            hasMore: false
                        });
                    }
                    if (_this4.data.photoListByDate.length <= 0) {
                        _this4.setData({
                            empty: true
                        });
                    }
                });
            } else {
                // 默认列表显示
                apiList.post(apiList.photoList, param, app.getToken()).then(function(ret) {
                    var length = ret.photoList.length;
                    var p = _this4.data.page;
                    if (length) {
                        var page = _this4.data.page + 1;
                        var goodList = _this4.data.goodList.concat(ret.photoList);
                        _this4.setData({
                            page: page,
                            goodList: goodList,
                            empty: false
                        });
                    }
                    _this4.setDataList(p, ret.photoList);
                    if (length < limit) {
                        _this4.setData({
                            hasMore: false
                        });
                        if (_this4.data.goodList.length <= 0) {
                            _this4.setData({
                                empty: true
                            });
                        }
                    }
                });
            }
        }
    },
    getAlbumDataList: function getAlbumDataList() {
        var _this5 = this;
        if (this.data.page == 1) {
            app.showLoading("加载中");
        }
        var param = {
            homepage_id: this.data.homepage_id,
            album_id: this.data.album_id,
            page: this.data.page,
            limit: this.data.pageSize,
            version: apiList.version,
            appid: apiList.appId,
            action: "cover",
            openid: app.getUserOpenId(),
            timestamp: app.getCurrentTime()
        };
        apiList.post(apiList.albumPhotoList, param, app.getToken()).then(function(ret) {
            var length = ret.list.length;
            var p = _this5.data.page;
            if (length != undefined) {
                var page = _this5.data.page + 1;
                var albumList = _this5.data.albumList.concat(ret.list);
                _this5.setData({
                    page: page,
                    albumList: albumList,
                    dateShow: false,
                    hasMore: true,
                    empty: false
                });
            }
            _this5.setDataList(p, ret.list);
            if (length < _this5.data.pageSize) {
                _this5.setData({
                    hasMore: false
                });
                if (_this5.data.albumList.length <= 0) {
                    _this5.setData({
                        empty: true
                    });
                }
            }
        });
    },
    // 分类改变
    tabListChange: function tabListChange(e) {
        var id = e.currentTarget.dataset.id;
        if (this.data.selectClassifyId == id) {
            return false;
        }
        var page = 1;
        var goodList = [];
        this.setData({
            selectClassifyId: id,
            page: page,
            goodList: goodList,
            photoListByDate: [],
            list1: [],
            list2: [],
            list3: []
        });
        this.init();
        this.setData({
            hasMore: true
        });
        this.resetData();
    },
    // 专辑切换
    albumTabListChange: function albumTabListChange(e) {
        var index = e.currentTarget.dataset.index;
        var album_id = e.currentTarget.dataset.id;
        this.setData({
            albumTabListIndex: index,
            album_id: album_id,
            page: 1,
            albumList: [],
            list1: [],
            list2: [],
            list3: []
        });
        this.init();
    },
    // tabListChange 下一个
    nextItem: function nextItem() {
        if (this.data.albumTabListIndex == this.data.albumTabList.length - 1) {
            return false;
        }
        var album_id = this.data.albumTabList[this.data.albumTabListIndex + 1].id;
        this.setData({
            albumTabListIndex: this.data.albumTabListIndex + 1,
            album_id: album_id,
            page: 1,
            albumList: []
        });
        this.init();
    },
    // 获取专辑getTabListIndex
    getTabListIndex: function getTabListIndex(list, id) {
        var num = 0;
        list.forEach(function(item, index) {
            if (item.id == id) {
                num = index;
            }
        });
        return num;
    },
    // 壁纸详情
    goDetail: function goDetail(e) {
        var id = e.currentTarget.dataset.id;
        var action = parseInt(e.currentTarget.dataset.action);
        //1-列表 2-日期列表 3-专辑列表
                var index = e.currentTarget.dataset.index;
        var info;
        switch (action) {
          case 1:
            info = this.objectFindByKey(this.data.goodList, "id", id);
            break;

          case 2:
            info = this.objectFindByKey(this.data.photoListByDate[index].list, "id", id);
            break;

          case 3:
            info = this.objectFindByKey(this.data.albumList, "id", id);
            break;

          default:
            info = this.objectFindByKey(this.data.goodList, "id", id);
            break;
        }
        console.log("info", info);
        var type = info.file_type;
        if (info != undefined) {
            info.avatar = this.data.homepageInfo.avatar;
            app.setCache("image-info", info);
        }
        var code = this.data.homepageInfo.search_code;
        if (type == "voice") {
            var url = "/pages/tabindex/voiceDetail/index/index?id=" + id + "&homepage_id=" + this.data.homepage_id + "&code=" + code;
            commonUtils.pageGo(url);
        } else {
            var _url = "/pages/tabindex/detail/index?id=" + id + "&code=" + code;
            commonUtils.pageGo(_url);
        }
    },
    // 作品 专辑
    parameterListChange: function parameterListChange(e) {
        var index = e.currentTarget.dataset.index;
        if (this.data.parameterListIndex == index) {
            return false;
        }
        var page = 1;
        var goodList = [];
        var albumList = [];
        this.setData({
            parameterListIndex: index,
            page: page,
            goodList: goodList,
            albumList: albumList,
            album_id: this.data.albumTabList.length > 0 ? this.data.albumTabList[this.data.albumTabListIndex].id : 0,
            selectClassifyId: 0,
            hasMore: true,
            isDateShow: false,
            photoListByDate: []
        });
        this.resetData();
        if (index == 0) {
            this.setData({
                album_id: 0,
                dateShow: true
            });
        } else {
            this.setData({
                album_id: this.data.albumTabList.length > 0 ? this.data.albumTabList[this.data.albumTabListIndex].id : 0,
                dateShow: false
            });
        }
        this.init();
    },
    dateShowChange: function dateShowChange() {
        this.setData({
            isDateShow: !this.data.isDateShow,
            page: 1,
            photoListByDate: [],
            goodList: [],
            hasMore: true
        });
        this.init();
        this.resetData();
    },
    // 日期列表处理
    photoListByDateInit: function photoListByDateInit(arr1) {
        var photoListByDate = this.data.photoListByDate;
        var arr = this.data.dataArr.concat(arr1);
        this.setData({
            dataArr: arr
        });
        if (this.data.page == 1) {
            var obj = {
                data: arr[0].date,
                list: [ arr[0] ]
            };
            photoListByDate.push(obj);
        }
        var num = photoListByDate.length ? photoListByDate.length - 1 : 0;
        for (var i = num; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i].date == arr[j].date) {
                    //第一个等同于第二个，splice方法删除第二个
                    photoListByDate[i].list.push(arr[j]);
                    arr.splice(j, 1);
                    j--;
                } else {
                    var _obj = {
                        data: arr[j].date,
                        list: [ arr[j] ]
                    };
                    photoListByDate.push(_obj);
                    break;
                }
            }
        }
        this.setData({
            photoListByDate: photoListByDate
        });
    },
    objectFindByKey: function objectFindByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    },
    resetData: function resetData() {
        this.setData({
            photoListByDate: [],
            dataArr: [],
            list1: [],
            list2: [],
            list3: [],
            list4: []
        });
    },
    //声明
    announce: function announce() {
        wx.showModal({
            title: "声明",
            content: "所有素材均由创作者上传及负责，部分素材来源网络，如有侵权，请联系我们进行删除处理！",
            showCancel: false
        });
    },
    // 监听页面
    onPageScroll: function onPageScroll(e) {
        var t = e.scrollTop;
        if (t > 1e3 && !this.data.toTop) {
            this.setData({
                toTop: true
            });
        }
        if (t <= 1e3 && this.data.toTop) {
            this.setData({
                toTop: false
            });
        }
        if (t > 500 && !this.data.bottomDateShow) {
            this.setData({
                bottomDateShow: true
            });
        }
        if (t <= 500 && this.data.bottomDateShow) {
            this.setData({
                bottomDateShow: false
            });
        }
    }
});