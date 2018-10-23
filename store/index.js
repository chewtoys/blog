import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import common from './common'
import brand from './brand'
import article from './article'
import mood from './mood'

const store = () => new Vuex.Store({
  modules: {
    common,
    brand,
    article,
    mood,
  }
})
export default store;
