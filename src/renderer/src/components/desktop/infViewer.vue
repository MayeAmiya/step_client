<template>
  <div style="pointer-events: auto">
    <component :is="curretlyComponent" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const curretlyComponent = ref<typeof Titles | typeof Tags | null>(Titles)
const component = ref<string>('')
import { useGlobalStore } from '../../eventBus'
import Titles from './infviewPage/titles.vue'
import Tags from './infviewPage/tagPane.vue'

const globalStore = useGlobalStore()

const initCom = () => {
  component.value = globalStore.Global.currentCommpoent
  if (component.value === 'Titles') {
    curretlyComponent.value = Titles
  } else if (component.value === 'Tags') {
    curretlyComponent.value = Tags
  }
}
onMounted(() => {
  initCom()
})

globalStore.$subscribe(() => {
  initCom()
})
</script>
