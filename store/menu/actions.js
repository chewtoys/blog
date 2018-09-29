import { menuList } from "../../lib/api";
export default{
  // 目录列表
  async getMenuList({commit,state}) {
    let { rows } = await menuList();
    commit('setMenuList', rows);
  },
};
