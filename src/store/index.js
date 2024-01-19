import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Resume: [],
    Projects: [],
    testimonials: [],
  },
  getters: {
  },
  mutations: {
    Testimonialsdata(state, data) {
      state.testimonials = data ;
    }
  },
  actions: {
    fetchTestData({ commit }) {
      axios.get('http://localhost:3000/testimonials')
      .then(response => {
        commit('Testimonialsdata',response.data);
      })
      .catch(error => {
        console.error('Error fetching data:',error);
      });
    },
    fetchData({ commit }) {
      axios.get('')
      .then(response => {
        commit('Resumedata',response.data);
      })
      .catch(error => {
        console.error('Error fetching data:',error);
      });
    }
  },
  modules: {
  }
});
