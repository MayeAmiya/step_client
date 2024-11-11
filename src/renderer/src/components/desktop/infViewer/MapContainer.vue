<template>
  <div id="container"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

let map = null

const handleMapClick = (e) => {
  const lnglat = e.lnglat.getLng() + ',' + e.lnglat.getLat()
  console.log(lnglat)
  const lnglatInput = document.getElementById('lnglat')
  if (lnglatInput) {
    lnglatInput.value = lnglat
  }
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
        zoom: 11, // 初始化地图级别
        center: [113.53771, 34.80006] // 初始化地图中心点位置
      })
      const geolocation = new AMap.Geolocation()
      map.addControl(geolocation)

      map.on('click', handleMapClick)
    })
    .catch((e) => {
      console.log(e)
    })
})

onUnmounted(() => {
  map?.destroy()
})
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
