import http from './http'
// 获取轮播图列表
export const getBannerList = () =>{
    return http.get('/bannerlist')
}