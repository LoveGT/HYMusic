 import {
   getTopMvList
 } from "../../service/api_video"
 // pages/home-video/index.js
 Page({

   /**
    * 页面的初始数据 
    */
   data: {
     topMovs: [],
     hasMore: true
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: async function (options) {
     //  const res = await getTopMvList({offset: 0, limit: 10})
     //  this.setData({
     //    topMovs: res.data
     //  })
     this.getTopMvData({
       offset: 0,
       limit: 10
     })
     //  getTopMvList().then(res => {
     //    this.setData({
     //      topMovs: res.data
     //    })
     //  })
   },
   // 封装网络请求的方法
   async getTopMvData(params) {
     wx.showNavigationBarLoading()
     const res = await getTopMvList(params)
     let newData = this.data.topMovs
     if (params.offset === 0) {
       newData = res.data
     } else {
       newData = [...newData, ...res.data]
     }
     this.setData({
       topMovs: newData,
       hasMore: res.hasMore
     })
     wx.hideNavigationBarLoading()
   },
   handleItemClick: function(event) {
    console.log(event, 'event');
   },
   onPullDownRefresh: async function () {
     //  const res = await getTopMvList()
     //  this.setData({
     //    topMovs: res.data
     //  })
     this.getTopMvData({
       offset: 0,
       limit: 10
     }) 
     wx.stopPullDownRefresh()
   },
   onReachBottom: async function () {
     if (!this.data.hasMore) return
     this.getTopMvData({
       offset: this.data.topMovs.length,
       limit: 10
     })
     //  if (!this.data.hasMore) return
     //  const res = await getTopMvList(this.data.topMovs.length)
     //  this.setData({
     //    topMovs: this.data.topMovs.concat(res.data),
     //    hasMore: res.hasMore
     //  })
   }
 })