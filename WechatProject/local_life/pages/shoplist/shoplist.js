// pages/shoplist/shoplist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        options: [],
        shopList: [],
        page: 1,
        pageSize: 10,
        total: 0,
        isLoding: false
    },
    getShopList() {

        wx.showLoading({
            title: '加载中',
        })

        this.setData({
            isLoding: true
        })
        wx.request({
            url: `https://www.escook.cn/categories/${this.data.options.id}/shops`,
            data: {
                _page: this.data.page,
                _limit: this.data.pageSize * 1
            },
            success: (res) => {
                console.log(res)
                this.setData({
                    shopList: [...this.data.shopList, ...res.data],
                    total: res.header['X-Total-Count']
                })
                wx.hideLoading({
                    success: (res) => {},
                })
                this.setData({
                    isLoding: false
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            options
        })
        this.getShopList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        wx.setNavigationBarTitle({
            title: this.data.options.title,
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.isLoding) return
        this.setData({
            page: this.data.page + 1
        })
        this.getShopList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})