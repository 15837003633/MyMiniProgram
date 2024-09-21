// components/song-item-v1/song-item-v1.js
Component({
properties: {
    songInfo:{
      type:Object,
      value:{}
    }
  },
  methods: {
    onPlaySongClick(event){
      this.triggerEvent("playSong",this.data.songInfo)
    }
  }
})