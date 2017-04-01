import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'

Vue.use(Vuex)
Vue.use(VuexFire)

export const store = new Vuex.Store({
  state: {
    messages: null
  },
  mutations: VuexFire.mutations,
  getters: {
    messages: state => {
      return state.messages
    }
  }
})
