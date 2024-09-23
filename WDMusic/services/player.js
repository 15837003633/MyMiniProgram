import {wdrequest_instance} from "./index"

export function getSongDetail(ids){
  return wdrequest_instance.get({
    url:"/song/detail",
    data:{
      ids
    }
  })
}

export function getSongLyric(id){
  return wdrequest_instance.get({
    url:"/lyric",
    data:{
      id
    }
  })
}