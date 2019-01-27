// pages/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    source: '/images/wechat.png',
  },

  activeend:function(event){
    console.log(event)
    this.setData({source : '/images/wechat_HL.png'})
  }
})