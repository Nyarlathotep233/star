<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <StarRating />
    <FullScreenToggle />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import StarRating from './components/StarRating.vue';
import FullScreenToggle from './components/FullScreenToggle.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    StarRating,
    FullScreenToggle
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  /* 设置背景图片 */
  background-image: url('@/assets/bkg.jpg');
  background-size: cover; /* 确保背景图片覆盖整个容器 */
  background-position: center; /* 将背景图片居中 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
  background-attachment: fixed; /* 背景图片固定，不随页面滚动 */
}
</style>
