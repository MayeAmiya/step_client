<template>
  <div style="pointer-events: auto">
    <div style="display: flex; flex-direction: column; align-items: center">
      <el-avatar size="auto" src="../../assets/head.png" @click="isCollapse = !isCollapse" />
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Personal</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">Information</el-menu-item>
            <el-menu-item index="1-2">Safe</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>ToDo</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Groups</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Setting</template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
