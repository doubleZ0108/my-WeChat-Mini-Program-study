// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: [],
  },

  imageClick: function(){
    
    /**1. 创建动画 */
    var animation = wx.createAnimation({
      duration: 3000,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0'
    })


    /**2. 设置动画 */
    //每遇到一个step才开始执行之前全部的动画

    // //边旋转边放大
    // animation.rotate(90).scale(2).step()

    // //先旋转再放大
    // animation.rotate(90).step()
    // animation.scale(0.5).step()
    
    animation.rotate(-90)       //旋转
    animation.scale(0.5)        //缩放
    animation.skew(45,30)       //倾斜
    animation.translate(20,20)  //平移
    animation.step()


    /**3. 将数据放到数组中给组件 */
    this.setData({ animationData : animation.export()})

  }
})