import request from '@/utils/request'
// 授权API
export function getDatas(query) {
  return request({
    url: 'accredit',
    method: 'get',
    params: query
  })
}

export function getData(id) {
  return request({
    url: 'accredit',
    method: 'get',
    params: { id }
  })
}


export function postData(data) {
  return request({
    url: 'accredit',
    method: 'post',
    data
  })
}

export function putData(data) {
  return request({
    url: 'accredit',
    method: 'patch',
    data
  })
}
