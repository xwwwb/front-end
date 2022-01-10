// components/test5/test5.js
const myBehavior = require('../../behaviors/my-behavior')

Component({
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    username: 'ls'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      this.setData({
        count: this.properties.count + 1
      })
      // 触发自定义事件，将数值同步给父组件
      this.triggerEvent('sync', { value: this.properties.count })
    }
  }
})
