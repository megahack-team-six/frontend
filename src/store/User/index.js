import { getUserCredentials } from '@/services/api'

const state = {
  jwt: '',
  name: '',
  email: '',
  profile: [],
  rules: []
}

const getters = {
  jwt: state => state.jwt,
  name: state => state.name,
  email: state => state.email,
  profile: state => state.profile,
  rules: state => state.rules
}

const mutations = {
  setJWT (state, jwt) {
    state.jwt = jwt
  },
  setName (state, name) {
    state.name = name
  },
  setEmail (state, email) {
    state.email = email
  },
  setProfile (state, profile) {
    state.profile = profile
  },
  setRules (state, rules) {
    state.rules = rules
  }
}

const actions = {
  init ({ dispatch }) {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch('saveCredentials', user)
    }
  },
  saveCredentials ({ commit }, user) {
    commit('setJWT', user.jwt)
    commit('setName', user.name)
    commit('setEmail', user.email)
    commit('setProfile', user.profile)
    commit('setRules', user.rules)
  },
  async login ({ dispatch }, { email, password }) {
    try {
      const user = await getUserCredentials({ email, password })

      const credentials = {
        jwt: user.jwt,
        name: user.nome,
        email: user.email,
        profile: user.perfil,
        rules: user.rules
      }

      localStorage.setItem('user', JSON.stringify(credentials))
      dispatch('saveCredentials', credentials)

      return user.message
    } catch {
      return 'Ocorreu um erro!'
    }
  },
  logout ({ commit }) {
    commit('setJWT', '')
    commit('setName', '')
    commit('setEmail', '')
    commit('setProfile', [])
    commit('setRules', [])

    localStorage.removeItem('user')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
