<template >
   <div>
      <button @click="add">{{ text }} {{ count }}</button>
   </div>
</template>

<script  lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  props: {
    initial11: {
      type: Number,
      default: 0
    },
    text43: {
      type: String,
      default: 'default'
    }
  },

  setup(props) {
    const count = ref(props.initial)
    function add() {
      count.value++
    }
    return {
      count,
      add
    }
  },
  mounted() {
    this.initial.split('')
  }
})
</script>
