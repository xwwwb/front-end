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
    getShopList(cb) {

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

            },
            complete: () => {
                wx.hideLoading({

                })
                this.setData({
                    isLoding: false
                })
              cb && cb()
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
        this.setData({
            shopList: [],
            page: 1,
            total: 0,
        })
        this.getShopList(()=>{
            wx.stopPullDownRefresh({
              success: (res) => {},
            })
        })

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.pageSize * this.data.page >= this.data.total) {
            wx.showToast({
                title: '数据加载完毕',
            })
            return
        }

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