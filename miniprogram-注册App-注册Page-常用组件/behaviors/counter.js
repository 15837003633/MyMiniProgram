const counter_behavior = Behavior({
  data:{
    currentCount:0
  },
  methods:{
    addNum(){
      this.setData({
        currentCount: this.data.currentCount + 1
      })
    },

    minNum(){
      this.setData({
        currentCount: this.data.currentCount - 1
      })
    },
    reset(){
      this.setData({
        currentCount: 0
      })
    }
  }
})

export {
  counter_behavior
}