// pages/03_common_cpns/index.js
Page({
    data:{
        colors:['red','green','blue','orange'],
        chooseImage:''
    },
    onClick(event){
        const color = event.target.dataset.item
        console.log(color,'被点击')
    },
    chooseImage(){
        wx.chooseMedia({
            mediaType:'image'
        }).then(rep=>{
            console.log(rep)
            const chooseImagePath = rep.tempFiles[0].tempFilePath
            this.setData({chooseImage:chooseImagePath})
        })
    }
})