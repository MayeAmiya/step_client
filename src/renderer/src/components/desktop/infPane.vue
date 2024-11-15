<template>
  <div style="pointer-events: auto">
    <div
      style="
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div class="overlay" style="width: 100%">
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            width: 100%;
          "
        >
          <h1 style="color: black">SETTING</h1>
          <div style="display: flex; flex-direction: column; align-items: center">
            <h3 style="color: black; margin-bottom: 10px">PlayGroundMOD</h3>
            <el-switch
              v-model="playgroundCheck"
              size="large"
              active-text="Open"
              inactive-text="Close"
            />
          </div>
        </div>
        <el-divider />
        <el-scrollbar style="overflow-y: auto; max-height: 80vh">
          <pageSetting v-if="!playgroundCheck" />
          <Playground v-if="playgroundCheck" />
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const playgroundCheck = ref(false)

import pageSetting from './settingPage/pageSetting.vue'
import Playground from './settingPage/playground_page.vue'
</script>
