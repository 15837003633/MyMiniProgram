import {getSongDetail, getSongLyric} from "../../services/player"
const app = getApp()
Page({
  data:{
    id:0,
    songInfo:{},
    lyricInfo:"",
    tabs:["歌曲","歌词"],
    currentIndex: 0,
    contentHeight : 840
  },
  onLoad(options){
    this.data.id = options.id
    this.setData({
      contentHeight:app.globalAppData.contentHeight
    })
    this.fetchSongInfo()
    this.fetchSongLyric()
  },

  // 事件处理
  onNavBarLeftAction(){
    wx.navigateBack()
  },

  onSwiperChanged(event){
    console.log(event)
    const changedIndex = event.detail.current
    this.setData({currentIndex:changedIndex})
  },

  onTabClick(event){
    const selectIndex = event.currentTarget.dataset.index
    this.setData({currentIndex:selectIndex})
  },

  // 网络请求
  async fetchSongInfo(){
    const res = await getSongDetail(this.data.id)
    console.log("歌曲详情：",res)
    this.setData({
      songInfo : res.songs[0]
    })
  },
  async fetchSongLyric(){
    const res = await getSongLyric(this.data.id)
    console.log("歌词Lric：",res)
    this.setData({
      lyricInfo : res.lrc
    })
  }
})