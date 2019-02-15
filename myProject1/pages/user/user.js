Page({

  data: {
    username:null,
    password:null,
  },

  usernameInput:function(event){
    //console.log(event)
    this.setData({ username : event.detail.value})
  },
  passwordInput:function(event){
    //console.log(event)
    this.setData({ password : event.detail.value})
  },

  btnClick:function(){
    
  }
})