Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onReady: function(){
    //监听器 可以放在任何部分 只要开始播放音乐即会触发该函数
    //用处: 当监听到音乐播放的时候让专辑封面开始旋转
    wx.onBackgroundAudioPlay(function () {
      console.log("监听到 开始播放音乐")
    })
    wx.onBackgroundAudioPause(function(){
      console.log("监听到 暂停播放音乐")
    })
  },
  
  playBtnClick:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://dl.stream.qqmusic.qq.com/C400000K87Mw3uCNLd.m4a?guid=3197178030&vkey=32B80381836BE2F83F84E0F1E62ED714EECDBA0C07DA21AAADEEA59046FFF5FFE831FA141D4BD5F4FCD87FB7794CF1F23A3DDA8A61633138&uin=0&fromtag=66',
      title: '',
      coverImgUrl: '',
      success:function(){
        console.log("播放成功")
      }
    })
  },
  pauseBtnClick: function (){
    wx.pauseBackgroundAudio()

    /*获取当前播放状态, 可以设置定时器不断调用这个API做事情*/
    wx.getBackgroundAudioPlayerState({
      success: function(res){
        console.log(res)
      }
    })
  },
  stopBtnClick: function () {
    wx.stopBackgroundAudio()
  }
})