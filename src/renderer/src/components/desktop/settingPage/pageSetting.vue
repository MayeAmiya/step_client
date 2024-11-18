<template>
  <div style="overflow: hidden">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Search" name="first">MapInf</el-tab-pane>
      <el-tab-pane label="Information">MapInf</el-tab-pane>
      <el-tab-pane label="Group"><GroupInf /></el-tab-pane>
      <el-tab-pane label="Keyword"><KeywordCheck /></el-tab-pane>
      <el-tab-pane label="TagAdder">MapInf</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import KeywordCheck from './keyword_page.vue'
import GroupInf from '../../card/groupInfPage.vue'
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
