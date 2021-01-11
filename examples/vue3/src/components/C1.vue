<template>
   <button @click="add">{{ text }} {{ count }}</button>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
  initial: {
    type: Number,
    default: 0
  },
  text: {
    type: String,
    default: 'default'
  }
})

const count = ref(props.initial)
function add() {
  count.value++
}
</script>
