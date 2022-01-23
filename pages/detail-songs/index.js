import {
  rankingStore
} from "../../store/index"

import {getSongDetail} from "../../service/api_music"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    rankingName: "",
    songInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const type = options.type
    if (type === 'menu') {
      const id = options.id
      getSongDetail(id).then(res => {
        this.setData({
          songInfo: res.playlist,
          type: type
        })
      })
    } else if (type === "rank") {
      const rankingName = options.ranking
      this.setData({
        rankingName,
        type: type
      })
      console.log(rankingName, 'rankingName');
      rankingStore.onState(rankingName, this.getRankingData)
    }
  },
  getRankingData: function (res) {
    this.setData({
      songInfo: res
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if(this.data.ranking){
      rankingStore.offState(this.data.rankingName, this.getRankingData)
    }
  }
})