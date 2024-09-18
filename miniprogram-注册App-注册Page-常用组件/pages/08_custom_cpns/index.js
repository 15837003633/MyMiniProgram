// pages/08_custom_cpns/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cates:["手机","电脑","Pad","手表"]
  },
  onSectionCpnTitleClick(event){
    // console.log("onSectionCpnTitleClick",event)
    const callback_params = event.detail;
    console.log(callback_params)
  },
  tabcontrol_index_changed(event){
    // console.log("tabcontrol_index_changed",event)
    const sel_index = event.detail
    console.log("选中了"+this.data.cates[sel_index])
  },
  onbBtnClick(){
    const tc_cpn = this.selectComponent(".city")
    tc_cpn.testfunc(2)
  }
})