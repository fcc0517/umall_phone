<template>
  <div>
    <router-view/>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from './components/Tabbar'
export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>

<style>
</style>
