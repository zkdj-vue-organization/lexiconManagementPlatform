/**
 * Created by zhangxin on 2018/11/13.
 */
export default {
  /**
   * 示例代码，返回string
   * @param state
   * @returns {*}
   */
  getString (state) {
    const {string} = state
    return !string ? '' : string
  },
  getIsLogin(state){
    return state.isLogin;
  }
}
