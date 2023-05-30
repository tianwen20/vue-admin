import { login } from '@/api/user'
import { getToken, setToken, removeToken, getUserId, setUserId, removeUserId } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  description: '',
  roles: [],
  user_id: getUserId()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_ID: (state, user_id) => {
    state.user_id = user_id
  },
  SET_DESCRIPTION: (state, description) => {
    state.description = description
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_INIT: (state, init) => {
    state.init = init
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { account, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ account: account.trim(), password: password }).then(response => {
        const data = response
        // 处理登录状态
        commit('SET_TOKEN', data.temp_access_key)
        setToken(data.temp_access_key)
        commit('SET_USER_ID', data.user_id)
        setUserId(data.user_id)

        // 一起处理个人信息
        const name = data.name
        const avatar = data.avatar
        const description = data.description

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_DESCRIPTION', description)

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // TODO 目前没有roles，给个默认值
      const roles = ['editor']
      commit('SET_ROLES', roles)

      resolve({ roles })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_USER_ID', '')
      commit('SET_ROLES', [])
      commit('SET_INIT', false)
      removeToken()
      removeUserId()
      resetRouter()

      dispatch('tagsView/delAllViews', null, { root: true })
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USER_ID', '')
      commit('SET_ROLES', [])
      commit('SET_INIT', false)
      removeToken()
      removeUserId()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
