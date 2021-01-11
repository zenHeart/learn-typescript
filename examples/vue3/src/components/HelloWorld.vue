<template>
  <h1>{{ msg }}
    <span v-bind="$attrs">show info</span>
  </h1>
</template>

<script  lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  inheritAttrs: false,
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>