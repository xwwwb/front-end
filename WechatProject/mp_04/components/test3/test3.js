// components/test3/test3.js
Component({
    options: {
        pureDataPattern: /^_/
    },
    /**
     * 组件的属性列表
     */
   
    properties: {

    },
    pageLifetimes:{
        show(){
            this._randomRGB()
        }
    },
    lifetimes:{
        created(){
            console.log("created")
        },
        attached(){
            console.log("attached")
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        _rgb: {
            r: 0,
            g: 0,
            b: 0
        },
        fullColor: "0,0,0"
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addR() {
            this.setData({
                '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5

            })
            console.log(this.data._rgb.r, this.data._rgb.g, this.data._rgb.b)
        },
        addG() {
            this.setData({
                '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
            })
            console.log(this.data._rgb.r, this.data._rgb.g, this.data._rgb.b)
        },
        addB() {
            this.setData({
                '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
            })
            console.log(this.data._rgb.r, this.data._rgb.g, this.data._rgb.b)

        },
        _randomRGB(){
            this.setData({
                _rgb:{
                    r:Math.floor(Math.random()*256),
                    g:Math.floor(Math.random()*256),
                    b:Math.floor(Math.random()*256)
                }
            })
        }
    },
    observers: {
        // '_rgb.r,_rgb.g,_rgb.b':function(a,b,c){
        //     this.setData({
        //         fullColor:a+','+b+','+c
        //     })
        //     console.log(this.data.fullColor)
        // }
        // 通配符用法
        '_rgb.**': function (obj) {
            this.setData({
                fullColor: `${obj.r},${obj.g},${obj.b}`
            })
            console.log(this.data.fullColor)
        }
    }
})