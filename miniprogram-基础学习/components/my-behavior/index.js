import {counter_behavior} from "../../behaviors/counter"

Component({

  /**
   * 类似于混入 mixin
   */
  behaviors:[counter_behavior],


  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap(){
      this.reset()
    }
  },

  lifetimes:{
    created(){
      console.log("组件被创建")
    },
    attached(){
      console.log("组件被添加到DOM树")

    },
    detached(){
      console.log("组件被移除DOM树")
    }
  }
})