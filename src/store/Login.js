import axios from 'axios'

export const Login = {
  state: {
    token: null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    async fnLogin({ commit }, payload) {
      await axios({
        method: 'get',
        url: 'http://localhost:3000/api/login',
        params: payload
      })
      .then((res) => {
        console.log(res);
        commit('setToken', res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}