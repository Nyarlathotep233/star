<template>
  <button class="fullscreen-toggle" @click="toggleFullScreen">
    <i :class="isFullScreen ? 'fas fa-compress' : 'fas fa-expand'"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isFullScreen: false,
    };
  },
  methods: {
    toggleFullScreen() {
      if (!this.isFullScreen) {
        // 进入全屏模式
        const element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
          element.msRequestFullscreen();
        }
      } else {
        // 退出全屏模式
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
          document.msExitFullscreen();
        }
      }
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
</script>

<style scoped>
.fullscreen-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.342); /* 半透明背景 */
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.082);
  transition: background-color 0.3s;
  width: 40px;
  height: 40px;
}

.fullscreen-toggle:hover {
  background-color: rgba(0, 0, 0, 0.452); /* 悬停时更深的半透明背景 */
}

.fullscreen-toggle i {
  font-size: 18px;
}
</style>
