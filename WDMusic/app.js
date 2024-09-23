// app.js
App({
  globalAppData:{
    statusBarHeight:20,
    screenWidth:390,
    screenHeight:844,
    contentHeight:700

  },
  onLaunch(){
    const windowInfo = wx.getWindowInfo()
    console.log("windowInfo:",windowInfo)
    this.globalAppData.statusBarHeight = windowInfo.statusBarHeight
    this.globalAppData.screenWidth = windowInfo.screenWidth
    this.globalAppData.screenHeight = windowInfo.screenHeight
    this.globalAppData.contentHeight = this.globalAppData.screenHeight - this.globalAppData.statusBarHeight - 44
  }
})
