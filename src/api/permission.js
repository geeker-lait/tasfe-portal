import request from '@/utils/request'

export function getDatas(query) {
  return request({
    url: 'permission',
    method: 'get',
    params: query
  })
}

export function getData(id) {
  return request({
    url: 'permission',
    method: 'get',
    params: { id }
  })
}

export function postData(data) {
  return request({
    url: 'permission',
    method: 'post',
    data
  })
}

export function putData(data) {
  return request({
    url: 'permission',
    method: 'patch',
    data
  })
}
