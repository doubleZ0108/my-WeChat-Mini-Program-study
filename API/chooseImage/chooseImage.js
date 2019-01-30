Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoUrl: [

    ],
  },
  btnClick: function () {

    var that = this;

    wx.chooseImage({
      sizeType: ['original', 'compressed'], //指定是原图还是压缩图, 默认二者都有
      sourceType: ['album', 'camera'],      //指定来源是相册还是相机, 默认二者都有
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths

        that.setData({ photoUrl: tempFilePaths })
      }
    })

  }

})