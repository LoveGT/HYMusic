import hyRequest from "./index"

export function getHotSearch(keywords) {
  return hyRequest.get("/search/hot")
}
export function getSearchSuggest(keywords) {
  return hyRequest.get("/search/suggest", {
    keywords: keywords,
    type: "mobile"
  })
}