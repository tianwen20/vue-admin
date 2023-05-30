import request from '@/utils/request'

export function botList(user_id, data) {
  return request({
    url: '/status/' + user_id,
    method: 'post',
    data
  })
}

export function online(user_id, data) {
  return request({
    url: '/api_key/online/' + user_id,
    method: 'post',
    data
  })
}

export function offline(user_id, data) {
  return request({
    url: '/api_key/offline/' + user_id,
    method: 'post',
    data
  })
}
