import {recomendSongStore} from "../../store/recommendSong"
import {rankingStore} from "../../store/rankSongStore"
import {getPlayListDetail} from "../../services/music"
import playerStore from "../../store/playerStore"

Page({
  data:{
    songList:[],
    type:{
      type: String,
      value:''
    },
    menuID:{
      type: Number,
      value:0
    }
  },
  onLoad (event){
    console.log(event)
    const type = event.type
    this.setData({type})
    if (type === 'recommend'){
      recomendSongStore.onState("recSongInfo",this.handleRecSongInfoState)
    }else if(type == 'ranking'){
      const key = event.key
      if (key === "newRank"){
        rankingStore.onState("newRankList",this.handleRecSongInfoState)
      }else if (key === "originRank"){
        rankingStore.onState("originRankList",this.handleRecSongInfoState)
      }else if (key === "upRank"){
        rankingStore.onState("upRankList",this.handleRecSongInfoState)
      }
    }else if (type === "menu"){
      this.data.menuID = event.id
      this.fetchMenuSongList()
    }
  },

  onSongClick(event){
    const index = event.currentTarget.dataset.index
    playerStore.setState("songList",this.data.songList.tracks)
    playerStore.setState("selectIndex",index)
  },

  async fetchMenuSongList(){
    const res = await getPlayListDetail(this.data.menuID)
    this.handleRecSongInfoState(res.playlist)
  },
  handleRecSongInfoState(res){
    wx.setNavigationBarTitle({
      title: res.name,
    })
    this.setData({
      songList: res
    })
  },

  onUnload(){
    if(this.data.type === "recommend"){
      recomendSongStore.offState("recSongInfo",this.handleRecSongInfoState)
    }else if (this.data.type === "ranking"){
      rankingStore.offState("newRankList",this.handleRecSongInfoState)
      rankingStore.offState("originRankList",this.handleRecSongInfoState)
      rankingStore.offState("upRankList",this.handleRecSongInfoState)
    }
    
  }
})