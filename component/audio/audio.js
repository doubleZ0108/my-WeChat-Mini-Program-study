// pages/audio/audio.js
Page({
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    //这里的设置有bug
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {

  },
  /*以下三个意思意思, 展示下用法*/
  audioPlay:function(){
    this.audioCtx.play()
  },
  audioPause:function(){
    this.audioCtx.pause()
  },
  audioStart:function(){
    this.audioCtx.seek(0)
  },


  
  play:function(event){
    console.log(event)
  },
  pause: function (event) {
    console.log(event)
  },
  timeupdate: function (event) {
    //console.log(event)
  }
 
})