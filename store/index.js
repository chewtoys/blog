import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import menu from './menu'

const store = () => new Vuex.Store({
  modules: {
    menu,
  }
})
export default store;
