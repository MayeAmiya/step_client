<template>
  <div>
    <el-checkbox-group v-model="selectedStrings">
      <div v-for="(item, index) in stringList" :key="index">
        <el-checkbox :value="item" size="large" border style="width: 100%">{{ item }}</el-checkbox>
      </div>
    </el-checkbox-group>
  </div>

  <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px">
    <div style="flex: 3">
      <el-autocomplete
        v-model="newOption"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        class="inline-input w-50"
        placeholder="Please Input"
      />
    </div>
    <div style="flex: 1; display: flex; align-items: center">
      <el-button style="margin-left: auto; color: black" @click="addNewOptionFromInput">
        Add New Option
      </el-button>
    </div>
  </div>
  <el-divider />
  <!-- <keyword_exechange /> -->
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
// import keyword_exechange from './keyword_exechange.vue'

import { useGlobalStore } from '../../../eventBus'

const globalStore = useGlobalStore()
const candidateList = ref(globalStore.Global.keywordList.candidate)
const selectedStrings = ref(globalStore.Global.keywordList.selected)
const userstringList = ref(globalStore.Global.keywordList.user)

const stringList = ref<string[]>([...candidateList.value, ...userstringList.value])

globalStore.$subscribe(() => {
  candidateList.value = globalStore.Global.keywordList.candidate
  selectedStrings.value = globalStore.Global.keywordList.selected
  userstringList.value = globalStore.Global.keywordList.user
  stringList.value = [...candidateList.value, ...userstringList.value]
})

watch(selectedStrings, (newVal) => {
  globalStore.Global.keywordList.selected = newVal
})

watch(userstringList, (newVal) => {
  globalStore.Global.keywordList.user = newVal
})

const newOption = ref('')
interface RestaurantItem {
  value: string
  link: string
}

const restaurants = ref<RestaurantItem[]>([])

const querySearch = (queryString: string, cb: (results: RestaurantItem[]) => void) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}

const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}

const addNewOptionFromInput = () => {
  if (newOption.value.trim() !== '') {
    userstringList.value.push(newOption.value.trim())
    newOption.value = ''
  }
}
</script>
