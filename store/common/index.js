import actions from './actions.js';
import mutations from './mutations.js';

export const state = {
  githubUser: {
    login: '',        // 登录用户名
    avatar_url: '',   // github个人图标
  },
  token: '',
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
