// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:null,
  },

  onLoad: function (options) {

    /*这是异步的存储, 发起API请求后会马上执行下面的代码, 不管是否存储成功*/
    //性能更好速度快
    wx.setStorage({
      key: 'testKey',
      data: 'testValue',
    })
    
    /*同步版本, 只有这个存储操作完成后(无论成功或是失败), 才继续执行接下来的代码*/
    //更安全 -> 如果紧接着写getStorage的话, 用异步的版本可能值还没设定成功就读
    wx.setStorageSync('myKey', 'myData')

  },


  getClick:function(){
    var that = this;

    wx.getStorage({
      key: 'myKey',
      success: function(res) {
        console.log(res)
        that.setData({text : res.data})
      },
    })
  },
  removeClick:function(){
    /**不是同步的只能清同步的, 两个都可以的, 唯一的区别是执行remove操作是同步还是异步 */
    wx.removeStorage({
      key: 'myKey',
      success: function(res) {console.log("清除textValue成功")},
    })
    wx.removeStorageSync('testKey')
  },
  clearClick:function(){
    /**随便用一个就行, 区别只是同步的还是异步的 */
    wx.clearStorage()
    //wx.clearStorageSync()
  }
  
})