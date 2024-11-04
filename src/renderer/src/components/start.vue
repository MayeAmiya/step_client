<template>
  <div ref="containerRef" class="container" @click.stop>
    <div class="content-box">
      <div v-if="visible" class="dialog-footer">
        <el-button type="primary" class="large-button" @click="openDialog('login')">
          登录
        </el-button>
        <el-button type="primary" class="large-button" @click="openDialog('register')">
          注册
        </el-button>
      </div>
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Login from './user/login.vue'
import Register from './user/register.vue'

const visible = ref(true)
const currentComponent = ref<typeof Login | typeof Register | null>(null)
const containerRef = ref<HTMLElement | null>(null)

const openDialog = (type: 'login' | 'register') => {
  visible.value = false
  document.removeEventListener('click', start_handleClickOutside)
  if (type === 'login') {
    // Logic to open login dialog
    currentComponent.value = Login
    console.log('Opening login dialog')
  } else if (type === 'register') {
    // Logic to open register dialog
    currentComponent.value = Register
    console.log('Opening register dialog')
  }
}

const start_handleClickOutside = (event: MouseEvent) => {
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    console.log('Clicked outside the container')
    // 在这里处理点击容器外部的逻辑
    if (visible.value == false) {
      console.log('close')
      visible.value = true
      currentComponent.value = null
    }
  }
}

onMounted(() => {
  console.log('start')
  document.addEventListener('click', start_handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', start_handleClickOutside)
})
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 60vw;
}

.content-box {
  background-color: rgb(53, 52, 52);
  border-radius: 15px; /* 圆角 */
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
}

.dialog-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.large-button {
  width: 150px;
  height: 50px;
  font-size: 16px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: white; /* 白底 */
  border: 1px solid transparent; /* 初始边框透明 */
  color: black; /* 字体颜色改为黑色 */
}

.large-button:hover {
  border-color: blue; /* 指向时泛起蓝色边框 */
}
</style>
