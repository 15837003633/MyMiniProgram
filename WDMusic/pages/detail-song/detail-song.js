import {recomendSongStore} from "../../store/recommendSong"
import {rankingStore} from "../../store/rankSongStore"
import {getPlayListDetail} from "../../services/music"

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

  async fetchMenuSongList(){
    const res = await getPlayListDetail(this.data.menuID)
    this.setData({
      songList: res.playlist
    })
  },
  handleRecSongInfoState(res){
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