// components/area-menu/area-menu.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value:"默认标题"
    },
    hasMore:{
      type: Boolean,
      value: true
    },
    menuList:{
      type: Array,
      value:[]
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
    onSongMenuMoreClick(){
      console.log("歌单 点击更多")
      wx.navigateTo({
        url: '/pages/detail-menu/detail-menu',
      })
    },
  }
})