<template>
  <div class="connect">
    <div class="avatar-container">
      <div class="avatar">
        <img src="../../assets/head.png" alt="Avatar" />
      </div>
    </div>
    <h1>Name</h1>
    <h2>Email</h2>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
import eventBus from '@renderer/eventBus.vue'
const login = () => {
  // Add your login logic here
  const openDesktop = eventBus.value.get('openDesktop')
  if (openDesktop) {
    openDesktop()
  }
  console.log('Login button clicked')
}
</script>

<style scoped>
.connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  gap: 10px; /* Add gap between elements */
  border-radius: 15px; /* 圆角 */
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
}

.avatar-container {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden; /* 确保内容不会溢出 */
  border-radius: 50%; /* 使容器成为圆形 */
}

.avatar {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 50%; /* 使头像成为圆形 */
  overflow: hidden; /* 确保内容不会溢出 */
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片覆盖整个容器 */
}

button {
  position: relative;
  padding: 10px 80px;
  font-size: 16px;
  cursor: pointer;
}
</style>
