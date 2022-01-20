// components/song-menu-area/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ""
    },
    songMenu: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    screenWidth: app.globalData.screenWidth,
    screenHeight: app.globalData.screenHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
