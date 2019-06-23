import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: true
  },
  mutations: {
    SET_MENU(state) {
      return (state.isMenuOpen = !state.isMenuOpen)
    }
  },
  actions: {
    hanldeMenu(context) {
      context.commit('SET_MENU')
    }
  },
  getters: {
    isMenuOpen: state => state.isMenuOpen
  }
})
