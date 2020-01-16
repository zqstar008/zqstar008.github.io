// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:2020,
    list:["美美英","帅潘潘",'靓左左','暴雷雷'],
    flag:!!0,
    word:"努力就一定可以拿到offer",
    imgURL:"http://118.190.204.9/faded/photo/dog2.jpg",
    toggle:true,
    lastName :"小飞侠",
    num:[1,2,3,4,5,6,7,8,9],
    carList:[],
    item:{
      index:1,
      msg:"1910-daydayup",
      time:'2020-1-16'
    },
    likeData:{
      who:'大雷雷',
      count:1314
    }
  },
  parentAction(){
    wx.showModal({
      title:"这是父元素事件"
    })
  },
  childCatch(){
    console.log("catch-一定阻止事件冒泡")
    wx.showModal({
      title:"catch-一定阻止事件冒泡"
    })
  },
  childbind(){
    console.log("bind-不会阻止事件冒泡")
    wx.showModal({
      title:"bind-不会阻止事件冒泡"
    })
  },
  getWord(e){
    this.setData({
      word:e.detail.value
    })
  },
  tapName(e){
    console.log(e)
    console.log(e.target.dataset.word)
  },
  changeCount(){
    this.setData({
      count: ++this.data.count
    })
  },
  changeToggle(e){
    console.log(e)
    this.setData({
      toggle:e.detail.value
    })
  },

  changeFlag(){
    this.data.flag=!this.data.flag
    this.setData({
      flag:this.data.flag
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.getSystemInfo({
    //   success(res) {
    //     console.log(res.model)
    //     console.log(res.pixelRatio)
    //     console.log(res.windowWidth)
    //     console.log(res.windowHeight)
    //     console.log(res.language)
    //     console.log(res.version)
    //     console.log(res.platform)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '1910-勇争第一!',
      path: 'page/home/home'
    }
  }
})