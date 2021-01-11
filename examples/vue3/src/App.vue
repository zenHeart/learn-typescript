<template>
  <HelloWorld msg="demo"  df="12" title="demo"/>
  <C1 />
  <C2 :initial11="'sdf'" text43="12" ></C2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import C1 from './components/C1.vue'
import C2 from './components/C2.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    C1,
    C2
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
