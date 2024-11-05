<template>
  <div class="overlay">
    <!-- 在这里添加你想显示的元素 -->
    <div class="overlay-content">
      <button @click="handleOverlayClick">Click Me</button>
      <div Ref="containerRef" class="transparent-overlay" @click.stop></div>
      <div v-if="showWindow" class="sliding-window">
        <!-- 在这里添加你想显示的窗口内容 -->
        <p>这是一个滑出的窗口</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
const showWindow = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const handleOverlayClick = () => {
  console.log('Overlay button clicked')
  const transparentOverlay = document.querySelector('.transparent-overlay') as HTMLElement
  if (transparentOverlay) {
    transparentOverlay.style.pointerEvents = 'visible'
    transparentOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
  }
  showWindow.value = !showWindow.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    console.log('Clicked outside the container')
    // 在这里处理点击容器外部的逻辑
    const transparentOverlay = document.querySelector('.transparent-overlay') as HTMLElement
    if (transparentOverlay) {
      showWindow.value = !showWindow.value
      transparentOverlay.style.pointerEvents = 'none'
      transparentOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
  }
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
.transparent-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* 半透明黑色背景 */
  pointer-events: none; /* 确保 transparent-overlay 不能接收事件 */
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

.sliding-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.3s ease-in-out;
}

.sliding-window-enter-active,
.sliding-window-leave-active {
  transition: opacity 0.5s;
}

.sliding-window-enter, .sliding-window-leave-to /* .sliding-window-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
