import {
  getMvDetail,
  getMvUrl,
  getRelatedMv
} from "../../service/api_video"

Page({
  data: {
    mvURLInfo: {},
    mvDetail: {},
    relatedVideo: [],
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
  },
  onLoad: function (options) {
    console.log(options);
    const id = options.id
    // 获取页面的数据
    this.getPageData(id)
  },
  getPageData: async function (id) {
    const res1 = await getMvUrl(id)
    const res2 = await getMvDetail(id)
    const res3 = await getRelatedMv(id)
    this.setData({
      mvURLInfo: res1.data,
      mvDetail: res2.data,
      relatedVideo: res3.data,
    })
  }
})