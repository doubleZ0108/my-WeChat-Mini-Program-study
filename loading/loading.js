//loading加载不能设置duration让其自动关闭, 只能手动设置值让他关闭
Page({

  data: {
    hide: true,
  },
  click: function () {
    this.setData({ hide: false })

    /*此处进行自己的业务逻辑*/

    //此处为模拟一个1.5秒的时间
    var that = this;
    setTimeout(function(){
      that.setData({hide : true})
    },1500)

  },
  change: function () {
    //当时间达到duration时会自动触发change事件
    //duration的单位是毫秒
    this.setData({ hide: true })
  }
})