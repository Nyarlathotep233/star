<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <StarRating />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import StarRating from './components/StarRating.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    StarRating,
  }
}
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
