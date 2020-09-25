import request from '@/utils/request'
export function getSwiperList() {
  return request({
    url: '/page/get/category',
    method: 'get'
  })
}
export function getDataList(data) {
  return request({
    url: '/stock/basic/info/',
    method: 'post',
    data
  })
}
//列表

export function getOrderList(params) {
  return request({
    url: '/stock/show/list/',
    method: 'get',
    params
  })
}
//基础指标
export function getOrdeInfo(params) {
  return request({
    url: '/stock/field/info',
    method: 'get',
    params
  })
}
export function getOrderDetailList(params) {
  return request({
    url: '/stock/filter/list/',
    method: 'get',
    params
  })
}

//用户名验证
export function userNameCaption(data) {
  return request({
    url: '/account/verification/username/',
    method: 'post',
    data
  })
}
//获取验证码
export function getCaption(data) {
  return request({
    url: '/account/phone/captcha/',
    method: 'post',
    data
  })
}
//注册
export function getRegister(data) {
  return request({
    url: '/account/register/',
    method: 'post',
    data
  })
}
//登录
export function toLogin(data) {
  return request({
    url: '/account/login/',
    method: 'post',
    data
  })
}
//动态懒加载
export function getField(params) {
  return request({
    url: '/stock/field/info',
    method: 'get',
    params
  })
}
//年鉴数据  指标
export function getYearsData(params) {
  return request({
    url: '/yearbook/filter/list',
    method: 'get',
    params
  })
}
//年鉴查询
export function getYearsList(params) {
  return request({
    url: '/yearbook/get/data',
    method: 'get',
    params
  })
}
//获取事件
export function getYears(params) {
  return request({
    url: '/yearbook/get/target',
    method: 'get',
    params
  })
}
//获取二维码
export function getUrlCode(data) {
  return request({
    url: '/account/pay/',
    method: 'post',
    data:data
  })
}
//支付状态
export function getPayStatus(data) {
  return request({
    url: '/account/pay/status/',
    method: 'post',
    data:data
  })
}
