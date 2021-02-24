import { getCategoryList } from "@/api/category";

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    // 获取一级分类
    firstCategoryList(state) {
      return state.list
        .filter(item => item.pid === 0)
        .map(item => ({
          id: item.id,
          catename: item.catename
        }));
    }
  },
  mutations:{
      SET_LIST(state,list){
        state.list = list
      }
  },
  actions:{
    getCategoryList({commit}){
        getCategoryList().then(res => {
          // console.log(res);
            commit('SET_LIST',res)
        })
    }
  }
};
