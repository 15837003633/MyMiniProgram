import {wdRequest1,wdRequest2,request_instance} from '../../services/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cities:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    // 1.原生调用
    /**
      wx.request({
      url: 'http://codercba.com:1888/api/city/all',
      method:'GET',
      success: res=>{
        console.log(res.data)
        this.setData({
          cities:res.data.data.cityGroup.hotCities
        })
      }
    })
     */


    /**
     * 封装成方法
    wdRequest1({
      url: 'http://codercba.com:1888/api/city/all',
      method:'GET'
    })

    wdRequest2({
      url: 'http://codercba.com:1888/api/city/all',
      method:'GET'
    }).then(data=>{
      console.log("wdRequest2:",data)
      this.setData({
        cities:data.data.cityGroup.hotCities
      })
    })
     */

    request_instance.get({
      url:"city/all"
    }).then(data=>{
      console.log("request_instance request:",data)
      this.setData({
        cities:data.data.cityGroup.hotCities
      })
    })
  },

})