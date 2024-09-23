// components/song-item-v1/song-item-v1.js
Component({
properties: {
    songInfo:{
      type:Object,
      value:{}
    }
  },
  methods: {
    onSongClick(){
      wx.navigateTo({
        url: `/pages/music-player/music-player?id=${this.properties.songInfo.id}`,
      })
    }
  }
})