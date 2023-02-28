import { reqCartList, reqDeleteCartById, reqChangeCheckCard } from '@/api'

const state = {
    cartList: []
}

const actions = {
    async getCartList({commit}) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    async deleteCartById({commit}, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async changeCheckCart({commit}, {skuId, isChecked}) {
        let result = await reqChangeCheckCard(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async deleteAllCheckedCart({getters, dispatch}) {
        let promise = []
        for (let cart of getters.cartList.cartInfoList) {
            if (cart.isChecked == 1) {
                promise.push(dispatch('deleteCartById', cart.skuId))
            }
        }
        return Promise.all(promise)
    },
    async updateAllCartChecked({dispatch, getters}, isChecked) {
        let promiseAll = []
        for (let val of getters.cartList.cartInfoList) {
            promiseAll.push(dispatch('changeCheckCart', {skuId: val.skuId, isChecked}))
        }
        return Promise.all(promiseAll)
    }
}

const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}

const getters = {
    cartList() {
        return state.cartList[0] || {}
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}