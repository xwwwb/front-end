// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count :0
    },

    syncCount(e){
       this.setData({
           count:e.detail.value
       })
    },
    addInnerCount(){
        const app = this.selectComponent(".mytest5")
        console.log(app)
        // app的原型链上有这个方法：addCount()
        app.setData({
            count:app.data.count+1
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})