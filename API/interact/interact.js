// pages/interact/interact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toastClick: function(){
    /**不需要手动代码将其关闭, 自动到时间就关了 */
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })

  },
  modalClick: function () {

    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      showCancel: true,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  loadingClick: function () {
    /**这个跟toast里的loading的区别在于需要手动关闭 */
    wx.showLoading({
      title: '正在加载中...',
    })
    /**设置定时器手动关闭 */
    setTimeout(function(){
      wx.hideLoading()
    },2000)

  },
  actionsheetClick: function () {
    wx.showActionSheet({
      itemList: [
          'item1',
          'item2',
          'item3'
        ],
      success(res) {
        //只能通过这个序号区分点了那个选项
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }
})