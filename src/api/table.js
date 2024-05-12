import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://127.0.0.1:4523/m1/4437688-0-default/homepage',
    method: 'get',
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
      'Accept': '*/*',
      'Host': '127.0.0.1:4523',
      'Connection': 'keep-alive'
    },
    params
  })
}
