import {getBannerList} from '@/api/banner'
export default{
    namespaced:true,
    state:{
        list:[]
    },
    mutations:{
        SET_LIST(state,list){
            state.list = list
        }
    },
    actions:{
        getBannerList({commit}){
            getBannerList().then( res => {
                // console.log(res);
                commit('SET_LIST',res)
            })
        }
    }
}