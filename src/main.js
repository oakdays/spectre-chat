// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import db from './db'
import { store } from './store/store'

Vue.config.productionTip = false

import Vuex from 'vuex'
import VuexFire from 'vuexfire'

Vue.use(VuexFire)

import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-exp.css'
import 'spectre.css/dist/spectre-icons.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  computed: Vuex.mapGetters([
    'messages'
  ]),
  firebase: {
    messages: db.ref('messages')
  },
  template: '<App/>',
  components: { App }
})
