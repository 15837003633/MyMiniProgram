// pages/index/index.js
Page({
    data:{
        message: "hello wd",
        movies:[
            "星际穿越",
            "盗梦空间",
            "勇敢的心"
        ],
        countNum:0
    },
    // es5
    addCountNum: function(){
        console.log("计数器增加");
        this.setData({
            countNum: this.data.countNum+=1
        })
        
    },
    // es6:函数作为对象的属性的简写方式，
    // 注意这里不能使用箭头函数：箭头函数没有自己的 this 值，它会继承所在上下文的 this 值。
    reduceCountNum(){
        console.log("计数器减少");
        this.setData({
            countNum: this.data.countNum-=1
        })
    }
})