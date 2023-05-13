import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//下面就是把app.vue模板render成为html的代码, 然后输出/mount到#app这个div上面
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
