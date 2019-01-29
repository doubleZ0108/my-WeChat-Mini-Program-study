// pages/canvas/canvas.js
Page({

  data: {
    position:{
      x:0,
      y:0,
    }
  },
  canvasClick:function(){
    /*设置定时器 */
    setInterval(this.draw, 10) //每100毫秒执行一次draw方法
  },
  draw:function(){
    this.data.position.x++;
    this.data.position.y++;

    const context = wx.createCanvasContext('mycanvas')

    context.setStrokeStyle('#ff0000')   //设置颜色
    context.setLineWidth(2)             //设置线的宽度

    context.arc(this.data.position.x, this.data.position.y, 20, 0, 2 * Math.PI, true) //画圆
   
    context.stroke()
    context.draw()
  }
})