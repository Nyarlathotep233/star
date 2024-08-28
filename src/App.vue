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
    FullScreenToggle,
  },
};
</script>

<style scoped>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 设置背景图片 */
  background-image: url('@/assets/bkg2.jpg');
  background-size: cover; /* 确保背景图片覆盖整个容器 */
  background-position: center; /* 将背景图片居中 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
  background-attachment: fixed; /* 背景图片固定，不随页面滚动 */
}

.container {
  width: 100%;
}
</style>
