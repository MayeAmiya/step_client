<template>
  <div style="pointer-events: auto">
    <div style="position: relative; top: 16px; left: 16px">
      <el-button type="primary" @click="drawer = true"> 页面设置 </el-button>
    </div>
    <el-drawer
      v-model="drawer"
      :with-header="false"
      direction="ltr"
      :size="'60%'"
      :style="{ minWidth: '650px', maxWidth: '850px' }"
    >
      <div
        style="
          width: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div class="overlay">
          <h1 style="color: black">SETTING</h1>
          <el-divider />
          <Playground_button />
          <el-divider />
          <el-scrollbar style="overflow-y: auto; max-height: 80vh">
            <KeywordCheck v-if="!playgroundCheck" />
            <Playground v-if="playgroundCheck" />
          </el-scrollbar>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import Playground_button from './setting/playground_button.vue'
import { useGlobalStore } from '../../eventBus'

const drawer = ref(false)

const globalStore = useGlobalStore()
const playgroundCheck = ref(globalStore.Global.playgroundMod)

globalStore.$subscribe(() => {
  playgroundCheck.value = globalStore.Global.playgroundMod
})

import KeywordCheck from './setting/keyword_page.vue'
import Playground from './setting/playground_page.vue'
</script>
