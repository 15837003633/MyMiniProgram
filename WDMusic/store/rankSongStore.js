import {HYEventStore} from "hy-event-store"
import {getPlayListDetail} from "../services/music"

const rankMap = {
  newRankList:3779629,
  originRankList:2884035,
  upRankList:19723756
}

export const rankingStore =  new HYEventStore({
  state:{
    newRankList:{},
    originRankList:{},
    upRankList:{}
  },
  actions:{
    fetchRankList:(ctx)=>{
      for (const key in rankMap){
        getPlayListDetail(rankMap[key]).then(res=>{
          ctx[key] = res.playlist
        })
      }
    }
  }
})