import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function fetchUser(id) {
  return request({
    url: '/user/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/user/pv',
    method: 'get',
    params: { pv }
  })
}

export function createUser(data) {
  return request({
    url: '/user/create',
    method: 'post',
    data
  })
}


/**
 * 创建系统用户，首先创建账号，然后创建用户，然后关联用户和账号，然后创建职务，然后关联用户和职务
 * @param data
 */
export function createSysUser(data) {
  return request({
    url: '/user/create',
    method: 'post',
    data
  })
}


export function updateUser(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}


/**
 * 更新系统用户
 * @param data
 */
export function updateSysUser(data) {
  return request({
    url: '/article/update',
    method: 'put',
    data
  })
}
