import { HYEventStore } from 'hy-event-store'

import { getRankings } from '../service/api_music'
const rankingMap = { 0: "newRanking", 1: "hotRanking", 2: "originRanking", 3: "upRanking" }
const rankingStore = new HYEventStore({
  state: {
    newRanking: {},
    hotRanking: {},
    originRanking: {},
    upRanking: {0:{}, 2:{}, 3:{}}
  },
  actions: {
    // 0:新歌榜
    // 1：热门榜
    // 2：原创榜
    // 3：飙升榜
    getRankingDataAction(ctx) {
      for(let i = 0; i<4; i++){
        getRankings(i).then(res => {
          ctx.hotRanking = res.playlist
          switch (i) {
            case 0:
              ctx.newRanking =res.playlist
              break;
            case 1:
              ctx.hotRanking = res.playlist
              break;
            case 2:
              ctx.originRanking = res.playlist
              break;
            case 3: 
              ctx.upRanking = res.playlist
              break;
          }
        })
      }
    }
  }
})

export {
  rankingStore,
  rankingMap
}
