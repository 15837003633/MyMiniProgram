// pages/profile/profile.js
Page({
    data:{
        count:30
    },
    onPullDownRefresh(){
        console.log("開始刷新")
        setTimeout(() => {
            this.setData(
                {
                    count: 30
                }
            )
            wx.stopPullDownRefresh()
        }, 1000);
 
    },
    onReachBottom(){
        console.log("加载更多数据")
        this.setData(
            {
                count: this.data.count+=10
            }
        )
    }
  },  
)