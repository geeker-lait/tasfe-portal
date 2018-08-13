import request from '@/utils/request'

export function getDatas(query) {
  return request({
    url: 'user',
    method: 'get',
    params: query
  })
}

export function getData(id) {
  return request({
    url: 'user',
    method: 'get',
    params: { id }
  })
}

export function postData(data) {
  return request({
    url: 'user',
    method: 'post',
    data
  })
}

export function patchData(data) {
  if(data.id){
    return request({
      url: 'user/' + data.id,
      method: 'put',
      data
    })
  } else {
    return request({
      url: 'user',
      method: 'patch',
      data
    })
  }
}
