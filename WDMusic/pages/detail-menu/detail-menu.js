import {getSongMenuTag, getSongMenuList} from "../../services/music"
Page({
  data: {
    menuInfos:[]
  },
  onLoad(){
    this.fetchAllMenuList()
  },
  async fetchAllMenuList(){
    const tagRes = await getSongMenuTag()
    console.log(tagRes)
    const promises = []
    for (const tagInfo of tagRes.tags){
      const pro = getSongMenuList(tagInfo.name)
      promises.push(pro)
    }
    // 所以数组里的promise完成的回调
    Promise.all(promises).then(res=>{
      console.log(res)
      this.setData({menuInfos:res})
    })
  }
})