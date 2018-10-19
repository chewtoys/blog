import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import common from './common'
import menu from './menu'
import article from './article'
import mood from './mood'

const store = () => new Vuex.Store({
  modules: {
    common,
    menu,
    article,
    mood,
  }
})
export default store;
