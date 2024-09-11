// pages/02_regist_page/index.js
Page({

  /**
   * Page initial data
   */
  data: {
      banners:[],
      recommends:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
      console.log('page onLoad')
    //   网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success:(res)=>{
          const banners = res.data.data.banner.list;
          const recommends = res.data.data.recommend.list;
          this.setData({banners,recommends})
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    console.log('page onReady')
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    console.log('page onShow')
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {
    console.log('page onHide')
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {
    console.log('page onUnload')
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {
    console.log('page onPullDownRefresh')
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {
    console.log('page onReachBottom')
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {
    console.log('page onShareAppMessage')
  }
})