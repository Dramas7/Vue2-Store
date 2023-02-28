import { reqTradeInfo } from '@/api'

const state = {
    tradeInfo: {}
}

const actions =  {
    async getTradeInfo({commit}) {
        let result = await reqTradeInfo()
        if (result.code == 200) {
            commit('GETTRADEINFO', result.data)
        }
    }
}

const mutations = {
    GETTRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
}

const getters = {
    userAddressList() {
        return state.tradeInfo.userAddressList || []
    },
    detailArrayList() {
        return state.tradeInfo.detailArrayList || []
    },
    totalAmount() {
        return state.tradeInfo.totalAmount
    },
    totalNum() {
        return state.tradeInfo.totalNum
    },
    tradeNo() {
        return state.tradeInfo.tradeNo
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}