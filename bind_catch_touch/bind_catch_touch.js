// pages/mytest/mytest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text : null,
  },

  btnTouchStart: function (){
    this.setData({text : 'start'})
  },
  btnTouchMove: function () {
    this.setData({ text: 'move' })
  },
  btnTouchEnd: function () {
    this.setData({ text: 'end' })
  },


  bottomClick: function(){
    console.log("--------bottom click--------")
  },
  middleClick: function () {
    console.log("--------middle click--------")
  },
  topClick: function () {
    console.log("--------top click--------")
  }
})