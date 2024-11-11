<template>
  <div class="desktop-container">
    <infViewer default="Map" class="map" />
    <div class="overlay">
      <div class="overlay-content-setting">
        <Setting />
      </div>

      <div class="overlay-content-person">
        <Person />
      </div>

      <div class="overlay-content-bbs">
        <BBS />
      </div>

      <div class="overlay-content-search">
        <Search />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import infViewer from './desktop/infViewer.vue'
import Setting from './desktop/setting.vue'
import Person from './desktop/person.vue'
import BBS from './desktop/bbs.vue'
import Search from './desktop/search.vue'
</script>

<style scoped>
.desktop-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* 确保 overlay 不能够接收事件 */
}

.overlay-content-setting {
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
}
.overlay-content-person {
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
}
.overlay-content-bbs {
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
}

.overlay-content-setting {
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
}
</style>
