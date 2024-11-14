<template>
  <div style="display: flex; align-items: center">
    <h3 style="color: black; margin-right: 10px">SETTING PlayGroundMOD</h3>
    <el-switch v-model="value" size="large" active-text="Open" inactive-text="Close" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useGlobalStore } from '../../../eventBus.ts'

const globalStore = useGlobalStore()
const value = ref(globalStore.Global.playgroundMod)

watch(value, (newValue) => {
  globalStore.Global.playgroundMod = newValue
})
</script>
