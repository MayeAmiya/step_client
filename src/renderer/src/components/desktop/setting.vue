<template>
  <div class="overlay">
    <!-- 在这里添加你想显示的元素 -->
    <div class="overlay-content">
      <button v-if="isLeaving" class="menu-button" @click.stop="handleOverlayClick">&#9776;</button>
    </div>
    <div class="overlay-content">
      <div ref="containerRef" class="transparent-overlay" @click="handleClickOutside"></div>
    </div>
    <div class="overlay-content">
      <transition name="sliding-window" @after-leave="afterLeave">
        <div v-if="showWindow" class="sliding-window" @click.stop>
          <h1 v-if="playgroundCheck" style="color: black">SETTING</h1>
          <h1 v-if="!playgroundCheck" style="color: black">SETTING PlayGroundMOD</h1>

          <hr style="border: 1px solid black; width: 100%" />

          <Playground_button
            :playground-check="playgroundCheck"
            @update:playground-check="playgroundCheck = $event"
          />

          <hr style="border: 1px solid black; width: 100%" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Playground_button from './setting/playground_button.vue'
const playgroundCheck = ref(false)

const isLeaving = ref(true)
const showWindow = ref(false)
const afterLeave = () => {
  showWindow.value = false
  isLeaving.value = true
  const transparentOverlay = document.querySelector('.transparent-overlay') as HTMLElement
  if (transparentOverlay) {
    showWindow.value = false
    transparentOverlay.style.pointerEvents = 'none'
    transparentOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
  }
}

const handleOverlayClick = () => {
  console.log('Overlay button clicked')
  const transparentOverlay = document.querySelector('.transparent-overlay') as HTMLElement
  if (transparentOverlay) {
    transparentOverlay.style.pointerEvents = 'auto'
    transparentOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
  }
  if (showWindow.value) {
    isLeaving.value = true
  } else {
    isLeaving.value = false
    showWindow.value = true
  }
}

const handleClickOutside = () => {
  console.log('Clicked outside the container')
  // 在这里处理点击容器外部的逻辑
  showWindow.value = false
}

onMounted(() => {
  console.log('start')
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.overlay {
  position: relative;
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

.menu-button {
  position: absolute;
  top: 2vh; /* 增加间隙 */
  left: 2vw; /* 增加间隙 */
  background-color: white; /* 设置为白色背景 */
  border: none;
  font-size: 30px; /* 增大图标 */
  width: 5%;
  height: 5%;
  min-width: 50px; /* 设置最小宽度 */
  min-height: 50px; /* 设置最小高度 */
  cursor: pointer;
  color: black; /* 设置为黑色文字 */
  border-radius: 5px; /* 增加圆角 */
  z-index: 12; /* 确保它覆盖在父元素以及父元素的其他子元素之上 */
}
.menu-button:hover {
  font-weight: bold; /* 选中时字体加粗 */
}

.transparent-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* 半透明黑色背景 */
  pointer-events: none; /* 确保 transparent-overlay 不能接收事件 */
  z-index: 10; /* 确保它覆盖在父元素以及父元素的其他子元素之上 */
}

.sliding-window {
  position: absolute;
  top: 0;
  left: 0;
  width: 80vw;
  max-width: 600px;
  height: 100vh;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.5s ease-in-out;
  z-index: 11; /* 确保它覆盖在父元素以及父元素的其他子元素之上 */
}

.sliding-window-enter {
  transform: translateX(100%);
  opacity: 1;
}
.sliding-window-leave-to {
  transform: translateX(-100%);
  opacity: 1;
}
</style>
