// import Vue from 'vue'
import VueRouter from 'vue-router'
import Vue from 'vue/dist/vue.esm.js'
Vue.use(VueRouter)

//引入路由
import routes from './config/router.config.js'
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#app')

