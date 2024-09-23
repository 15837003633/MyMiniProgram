// components/ranking-item/ranking-item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    rankingInfo: {
      type: Object,
      value: {}
    },
    key:{
      type:String,
      value:"newRank"
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
      wx.navigateTo({
        url: `/pages/detail-song/detail-song?type=ranking&key=${this.properties.key}`,
      })
    }
  },
  lifetimes:{
    ready(){
      // console.log("rankingInfo",rankingInfo)
    }
  }
})