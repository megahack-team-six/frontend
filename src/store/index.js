import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appBar: false
  },
  getters: {
    appBar: ({ appBar }) => appBar
  },
  mutations: {
    toggleAppBar (state, visible = true) {
      state.appBar = visible
    }
  },
  actions: {
    toggleAppBar ({ commit }, visible) {
      commit('toggleAppBar', visible)
    }
  },
  modules: {
  }
})
