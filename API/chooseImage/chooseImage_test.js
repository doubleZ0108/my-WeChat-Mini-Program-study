Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoUrl:[],
    hide: true,
  },
  btnClick:function(){
    this.setData({ hide: false })
  },
  change: function () {
    this.setData({ hide: true })
  },
  itemClick: function (event) {
    console.log(event)
    this.setData({hide : true})

    var that = this;

    if(event.currentTarget.dataset.name == 'album'){
      wx.chooseImage({
        sizeType: ['original', 'compressed'], //指定是原图还是压缩图, 默认二者都有
        sourceType: ['album'],      //指定来源是相册还是相机, 默认二者都有

        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          that.setData({ photoUrl: tempFilePaths })
        }
      })
    }else if (event.currentTarget.dataset.name == 'camera'){
      wx.chooseImage({
        sizeType: ['original', 'compressed'], //指定是原图还是压缩图, 默认二者都有
        sourceType: ['camera'],      //指定来源是相册还是相机, 默认二者都有

        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          that.setData({ photoUrl: tempFilePaths })
        }
      })
    }
  }
})