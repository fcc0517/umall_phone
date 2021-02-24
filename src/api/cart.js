import http from "./http";
// 添加购物车
export const addCart = (uid, goodsid, num) => {
  if (!uid || !goodsid || !num) {
    return Promise.reject(new Error("参数不完整"));
  }
  return http.post("/cartadd", {
    uid,
    goodsid,
    num
  });
};

// 获取购物车
export const getCartList = (uid) => {
  if(!uid){
    return Promise.reject(new Error('uid参数错误'))
  }
  return http.get('/cartlist',{
    params:{
      uid
    }
  })
}
// 删除购物车
export const deleteCart = (id) => {
  return http.post('/cartdelete', { id })
}
