
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

const wdrequest_instance = new WDRequest("http://codercba.com:9002")

export {
  wdrequest_instance
}