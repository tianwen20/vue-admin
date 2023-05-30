
const state = {
  table_data: [],
  // api_key、proxy
  show_data: 'api_key',
  show_api_key: -1,
  show_proxy: -1
}

const mutations = {
  SET_TABLE_DATA: (state, table_data) => {
    state.table_data = table_data
  },
  SET_SHOW_DATA: (state, show_data) => {
    state.show_data = show_data
  },

  SET_SHOW_API_KEY: (state, show_api_key) => {
    state.show_api_key = show_api_key
  },
  SET_SHOW_PROXY: (state, show_proxy) => {
    state.show_proxy = show_proxy
  }
}

const actions = {
  setTableData({ commit }, table_data) {
    commit('SET_TABLE_DATA', table_data)
  },

  setShowData({ commit }, show_data) {
    commit('SET_SHOW_DATA', show_data)
  },

  setShowApiKey({ commit }, show_api_key) {
    commit('SET_SHOW_API_KEY', show_api_key)
  },

  setShowProxy({ commit }, show_proxy) {
    commit('SET_SHOW_PROXY', show_proxy)
  },

  // remove token
  removeData({ commit }) {
    return new Promise(resolve => {
      commit('SET_API_KEY_LIST', [])
      commit('show_api_key', -1)
      commit('getShowData', 'api_key')
      commit('show_proxy', -1)
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
