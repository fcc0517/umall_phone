import http from "./http";

export const getIndexGoodsList = () => {
  return http.get("/getindexgoods");
};
// 获取商品的总数
export const getGoodsTotal = (fid, sid, keyword = "") => {
  return http
    .get("/goodscount", {
      params: {
        fid,
        sid,
        keyword
      }
    })
    .then(res => res[0].total || 0);
};

// 分页获取数据
export const getGoodsList = (fid, sid, page = 1, size = 5) => {
  return http.get("/goodslist", {
    params: {
      fid,
      sid,
      page,
      size
    }
  });
};
