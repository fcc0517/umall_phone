import Vue from "vue";
import { addCart } from "@/api/cart";
import { Toast } from "vant";

Vue.mixin({
  methods: {
    // 添加购物车
    addCart(goodsId, BuyNum = 1) {
      let userinfo = sessionStorage.getItem("user");
      // 如果没有登录，直接跳转登录页面
      if (!userinfo) {
        Toast.fail('请先登录')
        this.$router.push("/login");
        return;
      }
      userinfo = JSON.parse(userinfo);
    //   添加购物车
      addCart(userinfo.uid, goodsId, BuyNum)
        .then(() => {
          Toast.success("添加成功");
        })
        .catch(err => {
          Toast.fail(err.message);
        });
    }
  }
});
