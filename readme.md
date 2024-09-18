8天跟着coder why学习小程序原生开发，学习内容：

# Day01内容回顾

## 一. 邂逅小程序开发

### 1.1. 认识小程序开发

* 小程序的介绍
* 各个平台小程序介绍
* 为什么各个平台都有推出自己的小程序?



### 1.2. 小程序开发技术选择

* 小程序由谁开发:
  * 前端

* 原生小程序开发
* 小程序开发框架:
  * mpvue
  * wepy
* 跨平台框架:
  * uniapp
  * taro



### 1.3. 小程序学习的前提

* WXML: HTML
* WXSS: CSS
* JavaScript+WXS: JavaScript





### 1.4. 小程序的准备工作

* AppID
* 小程序开发工具





### 1.5. 创建项目-界面-目录结构







### 1.6. VSCode开发小程序





### 1.7. 小程序开发体验

* 数据绑定
* 列表展示
* 计数器案例



### 1.8. 小程序的MVVM架构思想





## 二. 小程序的架构和配置

### 2.1. 小程序的双线程模型

* webview
* jscore

skyline(了解, beta)

* coderwhy -> 邂逅flutter开发(底层渲染原理)





### 2.2. 常见的配置文件

* project.config.json
  * project.private.config.json -> .gitignore

* sitemap





### 2.3. app.json配置文件

* 应用程序配置
  * pages
  * window
  * tabBar



### 2.4. page.json配置文件

* 覆盖全局的配置
* 下拉刷新/上拉加载更多
  * Page({ onPullDownRefresh, onReachBottom })
* 功能的实现










# Day02内容回顾

## 一. 注册App和注册Page

### 1.1. 注册App

* App({})



#### 1.1.1. 判断进入场景

* onLaunch
* onShow
  * options
    * scene属性



#### 1.1.2. 全局共享数据

* globalData
* 页面:

```js
const app = getApp()
app.globalData.xxx
```





#### 1.1.3. 页面启动操作

* 登录操作
* 将数据保存Storage中
* 下次重启可以从Storage读取数据
* 保存到globalData中







### 1.2. 注册Page

#### 1.2.1. 网络请求-拿到数据

* 网络请求
* 获取数据 - 保存data
* 在wxml中使用swiper-swiper-item进行展示



#### 1.2.2. 在data中初始化数据





#### 1.2.3. wxml事件绑定函数





#### 1.2.4. 绑定其他事件

* 下拉刷新
* 达到底部
* 页面滚动





## 二. 常见的内置组件

### 2.1. text组件





### 2.2. button组件

#### 2.2.1. button常见属性



#### 2.2.2. open-type

*  getUserProfile





### 2.3. view组件





### 2.4. image组件

* mode属性:
  * widthFix
* wx.chooseMedia: 选择相册中图片





### 2.5. scroll-view

* 滚动的前提:
  * 固定的宽度或者高度
  * 内容需要超出宽度或者高度
  * 设置scroll-x或scroll-y
* 滚动的监听
  * 滚动到左边
  * 滚动到右边
  * 滚动的过程





### 2.6. 组件共有属性

* id/class/style
* hidden
* data-*
* bind/catch





### 2.7. input双向绑定







## 三. wxss编写样式

### 3.1. 编写方式

* 全局样式
* 页内样式
* 行内样式





### 3.2. rpx的单位







# Day03内容回顾

## 一. WXML的语法细节

### 1.1. WXML的Mustache语法



### 1.2. WXML的wx:if/elif/else



### 1.3. hidden属性以及区别



### 1.4. wx:for列表循环

* 基本使用
* block
* item/index的名称
* key的作用和用法:
  * 用法一: 字符串, 取item的property
  * 用法二: *this





## 二. WXS的语法

### 2.1. 基本使用

* wxs的标签
* wxs的独立文件, src引入



### 2.2. 案例练习

