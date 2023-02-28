// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject)
    } else {
        originalPush.call(this, location, () => {}, () => {})
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject)
    } else {
        originalReplace.call(this, () => {}, () => {})
    }
}

Vue.use(VueRouter)

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})
