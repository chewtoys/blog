import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import menu from './menu'
import article from './article'
import mood from './mood'

const store = () => new Vuex.Store({
  modules: {
    menu,
    article,
    mood,
  }
})
export default store;
