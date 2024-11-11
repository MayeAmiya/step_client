<template>
  <div class="overlay">
    <!-- 在这里添加你想显示的元素 -->
    <div class="overlay-content">
      <h1 style="color: black" class="search">这是一个卡片栏</h1>
    </div>
  </div>
</template>

<script setup></script>

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

.search {
  position: absolute;
  bottom: 2vh; /* 增加间隙 */
  left: 50%;
  width: 80vw;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8); /* 半透明背景 */
  border-radius: 10px; /* 添加圆角 */
}
</style>
