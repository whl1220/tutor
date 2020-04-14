<template>
  <div id="app">
    <router-view/>
    <NavBottom/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'

export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
  #app{
    background: #ffffff;
  }
</style>
