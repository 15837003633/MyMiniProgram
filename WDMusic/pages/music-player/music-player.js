import {getSongDetail, getSongLyric} from "../../services/player"
import parseLyric from "../../utils/parse-lyric"
import playerStore from "../../store/playerStore"

const app = getApp()
const playerContext = wx.createInnerAudioContext()
Page({
  data:{
    id:0,
    songInfo:{},
    lyricInfo:[],

    tabs:["歌曲","歌词"],
    currentTabIndex: 0,
    contentHeight : 840,

    currentTime: 0,
    durationTime: 0,
    progressPercent:0,
    isSliding: false,
    currentOneLyricContent:"",
    currentOneLyricIndex:-1,

    isPlaying: true,

    loopMode:1,

    songList:[],
    songIndex:0
  },
  onLoad(options){
    this.setData({
      contentHeight:app.globalAppData.contentHeight
    })
    const id = options.id
    this.playNewSong(id)
    playerContext.onTimeUpdate(()=>{
      if(!this.data.isSliding){
        // 获取当前播放时间
        const currentTime = playerContext.currentTime * 1000;
        const progressPercent = currentTime/this.data.durationTime * 100
        this.setData({currentTime,progressPercent})

        // 匹配一句歌词
        const lyricLength = this.data.lyricInfo.length
        if (!lyricLength) return
        let currentLrcIndex = lyricLength - 1
        for (let index = 0; index < lyricLength; index++) {
          const lrc = this.data.lyricInfo[index];
          if(lrc.time>currentTime){
            currentLrcIndex = index - 1
            break
          }
        }
        if (currentLrcIndex ===  this.data.currentOneLyricIndex) return
        const currentOneLyricContent = this.data.lyricInfo[currentLrcIndex].content
        this.setData({currentOneLyricContent,currentOneLyricIndex:currentLrcIndex})
      }
    })
    playerContext.onWaiting(()=>{
      playerContext.pause()
    })
    playerContext.onCanplay(()=>{
      playerContext.play()
    })

    playerStore.onStates(["songList","selectIndex"],(ctx)=>{
      console.log("onStates songList index",ctx)
      if(ctx.songList){
        this.setData({songList:ctx.songList})
      }
      if(ctx.selectIndex !== undefined){
        this.setData({songIndex:ctx.selectIndex})
      }
    })
  },

  // 播放一首歌
  playNewSong(id){
  //重置数据
    this.setData({
      songInfo:{},
      lyricInfo:[],
      currentTime:0,
      durationTime:0,
      progressPercent:0,
      isSliding:false,
      currentOneLyricContent:"",
      currentOneLyricIndex:-1,
    })

    this.data.id = id 
    this.fetchSongInfo()
    this.fetchSongLyric()

    playerContext.stop()
    playerContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    playerContext.autoplay = true
  },
  
  // ========== 事件处理 ========== 
  onNavBarLeftAction(){
    wx.navigateBack()
  },
// 顶部tab按钮切换分页
  onTabClick(event){
    const selectIndex = event.currentTarget.dataset.index
    this.setData({currentTabIndex:selectIndex})
  },
  // 监听swiper的滚动
  onSwiperChanged(event){
    console.log(event)
    const changedIndex = event.detail.current
    this.setData({currentTabIndex:changedIndex})
  },
// 监听点击播放进度条
  onSliderChanged(event){
    const seekTime = event.detail.value/100 * this.data.durationTime
    console.log("seekTo",seekTime/1000)
    playerContext.seek(seekTime/1000)
    this.data.isSliding = false
  },
// 监听滑动播放进度条
  onSliderChanging(event){
    this.data.isSliding = true
    const changingTime = event.detail.value/100 * this.data.durationTime
    this.setData({currentTime:changingTime})
  },
// 暂停or播放
  onPalyOrPause(){
    if(this.data.isPlaying){
      playerContext.pause()
      this.setData({isPlaying: false})
    }else{
      playerContext.play()
      this.setData({isPlaying: true})
    }
  },
// 上一首
  onPreviousSong(){
    this.handleNewSong(false)
  },
  // 下一首
  onNextSong(){
    this.handleNewSong()
  },

  handleNewSong(next=true){
    let newIndex = this.data.songIndex
    switch (this.data.loopMode) {
      case 1:
        newIndex =  next? this.data.songIndex+1 : this.data.songIndex-1
        if (newIndex > this.data.songList.length -1) newIndex = 0
        if (newIndex < 0) newIndex = this.data.songList.length -1
        break;
      case 2:
        break
      case 3:
        newIndex = Math.floor(Math.random()*this.data.songList.length)
      default:
        break;
    }
    console.log("newIndex is",newIndex)
    const newSong = this.data.songList[newIndex]
    this.playNewSong(newSong.id)
    playerStore.setState("selectIndex",newIndex)
  },
// 切换循环模式
  onLoopModeChanged(){
    let newMode = this.data.loopMode + 1
    if (newMode>3)newMode = 0
    this.setData({loopMode:newMode})
  },

  //  ========== 网络请求 ========== 
  async fetchSongInfo(){
    const res = await getSongDetail(this.data.id)
    console.log("歌曲详情：",res.songs[0])
    this.setData({
      songInfo : res.songs[0],
      durationTime: res.songs[0].dt
    })
  },
  async fetchSongLyric(){
    const res = await getSongLyric(this.data.id)
    const lrcText = res.lrc.lyric
    const lrcs = parseLyric(lrcText)
    console.log(lrcs)
    this.setData({
      lyricInfo : lrcs
    })
  }
})