<template>
  <div class="desktop-container">
    <infViewer default="Map" class="map" />
    <div class="overlay">
      <div class="overlay-content"><Setting /></div>
      <div class="overlay-content"><Person /></div>
      <!-- <div class="overlay-content"><Setting /></div>
      <div class="overlay-content"><Setting /></div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import infViewer from './desktop/infViewer.vue'
import Setting from './desktop/setting.vue'
import Person from './desktop/person.vue'
// import BBS from './desktop/bbs.vue'
// import Search from './desktop/search.vue'
</script>

<style scoped>
.desktop-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.map {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

.overlay-content {
  position: absolute;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>
