<template>
  <div class="list">
    <ul>
      <li v-for="item of list" :key="item.id">
        <a href="#">
          <!-- recombinationImg全局过滤器 -->
          <img :src="item.img | recombinationImg" alt="" />
          <div class="desc">
            <!-- substr全局过滤器 -->
            <h4>{{ item.goodsname | substr(15) }}</h4>
            <div class="money">&yen;{{ item.price }}</div>
            <del>&yen;{{ item.market_price }}</del>
            <div class="must" @click="addCart(item.id, 1)">立即抢购</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
};
</script>

<style scoped>
.list {
  margin-top: 0.2rem;
}
</style>
