<template>
  <div class="tag-pane">
    <p v-if="tag"><strong>ID:</strong> {{ tag.id }}</p>
    <p v-else><strong>Name:</strong> No tag selected</p>
    <!-- Add more tag details here as needed -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useGlobalStore } from '../../../eventBus'
import { TagInfo } from '../../information/taginfo'

const globalStore = useGlobalStore()
const tagInfoList = ref(globalStore.Global.tagInfoList)
const selectedTagIndex = ref(globalStore.Global.selectedTagIndex || -1)
const tag = ref<TagInfo | null>(null)

if (selectedTagIndex.value != -1) {
  tag.value = tagInfoList.value.tags.find((tag) => tag.id === selectedTagIndex.value) || null
}

globalStore.$subscribe(() => {
  tagInfoList.value = globalStore.Global.tagInfoList
  selectedTagIndex.value = globalStore.Global.selectedTagIndex || -1
  if (selectedTagIndex.value != -1) {
    tag.value = tagInfoList.value.tags.find((tag) => tag.id === selectedTagIndex.value) || null
  }
})
</script>

<style scoped>
.tag-pane {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;
}
</style>
