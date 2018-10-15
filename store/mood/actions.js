import { moodList,addMood,delMood } from "../../lib/api";
import { Notification } from 'element-ui'

export default{
  // 数据列表
  async search({commit,state}) {
    let data = {
      "pageNo": state.pageNo,
      "pageSize": state.pageSize,
    };
    let res = await moodList(data);
    commit('setSearchData', res);
  },

  // 新增数据
  async addItem({commit,dispatch,state}) {
    console.log(state.dialogForm.content);
    let res = await addMood({ content: state.dialogForm.content });
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '添加成功',});
      commit('toggleDialog');
      dispatch('search');
    }
  },

  // 删除数据
  async delItem({dispatch},id) {
    let res = await delMood({ id: id });
    if(res.flag) {
      Notification.success({ title: '操作提示', message: '删除成功',});
      dispatch('search');
    }
  },
};
