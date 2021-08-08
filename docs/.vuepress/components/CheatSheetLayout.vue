<template>
  <ParentLayout class="cheatsheet-layout"/>
</template>

<script>
import ParentLayout from '@theme/layouts/Layout.vue'

export default {
    name: 'CheatSheetLayout',
    components: {
      ParentLayout
    }
};
</script>
<style lang="stylus">
.cheatsheet-layout
  .theme-default-content
    max-width 100%

</style>
