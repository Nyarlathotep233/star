const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',  // 确保这里是 'docs'
  publicPath: '/star/'  // 确保 publicPath 是你需要的路径
});
