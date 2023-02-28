import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
import { getUUID } from '@/utils/uuid_token'

const state = {
    goodsInfo: {},
    uuid_token: getUUID()
}

const actions = {
    async getGoodsInfo({commit}, skuid) {
        let result = await reqGoodsInfo(skuid)
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data)
        }
    },
    async addOrUpdateShopCart({commit}, {skuid, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuid, skuNum)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}

const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}

const getters = {
    categoryView() {
        return state.goodsInfo.categoryView || {}
    },
    price() {
        return state.goodsInfo.price
    },
    skuInfo() {
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList() {
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}

