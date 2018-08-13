import request from '@/utils/request'

export function getDatas(query) {
  return request({
    url: 'company',
    method: 'get',
    params: query
  })
}

export function getData(id) {
  return request({
    url: 'company',
    method: 'get',
    params: { id }
  })
}


export function postData(data) {
  return request({
    url: 'company',
    method: 'post',
    data
  })
}

// export function putData(data) {
//   return request({
//     url: 'company',
//     method: 'patch',
//     data
//   })
// }


export function patchData(data) {
  if(data.id){
    return request({
      url: 'company/edit',
      method: 'put',
      data
    })
  } else {
    return request({
      url: 'company',
      method: 'patch',
      data
    })
  }
}
