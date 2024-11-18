<template>
  <div id="container" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

// 示例数据

let map = null

import { useGlobalStore } from '../../../eventBus'

const globalStore = useGlobalStore()
const tagInfoList = ref(globalStore.Global.tagInfoList)
const selectedKeywords = ref(globalStore.Global.keywordList.selected)
const selectedTagIndex = ref(globalStore.Global.selectedTagIndex)

const openPane = ref(globalStore.Global.functions.get('showDrawer'))

globalStore.$subscribe(() => {
  tagInfoList.value = globalStore.Global.tagInfoList
  // 重绘标签
  const newKeywords = globalStore.Global.keywordList.selected

  if (selectedKeywords.value !== newKeywords) {
    selectedKeywords.value = globalStore.Global.keywordList.selected
    if (map) {
      map.clearMap()
      addMarkers(AMap)
    }
  }
})

watch(selectedTagIndex, (newTag) => {
  if (newTag && map) {
    const tag = tagInfoList.value.tags.find((t) => t.id === newTag)
    if (tag) {
      globalStore.Global.selectedTagIndex = tag
    }
  }
})

const addMarkers = (AMap) => {
  // 启动容器时根据容器内标签列表初始化关键词列表
  globalStore.setCandidatesFromTagInfo()
  // 根据关键词列表选择显示标签
  tagInfoList.value.tags.forEach((tag) => {
    if (
      selectedKeywords.value.length === 0 ||
      selectedKeywords.value.some((keyword) => tag.keywords.includes(keyword))
    ) {
      const marker = new AMap.Marker({
        position: tag.location,
        title: tag.name,
        id: tag.id
      })
      marker.setMap(map)
      marker.on('click', () => {
        globalStore.Global.selectedTagIndex = tag.id
        console.log(globalStore.Global.selectedTagIndex)
        if (typeof openPane.value === 'function') {
          openPane.value = globalStore.Global.functions.get('showDrawer')
          openPane.value()
        } else {
          console.log(globalStore.Global.functions.get('showDrawer'))
          openPane.value = globalStore.Global.functions.get('showDrawer')
          openPane.value()
        }
      })
    }
  })
}

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: '2c30c6b1b049f794e650e0bffd49858e'
  }
  AMapLoader.load({
    key: 'e129fe02a7c0e1f0d934eda9da6c1f34', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale', 'AMap.Geolocation', 'AMap.ControlBar'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 14, // 初始化地图级别
        center: [113.536674, 34.817112], // 初始化地图中心点位置
        mapStyle: 'amap://styles/normal' // 使用 HTTPS 协议的资源
      })
      const geolocation = new AMap.Geolocation()
      map.addControl(geolocation)

      // 添加标记
      addMarkers(AMap)

      map.on('click', handleMapClick)
    })
    .catch((e) => {
      console.log(e)
    })
})

onUnmounted(() => {
  if (map) {
    map.destroy()
  }
})

const handleMapClick = (e) => {
  const lnglat = e.lnglat.getLng() + ',' + e.lnglat.getLat()
  console.log(lnglat)
  const lnglatInput = document.getElementById('lnglat')
  if (lnglatInput) {
    lnglatInput.value = lnglat
  }
}
</script>

<style scoped>
/* 添加一些样式 */
#container {
  width: 100%;
  height: 100%;
}
</style>
