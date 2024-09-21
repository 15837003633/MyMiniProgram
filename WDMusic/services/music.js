import {wdrequest_instance} from "./index"

export function getMusicBanner(type = 0) {
  return wdrequest_instance.get({
    url: "/banner",
    data: {
      type
    }
  })
}

// 获取指定歌曲列表：item是歌曲song
export function getPlayListDetail(id){
  return wdrequest_instance.get({
    url:"/playlist/detail",
    data:{
      id
    }
  })
}

// 获取指定歌单列表：item是歌单menu（歌单就是若干歌曲的集合）
export function getSongMenuList(cat = "全部",limit = 6, offset = 0){
  return wdrequest_instance.get({
    url:"/top/playlist",
    data:{
      cat,
      limit,
      offset
    }
  })
}

// 获取歌单的分类：比如item是国风/摇滚/民谣。。。
export function getSongMenuTag(){
  return wdrequest_instance.get({
    url:"/playlist/hot"
  })
}