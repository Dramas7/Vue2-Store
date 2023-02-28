import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入并注册全局的三级联动组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
// 引入并注册轮播图组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)
// 引入并注册分页器组件
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)
// 引入mock进行数据模拟
import '@/mock/mockServer'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 注册API
import * as API from '@/api'
// 引入element-ui
import {MessageBox} from 'element-ui'
//引入图片懒加载插件
import vueImg from '@/assets/logo.png'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: vueImg
})


router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token
  if (token) {
    if (to.path == '/login') {
      next('/')
    } else {
      let name = store.state.user.userInfo.name
      if (name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (err) {
          await store.dispatch('userLogout')
          next('/login')
        }
      }
      next()
    }
  } else {
    let toPath = to.path
    if (toPath.includes('/trade') || toPath.includes('/pay') || toPath.includes('/center')) {
      next(`/login?redirect=${toPath}`)
    } else {
     next()
    }
  }
})
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
  }
}).$mount('#app')

