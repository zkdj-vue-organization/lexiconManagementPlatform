/**
 * Created by zhangxin on 2018/11/13.
 */
import axios from 'axios'
// import Notification from 'element-ui/lib/notification'
/**
 * 转换参数形式
 * @param data
 * @returns {string}
 */
let transformRequest = function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret.substring(0, ret.length - 1)
}
/**
 * 抽象接口请求方法
 * @returns {*}
 */
export function createAPI () {
  axios.defaults.withCredentials = true
  axios.defaults.timeout = 60000
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  axios.defaults.headers.token = getCookie('token')
  axios.interceptors.response.use(res => {
    if (res.status >= 200 && res.status < 400) {
      return res
    }
    return Promise.reject(res)
  }, err => {
    return Promise.reject(err)
  });

  function getCookie(cname){
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++)
    {
      let c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
  }

  let api = {
    /**
     * get请求
     * @param target  请求地址
     * @param params  请求参数
     * @returns {Promise}
     */
    get (target, params = {}) {
      // let token = getCookie('AUTHENTICATE_TOKEN') || undefined
      let suffix = Object.keys(params).map(name => {
        return `${name}=${params[name]}`
      }).join('&')

      let urls = suffix.length > 0 ? `${target}?${suffix}` : `${target}`
      // let urls = (suffix.length>0 ? `${target}?${suffix}&` : `${target};`) + !token ? ``:`JSESSIONID=${token}`
      return new Promise((resolve, reject) => {
        axios.get(urls, params, {headers: {}}).then(res => {
          if(res.data.status == 10002){
            // let accessUrl = encodeURIComponent(window.location.href);
            // let url = 'https://sso.faw-vw.com/sso/profile/oauth2/authorize?client_id=LGzh4zHHgF&response_type=code&redirect_uri=http://localhost:8080/callback?redirect_uri='+accessUrl;
            // window.location.href = url;
          }else if(res.data.status != 0){
            // Notification({
            //   type: 'error',
            //   title: '错误',
            //   message: res.data.message
            // });
            resolve(res)
          }else {
            resolve(res)
          }
        }).then(err => {
          reject(err)
        })
      })
    },
    /**
     * post请求
     * @param target  请求地址
     * @param params  请求参数
     * @returns {Promise}
     */
    post (target, params = {}) {
      // let token = getCookie('AUTHENTICATE_TOKEN')
      return new Promise((resolve, reject) => {
        axios.post(target, params, {headers: {}}).then(res => {
          if(res.data.status == 10002){
            // localhost:8080
            // 172.168.30.217:9588
            // let accessUrl = encodeURIComponent(window.location.href);
            // let url = 'https://sso.faw-vw.com/sso/profile/oauth2/authorize?client_id=LGzh4zHHgF&response_type=code&redirect_uri=http://localhost:8080/callback?redirect_uri='+accessUrl;
            // window.location.href = url;
          }else if(res.data.status != 0){
            // Notification({
            //   type: 'error',
            //   title: '错误',
            //   message: res.data.message
            // });
            resolve(res)
          }else{
            resolve(res)
          }
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
  return api
}
