import {wdrequest_instance} from "./index"

export function getTopMVList(offset=0,limit=20){
  return wdrequest_instance.get({
    url:"/top/mv",
    data:{
      limit,
      offset
    }
  })
}

export function getMVDetail(mvid){
  return wdrequest_instance.get({
    url:"/mv/detail",
    data:{
      mvid
    }
  })
}
export function getMVPlayURL(id){
  return wdrequest_instance.get({
    url:"/mv/url",
    data:{
      id,
      r:1080
    }
  })
}

export function getMVRelateVideoList(id){
  return wdrequest_instance.get({
    url:"/related/allvideo",
    data:{
      id
    }
  })
}

