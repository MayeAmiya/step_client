<template>
  <div class="register-container">
    <h1>Register</h1>
    <div>
      <input id="username" v-model="username" type="text" placeholder="用户名" />
    </div>
    <div>
      <input id="password" v-model="password" type="password" placeholder="密码" />
    </div>
    <div>
      <input id="confirmPassword" type="password" placeholder="确认密码" />
    </div>
    <div>
      <input id="email" type="email" placeholder="电子邮箱" />
    </div>
    <div>
      <input id="vertifyCode" type="tel" placeholder="验证码" />
    </div>
    <el-button type="primary" class="large-button" @click="register">注册</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const confirmPassword = ref('')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const email = ref('')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const vertifyCode = ref('')

const register = () => {
  console.log('Username:', username.value)
  console.log('Password:', password.value)
  // Add your registration logic here
}
</script>

<style scoped>
/* Add your styles here */
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Add gap between elements */
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
