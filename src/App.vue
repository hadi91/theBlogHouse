<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    'navbar': navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
