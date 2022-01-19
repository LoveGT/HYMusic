import hyRequest from "./index"

export function getTopMvList(params) {
  return hyRequest.get('/top/mv', params)
}

/**
 * 请求mv的播放地址
 * @param {number} id MV的id
 */
export function getMvUrl(id) {
  return hyRequest.get("/mv/url", {
    id: id
  })
}

/**
 * 请求mv的详情
 * @param {number} mvId  MV的id
 */
export function getMvDetail(mvid) {
  return hyRequest.get('/mv/detail', {
    mvid: mvid
  })
}
/**
 * 请求相关mv的接口
 * @param {number} id 
 */
export function getRelatedMv(id) {
  return hyRequest.get("/related/allVideo", {
    id: id
  })
}