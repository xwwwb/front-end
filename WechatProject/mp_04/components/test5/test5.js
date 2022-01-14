const behavior = require("../../behaviors/my-behavior")
// components/test5/test5.js
Component({
    behaviors:[behavior],
 
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        count:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount(){
            console.log(this)
            this.setData({
                count:this.data.count+1
            })
            this.triggerEvent('sync',{
                value:this.data.count
            })
        }
    }
})
