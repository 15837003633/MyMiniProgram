// pages/01_regist_app/index.js
Page({
    data:{
        name:'',
        score:0
    },
    onLoad(){
        const globalData = getApp().globalData;
        console.log('globalData:',globalData)
        this.setData({
            name : globalData.userInfo.name,
            score : globalData.userInfo.score
        })
    }
})