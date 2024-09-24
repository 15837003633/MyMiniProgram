import {HYEventStore} from "hy-event-store"

const playerStore =  new HYEventStore({
  state:{
    songList:[],
    selectIndex:0
  },
})

export default  playerStore