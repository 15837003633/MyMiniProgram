// components/area-header/area-header.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value:""
    },
    hasMore: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMoreClick(){
      this.triggerEvent("onMoreClick")
    }
  }
})