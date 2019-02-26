import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My custom title',
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {

  },
  actions: {

  }
})
