import Vue from 'vue'
import App from './App.vue'


// 引入 Bootstrap 的 CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 引入 Bootstrap 的 JS（可选，如果你需要使用 Bootstrap 的 JS 组件）
import 'bootstrap';

// 引入 FontAwesome 的 CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
