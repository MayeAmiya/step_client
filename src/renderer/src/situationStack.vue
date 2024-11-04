<script>
import { ref } from 'vue'
const State = {
  id: Number,
  name: String
}

export default {
  setup() {
    const stack = ref([])

    const pushState = () => {
      stack.value.push(newState)
    }

    const popState = () => {
      if (stack.value.length > 0) {
        stack.value.pop()
      }
    }

    const newState = ref(State)

    return {
      stack,
      pushState,
      popState
    }
  }
}
</script>
