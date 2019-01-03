/**
 * Created by zhangxin on 2018/11/13.
 */
import { createAPI } from './create_api'
const api = createAPI()
/**
 * 请求登录接口
 * @param param
 * @returns {*}
 */
export function login (param) {
  return api.post('/login', param)
}
/**
 *
 * @param code
 * @returns {*|Promise}
 */
export function vertifyLogin (code) {
  return api.get(`/apis/identity/check/${code}`);
}

/**
 * 权限-用户管理-关联角色
 * @param param
 * @returns {*}
 */
export function relateUserRole (param, id) {
  return api.post(`/apis/sys/user/map/role/${id}`, param)
}
