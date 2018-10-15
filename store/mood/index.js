import actions from './actions.js';
import mutations from './mutations.js';

export const state = {
  dataList: [],
  pageNo: 1,
  pageSize: 10,
  total: 20,
  dialogVisible: false,
  dialogForm: { content: '' }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
