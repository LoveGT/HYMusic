import hyRequest from "./index"
export function getBanners() {
  return hyRequest.get("/banner", {
    type: 2
  })
}
export function getRankings(idx) {
  return hyRequest.get("/top/list", {
    idx: idx
  })
}
export function getSongMenu(cat = "全部", limit = 6, offset = 0) {
  return hyRequest.get("/top/playlist", {
    cat: cat,
    limit: limit,
    offset: offset
  })
}

// 歌单详情
export function getSongDetail(id) {
  return hyRequest.get('/playlist/detail/dynamic', {
    id: id
  })
}