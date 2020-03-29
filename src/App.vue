<template>
  <div id="app">
    <router-view/>
    <NavBottom/>
  </div>
</template>

<script>
import NavBottom from '@/components/NavBottom.vue'

export default {
  components: {
    NavBottom
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
  #app {
    height: 13.34rem;
    background-color: #eeeeee;
  }
</style>
