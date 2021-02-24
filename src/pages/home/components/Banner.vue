<template>
  <van-swipe class="banner" :autoplay="3000" indicator-color="white">
  <van-swipe-item class="banner-img" v-for="item of list" :key="item.id">
      <img :src="item.img | recombinationImg " alt="">
  </van-swipe-item>
</van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import{mapState} from 'vuex'
export default {
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  },
  computed:{
      ...mapState({
          list : state => state.banner.list
      })
  },
  mounted(){
      if(this.list.length === 0){
          this.$store.dispatch('banner/getBannerList')
      }
  }
};
</script>

<style scoped>
.banner{
    height: 2.9rem;
    width: 100%;
    overflow: hidden;
}
.banner-img img{
    width: 100%;
    height: 100%;
}
</style>
