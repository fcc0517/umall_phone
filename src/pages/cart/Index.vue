<template>
  <div class="shopBus">
    <!-- 头部 -->
    <u-header title="购物车" />
    <!-- 商品 -->
    <u-list @deleteCart='Cartdel' :list="list" @update="updateCart" @select="toggleSelect" />
    <!-- 购物车结算 -->
    <u-count
      :selectAll="selectAll"
      :total="total"
      :cartNum="cartNum"
      @select="toggleSelectAll"
    />
    <!-- 下导航 -->
  </div>
</template>

<script>
import UHeader from "../../components/Header";
import UList from "./components/List";
import UCount from "./components/count";
import { getCartList ,deleteCart} from "@/api/cart";
import { Toast } from 'vant'
export default {
  data() {
    return {
      list: [], //购物车的数据
      selectAll: true, //是否全选
      total: 0, //购物车的金额
      cartNum: 0, //购物车的数量合计
      cartList: ""
    };
  },
  components: {
    UHeader,
    UList,
    UCount
  },
  mounted() {
    // getCart获取接口数据的函数
    this.getCart();
    this.countCart();
  },
  methods: {
    getCart() {
      const { uid } = JSON.parse(sessionStorage.getItem("user"));
      //   console.log(uid);
      // 调用接口拿到数据
      getCartList(uid).then(res => {
        console.log(res);
        this.list = res;
        //  console.log(this.list);
        this.countCart();
      });
    },
    // 购物车的统计
    countCart() {
      let total = 0;
      let cartNum = 0;
      let selectAll = true;
      //  如果购物车的数据不为空，计算购物车金额
      if (this.list.length > 0) {
        this.list.forEach(item => {
          if (item.status) {
            total += item.price * item.num;
            cartNum += item.num;
          } else {
            //  反之没有全选
            selectAll = false;
          }
        });
      } else {
        //  购物车数据为空
        selectAll = false;
      }
      this.total = total;
      this.cartNum = cartNum;
      this.selectAll = selectAll;
    },
    //  接收到子组件List传来的数据
    updateCart(res) {
      const cart = this.list.find(item => item.id === res.id);
      if (res.type === "add") {
        cart.num += 1;
      } else if (res.type === "reduce") {
        if (cart.num > 1) {
          cart.num -= 1;
        }
      }
      this.countCart();
    },
    toggleSelect(id) {
      const cartList = this.list.find(item => item.id === id);
      cartList.status = !cartList.status;
      this.countCart();
    },
    toggleSelectAll() {
      this.selectAll = !this.selectAll;
      this.cartList = this.list.map(item => {
        item.status = this.selectAll;
        return item;
      });
      this.countCart();
    },
    Cartdel(id){
      // console.log(typeof id);
      // this.list.splice(id-1,1)
      deleteCart(id).then(() => {
        Toast.success('删除成功');
        this.getCart();
        this.countCart();
      }).catch(() => {
         Toast.fail('删除失败');
      })
    }
  }
};
</script>

<style>
@import url("../../assets/css/shopBus.css");
</style>
