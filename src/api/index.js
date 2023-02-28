import requests from './request'
import mockRequest from './mockRequests'

const reqCategoryList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})
const reqBannerList = () => mockRequest({url: '/banners', method: 'get'})
const reqFloorList = () => mockRequest({url: '/floors', method: 'get'})
const reqSearchInfo = (params) => requests({url: '/list', method: 'post', data: params})
const reqGoodsInfo = (skuid) => requests({url: `/item/${skuid}`, method: 'get'})
const reqAddOrUpdateShopCart = (skuid, skuNum) => requests({url: `/cart/addToCart/${skuid}/${skuNum}`, method: 'post'})
const reqCartList = () => requests({url: 'cart/cartList', method: 'get'})
const reqDeleteCartById = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method: 'delete'})
const reqChangeCheckCard = (skuId, isChecked) => requests({url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get'})
const reqCode = (phone) => requests({url: `/user/passport/sendCode/${phone}`, method: 'get'})
const reqUserRegister = (data) => requests({url: 'user/passport/register', method: 'post', data})
const reqUserLogin = (data) => requests({url: '/user/passport/login', method: 'post', data})
const reqUserInfo = () => requests({url: '/user/passport/auth/getUserInfo', method: 'get'})
const reqUserLogout = () => requests({url: '/user/passport/logout', method: 'get'})
const reqTradeInfo = () => requests({url: '/order/auth/trade', method: 'get'})
const reqSubmitOrder = (tradeNo, data) => requests({url: `order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data})
const reqOrderInfo = (orderId) => requests({url: `/payment/weixin/createNative/${orderId}`, method: 'get'})
const reqOrderStatus = (orderId) => requests({url: `/payment/weixin/createNative/${orderId}`, method: 'get'})
const reqOrderList = (page, limit) => requests({url: `/order/auth/${page}/${limit}`, method: 'get'})

export {
    reqCategoryList,
    reqBannerList,
    reqFloorList,
    reqSearchInfo,
    reqGoodsInfo,
    reqAddOrUpdateShopCart,
    reqCartList,
    reqDeleteCartById,
    reqChangeCheckCard,
    reqCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfo,
    reqUserLogout,
    reqTradeInfo,
    reqSubmitOrder,
    reqOrderInfo,
    reqOrderStatus,
    reqOrderList
}
