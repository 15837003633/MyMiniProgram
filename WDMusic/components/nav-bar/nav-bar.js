// components/nav-bar/nav-bar.js

const app = getApp()

Component({
  options:{
    multipleSlots: true
  },
  properties:{
    title:{
      type:String,
      value:"默认标题"
    }
  },
  data:{
    statusBarHeight:20,

  },
  methods:{
    onLeftClick(){
      this.triggerEvent("onLeftAction")
    }
  },
  lifetimes:{
    attached(){
      this.setData({
        statusBarHeight:app.globalAppData.statusBarHeight
      })
    }
  }

})