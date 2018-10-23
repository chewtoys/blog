import { brandList,addBrand,delBrand,updateBrand } from "../../lib/api";
import { Notification } from 'element-ui'
export default{
  // 数据列表
  async search({commit}) {
    let res = await brandList();
    commit('setSearchData', res);
  },

  // 新增数据
  async addItem({commit,dispatch,state}) {
    let res = await addBrand(state.dialogForm);
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '添加成功',});
      commit('toggleDialog');
      dispatch('search');
    }
  },

  // 删除数据
  async delItem({dispatch},id) {
    let res = await delBrand({ id: id });
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '删除成功',});
      dispatch('search');
    }
  },

  // 更新数据
  async updateItem({dispatch,commit,state}){
    let res = await updateBrand(state.dialogForm);
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '更新成功',});
      commit('toggleDialog');
      dispatch('search');
    }
  }
};
