// components/section-info/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title : {
      type: String,
      value: "默认标题"
    },
    content : {
      type : String,
      value : "默认内容"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },


  /**
   * 组件接受的外部样式类，来实现外部定义组件的css
   */
  externalClasses:["content-style"],

  /**
   * 组件的方法列表
   */
  methods: {
    onTitleClick(){
      console.log("onTitleClick");
      this.triggerEvent("onSectionCpnTitleCallback","hello")
    }
  }


})