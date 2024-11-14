<template>
  <el-transfer
    v-model="value"
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    :data="data"
    class="el-transfer"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useGlobalStore } from '../../../eventBus'

const globalStore = useGlobalStore()

const stringList = ref(globalStore.Global.keywordList.candidate)
const selectedStrings = ref(globalStore.Global.keywordList.selected)

const updateData = (): Option[] => {
  return globalStore.Global.keywordList.candidate.map((item, index) => ({
    key: index,
    label: item,
    initial: item.charAt(0)
  }))
}

const updateValue = (): number[] => {
  return selectedStrings.value
    .map((item) => {
      const index = stringList.value.indexOf(item)
      return index !== -1 ? index : null
    })
    .filter((item) => item !== null) as number[]
}

const data = ref<Option[]>(updateData())
const value = ref<number[]>(updateValue())

globalStore.$subscribe(() => {
  stringList.value = globalStore.Global.keywordList.candidate
  selectedStrings.value = globalStore.Global.keywordList.selected

  data.value = updateData()
  value.value = updateValue()
})

watch(value, (newVal) => {
  const newSelectedStrings = newVal.map((index) => stringList.value[index])
  if (JSON.stringify(newSelectedStrings) !== JSON.stringify(selectedStrings.value)) {
    selectedStrings.value = newSelectedStrings
    globalStore.Global.keywordList.selected = newSelectedStrings
  }
})

const filterMethod = (query: string, item: Option) => {
  return item.initial.toLowerCase().includes(query.toLowerCase())
}

interface Option {
  key: number
  label: string
  initial: string
}
</script>

<style scoped>
.el-transfer {
  width: 100%;
}

.el-transfer-panel {
  width: 40%;
}

.el-transfer-panel__body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
