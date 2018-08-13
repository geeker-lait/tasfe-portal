import request from '@/utils/request'
// 资源API
export function getDatas(query) {
  return request({
    url: 'resources',
    method: 'get',
    params: query
  })
}

export function getData(id) {
  return request({
    url: 'resources',
    method: 'get',
    params: { id }
  })
}


export function postData(data) {
  return request({
    url: 'resources',
    method: 'post',
    data
  })
}

export function putData(data) {
  return request({
    url: 'resources',
    method: 'patch',
    data
  })
}
