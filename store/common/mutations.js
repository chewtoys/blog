export default {
  setSearchData(state, data) {
    state.dataList = data.rows;
    state.total = data.total;
  },

  setPagination(state, pageNo){
    state.pageNo = pageNo;
  },

  toggleDialog(state) {
    state.dialogForm = { content: ''};
    state.dialogVisible = !state.dialogVisible;
  }
}
