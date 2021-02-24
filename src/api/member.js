import http from "./http";
// 会员注册
export const register = (phone, nickname, password) => {
  if (!phone || !nickname || !password) {
    return Promise.reject(new Error("参数不正确"));
  }
  return http.post("/register", {
    phone,
    nickname,
    password
  });
};

// 会员登录
export const loginUser = (phone, password) => {
  if (!phone || !password) {
    return Promise.reject(new Error("参数不正确"));
  }
  return http.post("/login", {
    phone,
    password
  });
};
