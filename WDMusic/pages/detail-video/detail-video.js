import {getMVDetail,getMVPlayURL,getMVRelateVideoList} from "../../services/video"
Page({
  data: {
    mvid:0,
    mv_url:'',
    mv_info:{},
    relateMVs:[]
  },

  onLoad(options) {
    this.data.mvid = options.mvid
    this.fetchDetailInfo()
    this.fetchURLInfo()
    this.fetchMVRelateVideoList()
  },

  async fetchDetailInfo(){
    const res = await getMVDetail(this.data.mvid)
    console.log("mv info:",res)
    this.setData({
      mv_info: res.data
    })
  },
  async fetchURLInfo(){
    const res = await getMVPlayURL(this.data.mvid)
    console.log("mv url:",res)
    this.setData({
      mv_url: res.data.url
    })
  },
  async fetchMVRelateVideoList(){
    const res = await getMVRelateVideoList(this.data.mvid)
    console.log("relate list:",res)
    this.setData({
      relateMVs: res.data
    })
  }

  
})