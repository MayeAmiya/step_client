<template>
  <div class="desktop-container">
    <MapContainer />
    <div class="overlay">
      <div class="overlay-content">
        <group />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MapContainer from './desktop/MapContainer.vue'
import group from './desktop/group.vue'
</script>

<style scoped>
.desktop-container {
  width: auto; /* 占满整个视口宽
  justify-content: center;
  align-items: center;度 */
  height: auto; /* 占满整个视口高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px; /* 添加一些内边距 */
  background-color: #f0f0f0; /* 添加背景颜色以便更容易看到 */
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* 确保 overlay 不能够接收事件 */
  color: white; /* 文字颜色 */
}

.overlay-content {
  pointer-events: auto; /* 确保 overlay-content 能够接收事件 */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
