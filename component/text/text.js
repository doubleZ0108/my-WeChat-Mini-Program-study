// pages/text/text.js
const initData = "这里是文章内容...\n这里是第二行";
const extraline = [];

Page({
  data: {
    text : initData,
  },

  addline(event){
    extraline.push('other line\n')
    this.setData({text : initData + '\n' + extraline.join('\n')})
  },
  removeline:function(enent){
    if(extraline.length>0){
      extraline.pop()
      this.setData({text : initData + '\n' + extraline.join('\n')})
    }
  }
})