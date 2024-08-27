<template>
  <button class="fullscreen-toggle" @click="toggleFullScreen">
    <i :class="isFullScreen ? 'fas fa-compress' : 'fas fa-expand'"></i>
  </button>
</template>

<script>
import screenfull from 'screenfull';

export default {
  data() {
    return {
      isFullScreen: false,
    };
  },
  mounted() {
    if (screenfull.isEnabled) {
      // 监听全屏状态变化
      screenfull.on('change', this.onFullScreenChange);
    }
    // 监听 F11 键
    window.addEventListener('keydown', this.onKeyDown);
  },
  beforeDestroy() {
    if (screenfull.isEnabled) {
      // 移除全屏状态变化监听器
      screenfull.off('change', this.onFullScreenChange);
    }
    // 移除 F11 键监听器
    window.removeEventListener('keydown', this.onKeyDown);
  },
  methods: {
    toggleFullScreen() {
      if (screenfull.isEnabled) {
        screenfull.toggle();

        this.onFullScreenChange();
      }
    },
    onFullScreenChange() {
      // 更新 isFullScreen 状态
      this.isFullScreen = screenfull.isFullscreen;
    },
    onKeyDown(event) {
      if (event.key === 'F11') {
        // 防止默认的 F11 全屏行为（如果需要）
        event.preventDefault();

        this.toggleFullScreen();
      }
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
