<template>
  <div class="desktop-container">
    <component :is="componentToShow" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue'
import MapContainer from './infViewer/MapContainer.vue'
import MediaContainer from './infViewer/MediaContainer.vue'

const props = defineProps<{ default: 'Map' | 'Media' }>()

const componentToShow = ref<typeof MapContainer | typeof MediaContainer | null>(null)

watch(
  () => props.default,
  (newVal) => {
    if (newVal === 'Map') {
      componentToShow.value = MapContainer
    } else if (newVal === 'Media') {
      componentToShow.value = MediaContainer
    }
  },
  { immediate: true }
)
</script>
