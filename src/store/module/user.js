import { apiLogin } from '@/api/index'
import { setToken, removeToken } from '@/utils/auth'
import router from '@/router/index'

export const user = {
  namespaced: true, // 开启namespace:true，该模块就成为命名空间模块了
  state: {
    userInfo: {
      uuid: "",
      nickName: "",
      headerImg: "",
      authority: "",
    },
    token: "",
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async loginIn({ commit }, params) {
      const res = await apiLogin(params)
      const { code, data } = res
      if (code == 0) {
        console.log('登录成功:', data)
        setToken(data.token)
        commit('setUserInfo', data.user)
      }
    },
    loginOut({ commit }) {
      commit('setUserInfo', '')
      removeToken()
      localStorage.clear()
      router.push({ name: 'login', replace: true })
      // window.location.reload()
    }
  }
}