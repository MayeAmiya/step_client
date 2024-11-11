<template>
  <div id="app">
    <component :is="PageComponent" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Start from './components/start.vue'
import Desktop from './components/desktop.vue'
import eventBus from './eventBus.vue'

// eslint-disable-next-line prettier/prettier
const PageComponent = ref <typeof Desktop | typeof Start | null> (Start);

const openDesktop = () => {
  console.log('Opening desktop')
  PageComponent.value = Desktop
}

onMounted(() => {
  eventBus.value.set('openDesktop', openDesktop)
})
</script>

<style>
#app {
  position: relative;
}
</style>
