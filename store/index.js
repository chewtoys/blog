import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import about from './about'
import menu from './menu'
import article from './article'
import mood from './mood'

const store = () => new Vuex.Store({
  modules: {
    about,
    menu,
    article,
    mood,
  }
})
export default store;
