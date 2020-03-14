import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/oecp-ui/user/login.do',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/oecp-ui/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/oecp-ui/user/logout',
    method: 'post'
  })
}