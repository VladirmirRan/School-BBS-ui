import request from './request'

// 获取用户信息
export const getUser = () => {
  return request({
    url: '/user/getUserInfo',
    // method: 'post'
  })
}

// 修改用户信息
export const edit = (data) => {
  return request({
    url: '/user/editUserInfo',
    method: 'post',
    data
  })
}