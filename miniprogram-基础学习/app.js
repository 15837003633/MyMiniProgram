// app.js
App({
    globalData:{
        token:'',
        userInfo:{}
    },
    onLaunch(options){
        console.log("APP onLaunch")
        const token = wx.getStorageSync('token')
        const userInfo = wx.getStorageSync('userInfo')
        if ( !token || !userInfo){
            wx.setStorageSync('token', "wd_token")
            wx.setStorageSync('userInfo',{name:"wudang",score:99})
        }
        this.globalData.token = token
        this.globalData.userInfo = userInfo
        
    },
    onShow(options){
        console.log("APP onShow")
    },
    onHide(){
        console.log("APP onHide")
    }
})
