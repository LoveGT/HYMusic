import hyRequest from "./index"

export function getTopMvList(data) {
  return hyRequest.get('/top/mv', {data})
}