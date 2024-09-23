import {getMusicBanner, getSongMenuList} from "../../services/music"
import {wdQueryComponentRect} from "../../utils/util"
import {recomendSongStore} from "../../store/recommendSong"
import {rankingStore} from "../../store/rankSongStore"
Page({
  data:{
    // banner
    banners:[],
    banner_height:150,
    // 推荐歌曲
    recomentSongList:[],
    // 热门歌单
    hotMenuList:[],
    // 推荐歌单
    recMenuList:[],
    // 歌曲排行
    rankSongListInfo:{
      newRank:{},
      originRank:{},
      upRank:{}
    }
  },

  onLoad(){
    this.fetchBannerData()
    this.fetchSongMenuList()
    recomendSongStore.onState("recSongInfo",this.handleRecomendSongAction)
    recomendSongStore.dispatch("fetchRecomendSongList")
    rankingStore.onState("newRankList",this.handleNewRankListAction)
    rankingStore.onState("originRankList",this.handleOriginRankListAction)
    rankingStore.onState("upRankList",this.handleUpRankListAction)
    rankingStore.dispatch("fetchRankList")
  },

  // ========== 事件处理 ==========

  // 根据Image组件的实际高度来绝对的bannerview的高度，防止widthFix导致图片被裁剪
  // TODO: 这里需要做节流，防抖， 什么是节流？什么是防抖？
  async onImageDidLoad(event){
    const res = await wdQueryComponentRect(".banner_image")
    // console.log(res)
    this.setData({
      banner_height:res[0].height
    })
  },

  onRecSongMoreClick(){
    console.log("推荐歌曲 点击更多")
    wx.navigateTo({
      url: `/pages/detail-song/detail-song?type=recommend`,
    })
  },

  onPlaySongAction(event){
    console.log("play song:",event.detail)
  },


    // ========== 网络请求以及数据处理 ==========

  async fetchBannerData(){
    const res =  await getMusicBanner()
    console.log(res)
    this.setData({
      banners:res.banners
    })
  },

  async fetchSongMenuList(){
    getSongMenuList().then(res=>{
      console.log("热门歌单：",res)
      this.setData({
        hotMenuList: res.playlists
      })
    })

    getSongMenuList("话语").then(res=>{
      console.log("推荐歌单：",res)
      this.setData({
        recMenuList: res.playlists
      })
    })
  },

  handleRecomendSongAction(res){
    console.log("fetchRecomendSongList:res:",res)
    if (!res.tracks) return
    this.setData({
      recomentSongList: res.tracks.slice(0,6)
    })
  },
  handleNewRankListAction(res){
    console.log("新歌榜:res:",res)
    if (!res.name) return
    const updateRankInfo = {...this.data.rankSongListInfo, newRank: res}
    this.setData({
      rankSongListInfo: updateRankInfo
    })
  },
  handleOriginRankListAction(res){
    console.log("原创榜:res:",res)
    if (!res.name) return
    const updateRankInfo = {...this.data.rankSongListInfo, originRank: res}
    this.setData({
      rankSongListInfo: updateRankInfo
    })
  },
  handleUpRankListAction(res){
    console.log("飙升榜:res:",res)
    if (!res.name) return
    const updateRankInfo = {...this.data.rankSongListInfo, upRank: res}
    this.setData({
      rankSongListInfo: updateRankInfo
    })
  }
})
