<template>
    <div class="cheatsheet">
      <span class="name">{{ name }}</span>
      <div class="content">
        <slot></slot> 
      </div>
    </div>
</template>

<script>

export default {
    name: 'CheatSheet',
    props: {
      name: String,
    }
};
</script>
<style lang="stylus">
.cheatsheet
    border: 1px solid #EAEAEA;
    margin-bottom 2px
    border-radius 5px
    .name
      line-height 20px
      background #2a65ba
      padding 2px 10px 2px 5px
      color white
      font-size 1rem
      border-radius 5px 0 5px 0 
    .content
      padding 0 10px 0 5px
      margin 0
</style>
