import {recomendSongStore} from "../../store/recommendSong"

Page({
  data:{
    songList:[]
  },
  onLoad (){
    recomendSongStore.onState("recSongInfo",this.handleRecSongInfoState)
  },
  handleRecSongInfoState(res){
    this.setData({
      songList: res.tracks
    })
  }
})