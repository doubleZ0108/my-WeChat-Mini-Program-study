// pages/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons:[
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    color:"green"
  },

  iconClick:function(){
    this.setData({ color: this.randcolor()})
  },
  randcolor:function(){
    /*第一种产生随机颜色的方法*/
    //return '#' + Math.floor(Math.random() * 256).toString(10)

    /*第二种产生随机颜色的方法*/
    //return '#' + Math.floor(Math.random() * 0xffffff).toString(16);

    /*第三种产生随机颜色的方法*/
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    console.log(r+' '+g+' '+b)
    return "rgb(" + r + ',' + g + ',' + b + ")";
  }
})