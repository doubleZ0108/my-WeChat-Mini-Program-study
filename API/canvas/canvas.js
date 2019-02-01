Page({

  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mydraw()
    this.mydrawImage()
  },

  mydraw: function(){

    /**1. 创建上下文对象, 参数是画布组件的canvas-id属性 */
    const ctx = wx.createCanvasContext('myCanvas')


    /**2. 样式配置部分:  */
    // ctx.setLineDash([5, 10], 3)      //虚线
    //ctx.setLineWidth(10)      //线条宽度(单位: px)
    ctx.setStrokeStyle('red')    //描边颜色
    ctx.setFillStyle('blue')     //填充颜色
    ctx.setFontSize(50)      //字体大小

    /**3. 两种方式绘图 */
      /**3.1 描边 */
        /**首先开始一个path */
      ctx.beginPath()

      ctx.strokeRect(50,50,60,40)   //矩形
      ctx.strokeText('double',50,150) //文字
      ctx.arc(80,270, 40, 0, 2 * Math.PI) //圆弧

      ctx.moveTo(50, 350)     //移动位置
      ctx.lineTo(230, 350)    //画线只能用stroke描绘

        /**以 stroke -> 描边 方式绘制 */
      ctx.stroke()
      ctx.closePath()


      /**3.2 填充 */
        /**首先开始一个path */
      ctx.beginPath()
      ctx.fillRect(170,50,60,40)
      ctx.fillText('double',50,200)
      ctx.arc(200, 270, 40, 0, 2 * Math.PI)

        /**以 fill -> 填充 方式绘制 */
      ctx.fill()
      ctx.closePath()

  
    /**4. 画图 */
    ctx.draw()

  },

  mydrawImage: function(){
    const ctx = wx.createCanvasContext('anotherCanvas')

    wx.chooseImage({
      success: function(res) {
        /**在画布上画图片 */
        ctx.drawImage(res.tempFilePaths[0], 0, 0, 300, 300)
        ctx.draw()
      },
    })
  }
})