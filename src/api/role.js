import request from '@/utils/request'

export function postData(data) {
  return request({
    url: 'role',
    method: 'post',
    data
  })
}

export function getData(query) {
  return request({
    url: 'role/:id',
    method: 'get',
    params: query
  })
}

export function getDatas(query) {
  return request({
    url: 'role',
    method: 'get',
    params: query
  })
}

export function putData(data) {
  if(data.id){
    return request({
      url: 'role/'+ data.id,
      method: 'put',
      data
    })
  }
}

export function deleteData(data) {
  return request({
    url: 'role',
    method: 'delete',
    data
  })
}
