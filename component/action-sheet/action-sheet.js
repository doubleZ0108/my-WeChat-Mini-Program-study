// pages/form/form.js
Page({

  data: {
    hide: true,
    text: null
  },
  click: function () {
    this.setData({ hide: false })
  },
  change: function () {
    //当点击其他地方的时候也会触发这个事件, 所以空白处跟取消的效果是一样的
    this.setData({ hide: true })
  },
  itemClick: function (event) {
    //console.log(event)
    this.setData({ text: 'name:' + event.currentTarget.dataset.name + ' num:' + event.currentTarget.dataset.num })
  }
})