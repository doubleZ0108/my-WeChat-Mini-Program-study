// pages/container/container.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    intoview:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  ScroolToUpper:function(event){
    console.log(event)
  },
  ScroolToLower:function(event){
    console.log(event)
  },
  Scrool:function(event){
    //console.log(event)
  },

  click:function(){
    //console.log("click...")

    this.setData({ scrollTop: this.data.scrollTop + 10})
    //this.setData({intoview : "blue"})
  }
})