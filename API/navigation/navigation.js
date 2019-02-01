Page({

  data: {

  },

  onLoad: function (options) {

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })

    wx.showNavigationBarLoading()

    //比如当网络上的数据加载完成后调用↓
    wx.hideNavigationBarLoading()
  },

  onReady: function () {

  },

  
})