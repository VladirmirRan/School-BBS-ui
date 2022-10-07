import request from './request'

// 获取所有帖子
export const getList = () => {
  return request({
    url: '/article/query/articleList',
  })
}

// 添加帖子
export const add = (data) => {
  return request({
    url: '/article/add',
    method: 'post',
    data
  })
}