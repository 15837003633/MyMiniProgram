import {HYEventStore} from "hy-event-store"
import {getPlayListDetail} from "../services/music"

export const recomendSongStore =  new HYEventStore({
  state:{
    recSongInfo:{}
  },
  actions:{
    fetchRecomendSongList:(ctx)=>{
      getPlayListDetail(3778678).then(res=>{
        ctx.recSongInfo = res.playlist
      })
    }
  }
})