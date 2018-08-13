import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/product/list',
    method: 'get',
    params: query
  })
}

export function fetchPeoduct(id) {
  return request({
    url: '/product/detail',
    method: 'get',
    params: { id }
  })
}

export function createProduct(data) {
  return request({
    url: '/product/create',
    method: 'post',
    data
  })
}

export function updateProduct(data) {
  return request({
    url: '/product/update',
    method: 'put',
    data
  })
}
