import { defineStore } from 'pinia'
import { TagInfoCollection } from './components/information/taginfo'
import { TagDataCollection } from './components/information/dataType'

import { Keyword } from './components/information/keyword'
import { ref } from 'vue'

export const useGlobalStore = defineStore('counter', {
  state: () => {
    const playgroundMod = ref(false)
    const tagInfoList = new TagInfoCollection()
    tagInfoList.init()
    const tagDataList = new TagDataCollection()
    tagDataList.init()
    const keywordList = new Keyword()

    const Global = {
      playgroundMod,
      tagDataList,
      tagInfoList,
      keywordList
    }
    return { Global }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    setCandidatesFromTagInfo() {
      const keywordsList = this.Global.tagInfoList.tags.map((tag) => ({ keywords: tag.keywords }))
      this.Global.keywordList.setCandidatesFromTagInfo(keywordsList)
    }
  }
})

// 这里的信息都是更上一级 或者说electron的一个数据线程处理后抽出来的 在所属页面变化时 也会更新