* 书籍价格加符号
* 书籍的总价格
* 后面项目的案例:
  * 对count格式化
  * 对time格式化





## 三. 事件处理

### 3.1. 基本事件相关





### 3.2. Event对象细节

* target/currentTarget的区别
* touches/changedTouches区别(了解)





### 3.3. 事件传递参数

* data-*传递
* event.currentTarget.dataset.index



### 3.4. 捕获和冒泡过程





### 3.5. catch和mark

* catch阻止进一步传递
* mark也可以传递参数





## 四. 组件化开发

### 4.1. 组件化开发的介绍



### 4.2. 创建自定义组件

* 创建组件, json的component: true
* 在页面: usingComponents注册





### 4.3. 组件的样式细节





### 4.4. 组件的数据传递

#### 4.4.1. properties





#### 4.4.2. externalClasses





#### 4.4.3. 自定义事件





### 4.5. 自定义组件tab-control案例









# Day04内容回顾

## 一. 组件化开发

### 1.1. 直接调用子组件的方法





### 1.2. 插槽的使用

* 单个插槽
  * 默认值
* 多个插槽





### 1.3. Behaviors混入







### 1.4. 生命周期函数

* 组件的生命周期函数
* 页面的生命周期函数





### 1.5. Component选项









## 二. 系统API调用

### 2.1. 网络请求API

* 基本使用
* 域名配置
* 工具封装:
  * 函数封装
  * 类封装





### 2.2. 弹窗和分享

* showToast
* showModal
* showActionSheet
* onShareAppMessage







### 2.3. 设备和位置信息

* wx.getSystemInfo
* wx.getLocation()
  * app.json配置





### 2.4. Storage的存储







### 2.5. 页面跳转和数据传递

* navigateTo
* navigateBack



数据传递:

* ?queryString
* getCurrentPages -> prePage.setData
* events -> eventChannel



组件跳转

* navigator组件





### 2.6. 登录流程

* 登录的身份的标题
  * openid
* 登录流程

* 登录代码演练



# Day05内容回顾

## 一. 项目的搭建

### 1.1. 创建一个新项目





### 1.2. 创建项目目录结构





### 1.3. 搭建tabBar页面







## 二. 视频页面

### 2.1. 请求基本数据和展示

* 网络请求进行分层结构
* Promise -> await/async





### 2.2. 上拉加载更多功能

* 监听滚到到底部
* 加载更多的数据
  * offset
  * [...this.data.videoList, ...res.data]
  * hasMore



### 2.3. 下拉刷新的功能

* 开启下拉刷新
* 监听下拉刷新
* 重置变量
  * offset = 0
  * videoList = []
  * hasMore = true
* 请求结束后, 结束下拉刷新





## 三. 视频详情

### 3.1. 点击Item跳转到详情

* video-item组件的监听点击
  * data-
* video-item组件的内部监听
  * this.properties.itemData



### 3.2. 获取播放地址Video

* 获取播放地址
* 使用video组件播放





### 3.3. 获取详情的其他数据

* MV详情
* MV关联推荐视频





### 3.4. 滚动的页面展示

* page滚动
* scroll-view滚动





## 四. 音乐页面

### 4.1. 搜索框的展示

* 安装vant
  * npm install @vant/weapp
  * 构建npm
* 演练vant的使用
* 搭建搜索框
  * 设置属性
  * 监听点击, 跳转搜索页面

* 重要: 覆盖vant样式
  * CSS属性
  * CSS变量



### 4.2. 轮播图的展示

#### 4.2.1. 请求轮播数据和基本展示





#### 4.2.2. 轮播图的基本样式调整

* 页面的内边距
* 轮播图的圆角





#### 4.2.3. 轮播图的动态计算

* 根据加载出来的图片, 计算轮播图的高度
* querySelect
* 对方法调用进行节流操作





### 4.3. area-header的封装



# Day06内容回顾

## 一. 推荐歌曲

### 1.1. 音乐页面请求数据和展示数据





