// 对axios进行二次封装
import axios from "axios"
// 引入nprogress
import nProgress from "nprogress"
// 引入样式
import 'nprogress/nprogress.css'
// 引入仓库
import store from '@/store'

const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    nProgress.start() 
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    return config
})

requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (err) => {
    return Promise.reject(new Error('fail'))
})

export default requests