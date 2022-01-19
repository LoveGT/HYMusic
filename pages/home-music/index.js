// pages/home-music/index.js
import {
  getBanners
} from "../../service/api_music"
Page({
  data: {
    swiperHeight: 100,
    banners: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
  },
  getPageData: function () {
    getBanners().then(res=> {
      this.setData({
        banners: res.banners
      })
    })
  },
  handleSearchClick: function () {
    console.log(11111);
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },
  handleSwiperImageLoaded: function () {
    console.log('加载完成');
  }
})