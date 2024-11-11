<template>
  <div class="overlay">
    <!-- 在这里添加你想显示的元素 -->
    <div class="overlay-content">
      <img src="../../assets/head.png" alt="Avatar" class="avatar" @click="show = !show" />
    </div>
    <Transition :duration="550" name="nested">
      <div v-if="show" class="outer">
        <div class="inner">Hello</div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
const showWindow = ref(false)
const show = ref(true)

const handleClickOutside = () => {
  console.log('Clicked outside the container')
  // 在这里处理点击容器外部的逻辑
  const transparentOverlay = document.querySelector('.transparent-overlay') as HTMLElement
  if (transparentOverlay) {
    showWindow.value = false
    transparentOverlay.style.pointerEvents = 'none'
    transparentOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
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

.avatar {
  position: absolute;
  top: 2vh; /* 增加间隙 */
  right: 2vw; /* 增加间隙 */
  width: 5%;
  min-width: 50px; /* 设置最小宽度 */
  min-height: 50px; /* 设置最小高度 */
  border-radius: 50%; /* 使头像成为圆形 */
  overflow: hidden; /* 确保内容不会溢出 */
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片覆盖整个容器 */
}

.transparent-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* 半透明黑色背景 */
  pointer-events: none; /* 确保 transparent-overlay 不能接收事件 */
}

.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>
