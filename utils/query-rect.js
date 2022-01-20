/**
 * 查询矩形的属性函数
 * @param {htmlElement} selector 
 */
export default function (selector) {
  return new Promise((reslove, reject) => {
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec((res) => {
      reslove(res)
    })
  })
}