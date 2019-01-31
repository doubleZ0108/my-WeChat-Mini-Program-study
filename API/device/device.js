Page({

  data: {
    clipboard_text: null,
    phoneNum: '15114305747'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**获取设备网络状态 */
    wx.getNetworkType({
      success: function(res) {console.log(res)},
    })

    /**获取设备信息 */
    wx.getSystemInfo({
      success: function(res) {console.log(res)},
    })

    /**连接的WIFI信息 */
    wx.getConnectedWifi({
      success: function (res) { console.log(res) },
    })

    /**电量信息 */
    wx.getBatteryInfo({
      success: function (res) { console.log(res) },
    })

    /**设置在该小程序下屏幕常量 (官方流氓) */
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })

    /**监听用户截屏  (不过貌似res是空的, 接收不到什么数据) */
    wx.onUserCaptureScreen(function(res){
      console.log("用户截屏了")
      console.log(res)
    })
  },



  addcontactClick: function(){
    wx.addPhoneContact({
      firstName: '吉吉',
      mobilePhoneNumber: '152116805515'
    })
  },
  clipboardClick: function(){
    var that = this;
    wx.getClipboardData({
      success: function(res){
        that.setData({clipboard_text : res.data})
      }
    })
  },
  phonecallClick: function(){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phoneNum
    })
  }

})