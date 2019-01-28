// pages/form/form.js
Page({

  data: {

  },
  submitClick:function(event){
    console.log(event)
    console.log(event.detail.value.input+' '+event.detail.value.slider+' '+event.detail.value.switch)
  },
  resetClick:function(event){
    console.log(event)
  }
})