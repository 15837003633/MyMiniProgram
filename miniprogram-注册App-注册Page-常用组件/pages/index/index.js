// pages/index/index.js

Page({
    data:{
        items:[
            {
                title:"01注册APP",
                path:"/pages/01_regist_app/index"
            },
            {
                title:"02注册Page",
                path:"/pages/02_regist_page/index"
            },
            {
                title:"03常用组件",
                path:"/pages/03_common_cpns/index"
            },
            {
                title:"04WXSS",
                path:"/pages/04_wxss/index"
            },
            {
                title:"05WXML",
                path:"/pages/05_wxml/index"
            },
            {
                title:"06WXS",
                path:"/pages/06_wxs/index"
            },
            {
                title:"07事件",
                path:"/pages/07_event/index"
            }   
        ]
    },
    btnClick(event){
        console.log('btn click event:',event)
        const path  = event.target.dataset.item;
        wx.navigateTo({
          url: path,
        })
    }
})