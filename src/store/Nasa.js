import axios from 'axios'

const NASA_API = 'https://api.nasa.gov/planetary/apod?api_key=b8B6CITeZJhzttzri98034vQFYB7L54fc7ywxQak';

export const Nasa = {
  state: {
    isLoading: false,
    planetary: {},
  },
  mutations: {
    handlePlanetary(state, payload) {
      state.planetary = payload;
    },
    handleLoading(state, payload) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    handleNasaApi({commit, state}, payload) {
      axios({
        method: 'get',
        url: NASA_API,
        params: {}
      })
      .then(res => {
        console.log(res);
        commit('handlePlanetary', res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}