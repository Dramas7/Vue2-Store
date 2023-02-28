import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入模块
import home from '@/store/home'
import search from '@/store/search'
import detail from '@/store/detail'
import cart from '@/store/cart'
import user from '@/store/user'
import trade from '@/store/trade'

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        cart,
        user,
        trade
    }
})