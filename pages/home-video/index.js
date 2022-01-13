 import getTopMvList from "../../service/api_video"
 // pages/home-video/index.js
 Page({

   /**
    * 页面的初始数据
    */
   data: {
     topMovs: []
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
     const params = {
       offset: 0,
       limit: 10
     }
     console.log(params);
     getTopMvList(params).then(res => {
       this.setData({
         topMovs: res.data.data
       })
     })
   }
 })