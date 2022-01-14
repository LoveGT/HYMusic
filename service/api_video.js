import hyRequest from "./index"

export function getTopMvList(params) {
  return hyRequest.get('/top/mv',  params)
}