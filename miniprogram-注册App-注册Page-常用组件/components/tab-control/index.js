// components/tab-control/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current_index : 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event){
      const sel_index = event.currentTarget.dataset.index
      this.setData({
        current_index: sel_index
      })
      this.triggerEvent("index-changed",sel_index)
    },
    
    testfunc(set_index){
      this.setData({
        current_index: set_index
      })
    }
  },

})