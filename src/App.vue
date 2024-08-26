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

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 设置背景图片 */
  background-image: url('@/assets/bkg.jpg');
  background-size: cover; /* 确保背景图片覆盖整个容器 */
  background-position: center; /* 将背景图片居中 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
  background-attachment: fixed; /* 背景图片固定，不随页面滚动 */
}

.container {
  width: 100%;
}

.star-container {
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  position: relative;
}

.star {
  font-size: 60px;
  color: #ccc;
  transition: color 0.3s;
}

.star.active {
  color: gold;
}

.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-weight: bold;
  font-size: 14px;
  color: black;
}
</style>
