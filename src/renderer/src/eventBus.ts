import { defineStore } from 'pinia'
import { TagInfoCollection } from './components/information/taginfo'
import { TagDataCollection } from './components/information/dataType'

import { Keyword } from './components/information/keyword'

export const useGlobalStore = defineStore('counter', {
  state: () => {
    const tagInfoList = new TagInfoCollection()
    tagInfoList.init()
    const tagDataList = new TagDataCollection()
    tagDataList.init()
    const keywordList = new Keyword()

    const functions = new Map<string, (...args: unknown[]) => unknown>()
    const currentCommpoent: string = ''
    const selectedTagIndex = -1
    const Global = {
      tagDataList,
      tagInfoList,
      keywordList,
      selectedTagIndex,
      functions,
      currentCommpoent
    }
    return { Global }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    setCandidatesFromTagInfo() {
      const keywordsList = this.Global.tagInfoList.tags.map((tag) => ({ keywords: tag.keywords }))
      this.Global.keywordList.setCandidatesFromTagInfo(keywordsList)
    },
    setFunction<T extends (...args: unknown[]) => unknown>(name: string, fn: T) {
      this.Global.functions.set(name, fn)
    }
  }
})

// 这里的信息都是更上一级 或者说electron的一个数据线程处理后抽出来的 在所属页面变化时 也会更新
