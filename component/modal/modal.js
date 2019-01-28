// pages/modal/modal.js
Page({

  data: {
    hide : true,
  },
  confirm:function(event){
    this.setData({ hide: true })
  },
  cancel:function(event){
    this.setData({ hide: true })
  },
  click:function(){
    this.setData({hide : false})
  }
})