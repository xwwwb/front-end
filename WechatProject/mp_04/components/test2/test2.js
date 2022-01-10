// components/test2/test2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    n1: 0,
    n2: 0,
    sum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addN1() {
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    addN2() {
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  },
  observers: {
    'n1, n2': function (newN1, newN2) {
      this.setData({
        sum: newN1 + newN2
      })
    }
  }
})
