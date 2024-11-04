<template>
  <div ref="loginContainerRef" class="login-container" @click.stop>
    <div v-if="loginVisible">
      <div class="login-toggle">
        <el-button type="primary" class="toggle-button" @click="isIndividual = true"
          >个人</el-button
        >
        <el-button type="primary" class="toggle-button" @click="isIndividual = false"
          >机构</el-button
        >
      </div>

      <div v-if="isIndividual" class="login-form">
        <h2>个人登录</h2>
        <input
          id="individual-username"
          v-model="individualUsername"
          type="text"
          placeholder="用户名"
          required
        />
        <input
          id="individual-password"
          v-model="individualPassword"
          type="password"
          placeholder="密码"
          required
        />
        <el-button type="primary" class="large-button" @click="handleIndividualLogin"
          >Login</el-button
        >
      </div>

      <div v-else class="login-form">
        <h2>机构登录</h2>
        <input
          id="organization-Organizationname"
          v-model="organizationOrganizationname"
          type="text"
          placeholder="组织名称"
          required
        />
        <input
          id="organization-username"
          v-model="organizationUsername"
          type="text"
          placeholder="用户名"
          required
        />
        <input
          id="organization-password"
          v-model="organizationPassword"
          type="password"
          placeholder="密码"
          required
        />
        <el-button type="primary" class="large-button" @click="handleOrganizationLogin"
          >Login</el-button
        >
      </div>
    </div>

    <component :is="LoginComponent" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Connect from './connect.vue'

const loginContainerRef = ref<HTMLElement | null>(null)
const LoginComponent = ref<typeof Connect | null>(null)

const isIndividual = ref(true)
const individualUsername = ref('')
const individualPassword = ref('')

const organizationOrganizationname = ref('')
const organizationUsername = ref('')
const organizationPassword = ref('')

const loginVisible = ref(true)

const handleIndividualLogin = () => {
  // Handle individual login logic here
  console.log('Individual login:', individualUsername.value, individualPassword.value)
  loginVisible.value = false
  LoginComponent.value = Connect
}

const handleOrganizationLogin = () => {
  // Handle organization login logic here
  console.log(
    'Organization login:',
    organizationOrganizationname.value,
    organizationUsername.value,
    organizationPassword.value
  )
  loginVisible.value = false
  LoginComponent.value = Connect
}

const handleClickOutside = (event: MouseEvent) => {
  if (loginContainerRef.value && !loginContainerRef.value.contains(event.target as Node)) {
    console.log('Clicked outside the container')
    // 在这里处理点击容器外部的逻辑
    if (loginVisible.value == false) {
      console.log('close')
      loginVisible.value = true
      LoginComponent.value = null
      document.removeEventListener('click', handleClickOutside)
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
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.login-toggle {
  display: flex;
  justify-content: space-around; /* 确保按钮之间有适当的间距 */
  width: 250px; /* 设置最大宽度 */
  height: 20px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center; /* 使表单元素居中 */
  width: 100%;
  max-width: 400px;
}

.login-form > * {
  margin-bottom: 10px;
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

.toggle-button {
  font-size: 16px; /* 原有字体规格 */
  text-decoration: underline; /* 添加下划线 */
  text-underline-offset: 4px; /* 调整下划线与字体的距离 */
}

.toggle-button:hover {
  font-size: 18px;
  font-weight: bold;
  color: blue;
}
</style>
