var app = getApp();

Page({
    data: {
        id: 1,
        followList: [ 0, 1, 2 ]
    },
    onLoad: function onLoad(options) {
        this.setData({
            id: options.id
        });
    },
    // 搜索
    searchValueChange: function searchValueChange(e) {
        var searchValue = e.detail.value;
        this.setData({
            searchValue: searchValue
        });
    },
    submit: function submit() {
        console.log(this.data.searchValue);
    },
    // 监听是否加载到底部
    onReachBottom: function onReachBottom() {
        console.log("监听是否加载到底部");
        var list = [ 0, 1, 2 ];
        var followList = this.data.followList.concat(list);
        // this.setData({
        //   followList: followList
        // })
        },
    // 关注改变
    followChange: function followChange(e) {
        var index = e.currentTarget.dataset.index;
        console.log("关注改变");
    },
    // 创作者详情
    goisfp: function goisfp(e) {
        var index = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: "/pages/index/isfp/index?id=" + this.data.id
        });
    }
});