import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      meta: {
        title: "首页"
      },
      component: () => import("@/pages/home/Index")
    },
    {
      path: "/login",
      meta: {
        title: "用户登录"
      },
      component: () => import("@/pages/login/Index")
    },
    {
      path: "/me",
      meta: {
        title: "我的"
      },
      component: () => import("@/pages/me/Index")
    },
    {
      path: "/register",
      meta: {
        title: "用户注册"
      },
      component: () => import("@/pages/register/Index")
    },
    {
      path: "/cart",
      meta: {
        title: "购物车",
        checkLogin: true // 是否需要进行登录的判断
      },
      component: () => import("@/pages/cart/Index")
    },
    {
      path: "/category",
      meta: {
        title: "商品分类"
      },
      component: () => import("@/pages/category/Index")
    },
    {
      path: "/goodslist/:fid/:sid/:name",
      meta: {
        title: "商品列表"
      },
      component: () => import("@/pages/goodslist/Index")
    }
  ]
});
// 创建导航守卫
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title || "小u商城"
  const checkLogin = to.meta.checkLogin || false
  // 需要登录验证
  if(checkLogin){
    const userinfo = sessionStorage.getItem('user')
    if(!userinfo){
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})
export default router;
