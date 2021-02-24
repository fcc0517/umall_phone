import { getIndexGoodsList,getGoodsList } from "@/api/goods";
// 设置默认的数据，因为接口返回了三个数组，用三个数组接收一下
const defaultIndexData = {
  hot:[],
  new:[],
  all:[]
}
export default {
  namespaced: true,
  state: {
    indexList:{...defaultIndexData},//首页商品数据
    list: [] //商品列表
  },
  mutations:{
    SET_INDEX_LIST(state,list){
        state.indexList = list
      },
    SET_LIST(state,list){
      state.list = list
    }
  },
  actions:{
    getIndexGoodsList({commit}){
      getIndexGoodsList().then(res => {
          // 获取到对应的分类数据
          const list = {
            hot:res[0].content || [],
            new:res[1].content || [],
            all:res[2].content || [],
          }
            commit('SET_INDEX_LIST',list)
        })
    },
    getGoodsList({commit},payload){
      getGoodsList(payload.id).then(res => {
        console.log(res);
        commit('SET_LIST',res)

      })
    }
  }
};
