var myData = new Date();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: myData.getHours().toString()+':'+myData.getMinutes().toString(),
    date: myData.getFullYear().toString()+'-'+(myData.getMonth()+1).toString()+'-'+myData.getDate().toString(),
    region: ['吉林省','通化市','东昌区']
  },
  onShow:function(options){
    console.log("time is "+this.data.time)
    console.log("date is "+this.data.date)
    //此处为获取用户地址
    console.log(this.region)
  },
  timechange:function(event){
    this.setData({time : event.detail.value})
  },
  datechange:function(event){
    this.setData({date : event.detail.value})
  },
  regionchange:function(event){
    this.setData({region: event.detail.value})
  }
 
})