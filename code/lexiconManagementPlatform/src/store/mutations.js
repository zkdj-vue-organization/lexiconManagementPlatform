/**
 * Created by zhangxin on 2018/11/13.
 */

export default {
  setIsLogin(state, isLogin){
    state.isLogin = isLogin;
  },
  setPermissions(state, hasPermissions){
    state.hasPermissions = hasPermissions;
  },
  setUserName(state, userName){
    state.userName = userName;
  },
  setUser(state, user){
    state.user = user;
  }
}
