<template>
    <div class="cheatsheets">
      <div class="cheat-group"  v-for="(item, index ) in cheatsheets" >
        <h2 @click="toggleCollapse(index)">{{ item.frontmatter.name }}</h2>
        <transition name="collapse">
        <Content class="content" v-show="collapse[index]" :key="item.key" :page-key="item.key"/>
        </transition>
      </div>
    </div>
</template>

<script>

const CHEAT_SHEET_PATH = '/cheatsheet/'

export default {
    name: 'CheatSheets',
    computed: {
      cheatsheets() {
        return this.$site.pages.filter(p => p.path.includes(CHEAT_SHEET_PATH) && p.path !== CHEAT_SHEET_PATH) || []
      }
    },
    data(){
      return {
        collapse: []
      }
    },
    created() {
      this.collapse = this.cheatsheets.map(() => 1);
    },
    methods: {
      toggleCollapse(index) {
        console.log(index);
        this.$set(this.collapse,index, this.collapse[index] ^ 1);
      }
    }
    
};
</script>
<style lang="stylus">
.cheatsheets
  display flex
  flex-wrap wrap
  justify-content: flex-start
  align-items: stretch;
  .cheat-group
    flex: 1 0 calc( 33% - 10px )
    margin-right 10px
    h2
      margin 0
      padding 5px
      background #2A65BA
      color white
      cursor pointer
    .content
      max-height 100%
      transform-origin 0 0

      &.collapse-enter
      &.collapse-leave-to 
        transform scaleY(0)

.collapse-enter-active
.collapse-leave-active
  transition transform 0.5s


        
       

</style>
