import { brandList } from "../../lib/api";
import { Notification } from 'element-ui'
export default{
  // 数据列表
  async search({commit}) {
    let res = await brandList();
    commit('setSearchData', res);
  },
};
