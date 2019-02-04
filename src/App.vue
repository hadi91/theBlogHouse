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

@import url('https://fonts.googleapis.com/css?family=Lobster|Source+Serif+Pro');

* {
  margin: 0;
  padding: 0;
}

:root {
  --custard-color: #E9B000;
  --blush-color: #EB6E80;
  --aqua-color: #008F95;
  --papaya-color: #E24E42;
}

p {
  white-space: pre-wrap;
}

#app {
  background-color: var(--custard-color);
  padding-bottom: 50px;
  box-sizing: border-box;
  min-height: 700px;
}


</style>
