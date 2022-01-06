// pages/events/events.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: 0,
        msg: '',
        condition:false,
        hidden:false,
        arr1:['bbs','list','hello','world'],
        userList:[
            {id:1,name:'xwb'},
            {id:2,name:'xwwwb'}
        ]
    },
    handletap(e) {
        console.log(e)
        console.log("事件响应了")
        this.setData({
            count: this.data.count + 1
        })

    },
    handletap2(e) {
        console.log(e)
        this.setData({
            count: this.data.count + e.target.dataset.info
        })

    },
    handleinput(e) {
        console.log(e)
        this.setData({
            msg: e.detail.value
        })
    },
    handleboolean(){
        this.setData({
            condition:!this.data.condition
        })
    },
    handlehid(){
        this.setData({
            hidden:true
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
        wx.stopPullDownRefresh();
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