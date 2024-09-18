function wdRequest1(options) {
  wx.request({
    ...options,
    success: res => {
      console.log("wdRequest1:" + res.data)
    }
  })
}

function wdRequest2(options) {
  const promise = new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: res => {
        resolve(res.data)
      },
      fail: reject
    })
  })
  return promise
}

class WDRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  request(options) {
    const { url } = options
    const promise = new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseUrl + url,
        success: res => {
          resolve(res.data)
        },
        fail: reject
      })
    })
    return promise
  }
  get(options) {
    return this.request({
      ...options,
      method: "get"
    })
  }
  post(options) {
    return this.request({
      ...options,
      method: "post"
    })
  }
}

const request_instance = new WDRequest("http://codercba.com:1888/api/")

export {
  wdRequest1, wdRequest2, request_instance
}