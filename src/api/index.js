import request from '@/utils/request'

export function botList(data) {
  return request({
    url: '/chatbot/status',
    method: 'post',
    data
  })
}

export function online(data) {
  return request({
    url: '/chatbot/api_key/online',
    method: 'post',
    data
  })
}

export function offline(data) {
  return request({
    url: '/chatbot/api_key/offline',
    method: 'post',
    data
  })
}
