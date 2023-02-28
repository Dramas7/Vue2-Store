// 对axios进行二次封装
import axios from "axios"
// 引入nprogress
import nProgress from "nprogress"
// 引入样式
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: 'mock',
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    nProgress.start()
    return config
})

requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (err) => {
    return Promise.reject(new Error('fail'))
})

export default requests