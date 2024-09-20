
// 封装一个方法，获取页面组件的尺寸
export function wdQueryComponentRect(selector){
  return new Promise(resolve=>{
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    query.exec(res=>{
      resolve(res)
    })
  })
}