import { createStore } from 'vuex'
import { Login } from './Login'
import { Nasa } from './Nasa'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login: Login,
    nasa: Nasa,
  }
})
