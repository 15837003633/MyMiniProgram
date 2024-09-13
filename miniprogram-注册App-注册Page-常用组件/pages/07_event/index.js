// pages/07_event/index.js
Page({

  /**
   * Page initial data
   */
  data: {
      tabs:['热门','推荐','附近','关注'],
      currentIndex:0
  },
  onItemClick(event){
 
    /*
    注意currentTarget和target的区别，因为事件可能会向上冒泡，比如currentTarget是当前视图，target可能是他的子视图，
    currentTarget：当前组件的一些数据
    target：触发事件的组件的一些数据
    */
      const index = event.currentTarget.dataset.index
      this.setData({
          currentIndex:index
      })
  },
   // 捕获和冒泡过程
   onView1CaptureTap() {
    console.log("onView1CaptureTap");
  },
  onView2CaptureTap() {
    console.log("onView2CaptureTap");
  },
  onView3CaptureTap() {
    console.log("onView3CaptureTap");
  },
  onView1Tap() {
    console.log("onView1Tap");
  },
  onView2Tap() {
    console.log("onView2Tap");
  },
  onView3Tap() {
    console.log("onView3Tap");
  },
  
  onMarkTap(event){
      const mark = event.mark
      console.log(mark)
  }
})