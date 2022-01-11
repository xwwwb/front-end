// components/test/test.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        max:{
            type:Number,
            value:10
        }
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
            console.log(this.data)
             console.log(this.properties)
            if(this.data.count >= this.properties.max) return 
            this.setData({
                count:this.data.count+1
            })
            this.setData({
                max:this.properties.max+1
            })
        this._showCount()
        },
        _showCount(){
            wx.showToast({
              title: 'count是'+this.data.count,
              icon:"none"
            })
        }
    }
})
