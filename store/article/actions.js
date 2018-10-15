import {getArticleList, addArticle, delArticle, updateArticle} from "../../lib/api";
import { Notification } from 'element-ui'

export default{
  // 数据列表
  async search({commit,state}) {
    let data = {
      "pageNo": state.pageNo,
      "pageSize": state.pageSize,
    };
    let res = await getArticleList(data);
    commit('setSearchData', res);
  },

  // 新增数据
  async addItem({commit,dispatch,state}) {
    console.log(state.newMood.content);
    let res = await addArticle({ content: state.newMood.content });
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '添加成功',});
      commit('toggleDialog');
      dispatch('search');
    }
  },

  // 删除数据
  async delItem({dispatch},id) {
    let res = await delArticle({ id: id });
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '删除成功',});
      dispatch('search');
    }
  },

  // 更新数据
  async updateItem({dispatch,commit,state}){
    let res = await updateArticle(state.menuForm);
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '更新成功',});
      commit('toggleDialog');
      dispatch('search');
    }
  }
};
