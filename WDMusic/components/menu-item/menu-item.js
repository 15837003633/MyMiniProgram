// components/menu-item/menu-item.js
Component({
  properties: {
    menuInfo:{
      type: Object,
      value: {}
    }
  },
  methods: {
    onMenuClick(){
      wx.navigateTo({
        url: `/pages/detail-song/detail-song?type=menu&id=${this.properties.menuInfo.id}`,
      })
    }
  }
})