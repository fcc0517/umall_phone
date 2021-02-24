<template>
  <div class="fication">
    <!-- 头部 -->
    <u-header title="商品分类" />
    <!-- 主体 -->
    <div class="main">
      <!-- 左边导航 -->
      <u-left :list="firstList" :fid="fid" @change="changeFid" />
      <!-- 右边导航 -->
      <u-right :list="secondCategory" :fcategory='fcategory' :fid='fid' />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import UHeader from "../../components/Header";
import ULeft from "./components/Left";
import URight from "./components/Right";
export default {
  components: {
    UHeader,
    ULeft,
    URight
  },
  data() {
    return {
      fid: 0, //当前点击的一级分类的id，需要监听firstList的变化
      secondCategory: [], //二级分类商品
      fcategory: "" //当前点击的一级分类的名称
    };
  },
  computed: {
    ...mapState({
      category: state => state.category.list
    }),
    ...mapGetters({
      firstList: "category/firstCategoryList"
    })
  },
  watch: {
    category(newList) {
      //一旦监听到firstList的变化，设置fid的默认值
      this.fid = newList[0].id;
      this.fcategory = newList[0].catename || "";
      // 找到第一个分类的二级分类
      this.secondCategory = newList[0].children || [];
    }
  },
  mounted() {
    if (this.category.length === 0) {
      this.$store.dispatch("category/getCategoryList");
    } else {
      //  重新赋值
      this.fid = this.category[0].id;
      this.fcategory = this.category[0].catename || "";
      this.secondCategory = this.category[0].children || [];
    }
  },
  methods: {
    changeFid(id) {
      this.fid = id;
      // 选择对应id的一级分类的二级分类数据
      const category = this.category.find(item => item.id === id);
      this.fcategory = category.catename || "";
      this.secondCategory = category.children || [];
    }
  }
};
</script>

<style>
@import url("../../assets/css/classification_2.css");
</style>
