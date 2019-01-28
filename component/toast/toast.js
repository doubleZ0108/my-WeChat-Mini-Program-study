// pages/toast/toast.js
Page({

  //消息提示框
  data: {
    hide : true,
  },
  click:function(){
    this.setData({hide : false})
  },
  change:function(){
    //当时间达到duration时会自动触发change事件
    //duration的单位是毫秒
    this.setData({ hide: true })
  }
})