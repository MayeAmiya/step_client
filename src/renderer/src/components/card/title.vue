<template>
  <div class="card-title">
    <el-row :gutter="20">
      <el-col :span="16"
        ><h2>{{ postTitle }}</h2></el-col
      >
      <el-col :span="8"><p>Initiation Time: initiationTime</p></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16"><p>Initiator ID: initiatorId</p></el-col>
      <el-col :span="8"><p>Latest Reply Time: latestReplyTime</p></el-col>
    </el-row>
  </div>
</template>

<script setup>
const postTitle = 'Title'
</script>

<style scoped>
.card-title {
  width: 100%;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  color: black;
}
.card-title h2 {
  margin: 0 0 8px;
}
.card-title p {
  margin: 4px 0;
}
</style>
