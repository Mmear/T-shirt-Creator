import Vue from 'vue'
import App from './App.vue'


// 引入静态文件
import 'normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)


new Vue({
  render: h => h(App)
}).$mount('#app')
