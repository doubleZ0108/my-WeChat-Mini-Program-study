Page({

  data: {
    item: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    text: ['CHN']
  },
  radiogroupchange: function (event) {
    //console.log(event.detail.value)
    this.setData({ text: event.detail.value })
  }

})