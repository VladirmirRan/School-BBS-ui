import request from './request'

// 登录前获取密钥
export function getPublicKey() {
  return request({
    url: '/login/before',
  })
}
// 登录
export const loginUser = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

// 注册
export const registerUser = (data) => {
  return request({
    url: '/register',
    method: 'POST',
    data
  })
}