import { reqCode, reqUserLogin, reqUserRegister, reqUserInfo, reqUserLogout } from '@/api'
import {  getToken, setToken, removeToken } from '@/utils/token'

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}

const actions = {
    async getCode({commit}, phone) {
        let result = await reqCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userRegister({commit}, data) {
        let result = await reqUserRegister(data)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data) 
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async userLogout({commit}) {
        let result = await reqUserLogout()
        if (result.code == 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    }
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
        setToken(token)
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}