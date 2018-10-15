import actions from './actions.js';
import mutations from './mutations.js';

export const state = {
  dataList: [],
  dialogVisible: false,
  dialogForm: {
    id: 0,
    name: '',
    name_sub: '',
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
