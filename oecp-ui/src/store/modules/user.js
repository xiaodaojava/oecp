import { login, logout, getInfo } from '@/api/user'
import { getAuthInfo } from '@/api/aliLogin'
import { getToken, setToken, removeToken, removeAuthCode, setUserInfo, getUserInfo } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    userInfo: getUserInfo()
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  //获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        console.log(data)

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { name, avatar } = data
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getAliInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { data } = response
        console.log(data)
        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { nickName, avatar } = data

        commit('SET_NAME', response.userInfo.nickName)
        commit('SET_AVATAR', response.userInfo.avatar)
        commit('SET_USER_INFO', response.userInfo)
        commit('SET_TOKEN', response.token)
        setToken(response.token)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        removeAuthCode()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },

  aliLogin({ commit }, aliLoginForm) {
    return new Promise((resolve, reject) => {
      getAuthInfo(aliLoginForm.accessToken, aliLoginForm.appId).then(response => {
        const { data } = response
        console.log(response)
        //   reject('Verification failed, please Login again.')
        // }
        commit('SET_NAME', response.userInfo.nickName)
        commit('SET_AVATAR', response.userInfo.avatar)
        commit('SET_USER_INFO', response.userInfo)
        commit('SET_TOKEN', response.token)
        setUserInfo(response.userInfo)
        setToken(response.token)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}