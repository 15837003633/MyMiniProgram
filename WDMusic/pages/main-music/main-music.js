import {getMusicBanner} from "../../services/music"
import {wdQueryComponentRect} from "../../utils/util"
Page({
  data:{
    banners:[],
    banner_height:150
  },

  onLoad(){
    this.fetchBannerData()
  },

  // 根据Image组件的实际高度来绝对的bannerview的高度，防止widthFix导致图片被裁剪
  // TODO: 这里需要做节流，防抖， 什么是节流？什么是防抖？
  async onImageDidLoad(event){
    const res = await wdQueryComponentRect(".banner_image")
    console.log(res)
    this.setData({
      banner_height:res[0].height
    })
  },

  onAreaHeaderMoreClick(){
    console.log("点击更多")
  },

  async fetchBannerData(){
    const res =  await getMusicBanner()
    console.log(res)
    this.setData({
      banners:res.banners
    })
  }
})