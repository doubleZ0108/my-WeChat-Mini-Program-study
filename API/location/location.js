Page({

  data: {
    latitude:null,
    longitude:null,
    text:{
      name:null,
      address:null,
    }
  },

  onLoad: function (options) {

    /**使用位置API要在app.json中添加如下代码 */
    // "permission": {
    //   "scope.userLocation": {
    //     "desc": "你的位置信息将用于小程序位置接口的效果展示"
    //   }
    // }

    var that = this;

    wx.getLocation({
      type: 'wgs84',    //这个是全球定位系统, 另一个是国家测绘局的系统
      success(res) {
        that.setData({ latitude: res.latitude, longitude : res.longitude})
        
        const speed = res.speed
        const accuracy = res.accuracy
      }
    })
  },


  openClick:function(){
    const latitude = this.data.latitude;
    const longitude = this.data.longitude;
    
    wx.openLocation({
      latitude,
      longitude,
      scale: 18
    })
  },
  chooseClick:function(){
    var that = this;

    wx.chooseLocation({
      success: function (res) {
        console.log(res)

        that.setData({text: {name:res.name, address:res.address}})
      },
    })
  }
  
})