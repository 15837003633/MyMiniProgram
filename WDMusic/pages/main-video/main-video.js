import {getTopMVList} from '../../services/video'
Page({
  data: {
    video_items: [],
    offset:0,
    hasMore:true
  },
  onLoad(){
    this.fetchTopMVList()
  },

  // 下拉刷新
  async onPullDownRefresh(){
    this.data.video_items = []
    this.data.offset = 0
    this.data.hasMore = true
    await this.fetchTopMVList()
    wx.stopPullDownRefresh()
  },

  // 上拉加载更多
  onReachBottom(){
    this.fetchTopMVList()
  },

  // 请求topMV的逻辑
  async fetchTopMVList(){
    if(!this.data.hasMore){
      console.log("没有更多数据了")
      return;
    }
    const res = await getTopMVList(this.data.offset)
    console.log(res)
    const totalData = [...this.data.video_items,...res.data]
    console.log(`获取新数据${res.data.length}条，共${totalData.length}条`)
    this.setData({
      video_items: totalData
    })
    this.data.offset = totalData.length
    this.data.hasMore = res.hasMore
  }
})