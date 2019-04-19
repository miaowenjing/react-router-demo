import axios from 'axios'
import config from '../config/index'

const ax = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout,
    withCredentials: true,
    // 后台要求application/x-www-form-urlencoded格式
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // 配合application/x-www-form-urlencoded，需要对post参数做一下转换
    // 注意transformRequest只对'PUT', 'POST', and 'PATCH'有效

  });

export function get(url,param) {
    return ax.get(url,{params:param})
}
export function post(url,param) {
    return ax.post(url,{params:{param}}).then((data)=>data.data)
}
// export function upload(url,param) {
//     return ax.post(url,{params:{param}}).then((data)=>data.data)
// }