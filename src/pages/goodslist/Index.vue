<template>
  <!-- 精选好货 -->
  <div class="classification">
    <!-- 头部 -->
    <u-header :title="title" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <u-list :list="list" />
    </van-list>
  </div>
</template>

<script>
import UHeader from "../../components/Header";
import UList from "./components/List";
import { List } from "vant";
import { getGoodsList, getGoodsTotal } from "@/api/goods";
export default {
  components: {
    UHeader,
    UList,
    VanList: List,
  },
  data() {
    return {
      list: [], //商品列表数据
      title: "",
      fid: 0, //一级分类的id
      sid: 0, //二级分类的id
      loading: false, //是否在加载
      finished: false, //加载完成后的状态
      page: 1, //当前的页码
      size: 5, //每次加载的数量
    };
  },
  methods: {
    async onLoad() {
      // console.log('onLoad');
      const total = await getGoodsTotal(this.fid, this.sid);
      const page = this.page++;
      getGoodsList(this.fid, this.sid, page, this.size).then((res) => {
        // 把两个数据整合到一起
        this.list = [...this.list, ...res]
        this.loading = false;
        if (this.list.length >= total) {
          this.finished = true;
        }
      });
    },
  },
  mounted() {
    this.title = this.$route.params.name || "商品列表";
    // console.log("route",this.$route);
    this.fid = parseInt(this.$route.params.fid); //接收路由参数
    this.sid = parseInt(this.$route.params.sid);
    // console.log(this.fid, this.sid); //接收路由参数
    // 调用接口的时间，同是传catId过去获取
    // this.$store.dispatch("goods/getGoodList", { id: this.catId });
  },
};
</script>

<style>
@import url("../../assets/css/classification.css");
</style>
