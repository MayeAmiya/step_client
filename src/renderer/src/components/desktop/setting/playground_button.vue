<template>
  <div class="btn-container">
    <Transition name="slide-up">
      <button v-if="docState === 'TAG MODE'" @click="toggleState">TAG&nbsp;MODE</button>
      <button v-else-if="docState === 'PLAYGROUND'" @click="toggleState">PLAYGROUND</button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  playgroundCheck: Boolean
})
const emit = defineEmits(['update:playgroundCheck'])

const docState = ref(props.playgroundCheck ? 'PLAYGROUND' : 'TAG MODE')

const toggleState = () => {
  docState.value = docState.value === 'TAG MODE' ? 'PLAYGROUND' : 'TAG MODE'
  emit('update:playgroundCheck', docState.value === 'PLAYGROUND')
}

watch(
  () => props.playgroundCheck,
  (newVal) => {
    docState.value = newVal ? 'PLAYGROUND' : 'TAG MODE'
  }
)
</script>

<style>
.btn-container {
  display: inline-block;
  position: relative;
  left: 10%;
  top: 3px;
  height: 4em;
  width: 80%;
}

button {
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 1em;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