### 1.2. hy-event-store数据共享





### 1.3. 推荐数据Store的共享数据







## 二. 歌单展示

### 2.1. 获取歌单, 展示歌单





### 2.2. 滚动的样式调整

* width: 100% -> screenWidth -> app.globalData
* scroll-view -> flex -> margin-right
  * dib -> display: inline-block





### 2.3. 封装menu-area组件





### 2.4. 点击更多展示歌单页面

* Promise.all

![1660382822342](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\1660382822342.png)





## 三. 巅峰榜

### 3.1. 在rankingStore请求和保存数据





### 3.2. 在music页面中获取Store中数据





### 3.3. 封装组件进行展示数据







## 四. 歌单详情

### 4.1. 排行榜数据的共享和展示





### 4.2. 推荐歌曲的共享和展示





### 4.3. 歌单详情的id-请求数据-展示数据





### 4.4. 歌单的header的封装和展示

![1660382989572](C:\Users\DELL\AppData\Roaming\Typora\typora-user-images\1660382989572.png)





## 五. 音乐页面的优化

* 如果没有数据, 那么先不展示对应的区域
  * wx:if的判断






# Day07内容回顾

## 一. 播放页布局

### 1.0. 点击Item跳转





### 1.1. 背景毛玻璃

* image -> 背景
* view -> blur毛玻璃





### 1.2. 自定义导航栏(掌握)





### 1.3. 导航栏标题和页面左右滚动

* Swiper/Swiper-Item 轮播图
* 标题的点击 -> 轮播图的切换





### 1.4. 歌曲页面的布局

* album
* info
* lyric
* progress
* controls





## 二. 歌曲进度的控制

### 2.1. 歌曲播放

* audioContext = wx.createInnerAudioContext()
* src属性
* autoplay





### 2.2. onTimeUpdate

* 改变当前的时间和sliderValue





### 2.3. 监听slider的点击

* bindchange
  * value
  * 计算currentTime
  * seek(currentTime)
  * setData({currentTime, value})





### 2.4. 监听slider的滑动

* bindchanging
  * value
  * currentTime
  * isSliderChanging



### 2.5. seek(time) bug处理

* throttle: 节流控制
  * leading: false
  * trailing: false
* isWaiting: true



### 2.6. 播放和暂停功能





## 三. 歌词的展示

### 3.1. 请求和解析歌词

* 正则表达式





### 3.2. time匹配歌词

* 循环所有的歌词, 找到第一个比当前时间大的一句歌词
  * i - 1
* index: length - 1

* currentLyricText
* currentLyricIndex
  * 性能优化 index === currentLyricIndex return





### 3.3. 歌词的文字匹配思路







### 3.4. 全部歌词的展示



# Day08内容回顾

## 一. 播放页功能

### 1.1. 歌词分页展示

* 上下有间距
  * padding
* 根据当前的歌词进行滚动
  * lyricIndex * 35
* 选中某一句歌词
  * index === lyricIndex ? 'active'





### 1.2. 歌曲列表数据

* playerStore
  * playSongList
  * playSongIndex





### 1.3. 上一首/下一首

* index + 1 / -1
* 判断边界
* 获取当前歌曲
* 记录最新的索引





### 1.4. 播放模块的切换

* 0: 顺序播放
* 1: 单曲循环
* 2: 随机播放





## 二. Store代码重构(选做)

### 2.1. 播放歌曲的代码重构

* setupPlayMusic()
* playMusicWidthSongIdAction





### 2.2. 播放和暂停的功能





### 2.3. 播放模式的切换





### 2.4. 播放新歌曲的抽取





## 三. 首页的play-bar

### 3.1. 界面搭建





### 3.2. 交互的操作





### 3.3. 动画的展示







## 四. 项目打包和发布

### 4.1. 分包处理





### 4.2. 包的大小优化

* vant





### 4.3. 项目发布

* 成员管理
* 版本管理



















































































