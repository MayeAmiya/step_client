<template>
  <div ref="containerRef" class="container" @click.stop>
    <div class="content-box">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* 居中 */
}

.content-box {
  background-color: rgb(53, 52, 52);
  border-radius: 15px; /* 圆角 */
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
}
</style>
