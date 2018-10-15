export default {
  setSearchData(state, data) {
    state.dataList = data.rows;
  },

  toggleDialog(state) {
    state.dialogForm = { id: 0, name: '', name_sub: '',};
    state.dialogVisible = !state.dialogVisible;
  },

  setDialogForm(state, data) {
    state.dialogForm = {
      id: data.id,
      name: data.name,
      name_sub: data.name_sub,
    };
  }
}
