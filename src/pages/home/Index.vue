<template>
  <!-- 首页 -->
  <div class="ushop">
    <!-- 头部 -->
    <u-header />
    <!-- 导航 -->
    <u-nav />
    <!-- 轮播图 -->
    <u-banner />
    <!-- 限时抢购 -->
    <u-icon-nav />
    <!-- 限时秒杀 -->
    <u-seckill />
    <!-- bar -->
    <div class="bar">
      <a href="#">
        <img src="@/assets/images/index/bar.jpg" alt="" />
      </a>
    </div>
    <!-- 热门推荐 -->
    <u-recommend />
    <!-- 下导航 每个页面都有公共组件 tabbar-->
  </div>
</template>

<script>
import UHeader from "./components/Header";
import UNav from "./components/Nav";
import UBanner from "./components/Banner";
import UGoodeList from "./components/GoodsList";
import USeckill from "./components/Seckill";
import UIconNav from "./components/IconNav";
import URecommend from "./components/Recommend";
export default {
  components: {
    UHeader,
    UNav,
    UBanner,
    UGoodeList,
    USeckill,
    UIconNav,
    URecommend
  }
};
</script>

<style>
/* 引入首页的样式 */
@import url("../../assets/css/index.css");
</style>
