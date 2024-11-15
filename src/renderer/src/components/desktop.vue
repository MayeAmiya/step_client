<template>
  <div class="desktop-container">
    <mapViewer default="Map" class="map" />
    <div class="overlay">
      <div class="overlay-content">
        <div style="pointer-events: auto">
          <div
            style="
              position: absolute;
              bottom: 16px;
              left: 50%;
              transform: translateX(-50%);
              border: 1px solid #dcdfe6;
              border-radius: 4px;
              background-color: #fff;
              padding: 10px;
              display: flex;
              gap: 10px;
            "
          >
            <div>
              <el-button
                type="primary"
                style="height: 40px; width: 40px"
                @click="infPaneDrawer = true"
              >
                <el-icon><Search /></el-icon>
              </el-button>
            </div>

            <div>
              <el-button
                type="primary"
                style="background-color: rgba(255, 255, 255, 0.5); height: 40px; width: 40px; color: black"
                @click="infDrawer = true"
              >
                <el-icon><ChatSquare /></el-icon>
              </el-button>
            </div>

            <div>
              <el-avatar
                shape="square"
                fit="fit"
                src="../../assets/head.png"
                @click="personDrawer = true"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="overlay-drawer" style="pointer-events: auto">
        <el-drawer
          v-model="infPaneDrawer"
          :with-header="false"
          direction="ltr"
          :size="'60%'"
          :style="{ minWidth: '650px', maxWidth: '850px' }"
        >
          <infPane />
        </el-drawer>

        <el-drawer v-model="personDrawer" :with-header="false" direction="rtl" :size="'auto'"
          ><Person />
        </el-drawer>

        <el-drawer
          ref="viewer"
          v-model="infDrawer"
          :with-header="false"
          :direction="'btt'"
          :size="infDrawerSize"
        >
          <el-button type="primary" @click="expandDrawer"> Expand Drawer </el-button>
          <el-button type="primary" @click="closeDrawer"> Close Drawer </el-button>
          <!-- 这里放组件信息 -->
          <infViewer />
        </el-drawer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import mapViewer from './desktop/mapViewer.vue'
import infPane from './desktop/infPane.vue'
import Person from './desktop/person.vue'
import infViewer from './desktop/infViewer.vue'

import { ref } from 'vue'
const personDrawer = ref(false)
const infDrawer = ref(false)
const infPaneDrawer = ref(false)
const infDrawerSize = ref('60%')
const expandDrawer = () => {
  infDrawerSize.value = '100%'
}
const closeDrawer = () => {
  infDrawer.value = false
  infDrawerSize.value = '60%'
}
</script>

<style scoped>
.desktop-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.map {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

.overlay-content {
  position: absolute;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
</style>
