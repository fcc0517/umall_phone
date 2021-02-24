<template>
  <div class="main-right">
    <div class="haird">
      <div class="desc-top">
        <router-link
          :to="`/goodslist/${fid}/${item.id}/${fcategory}-${item.catename}`"
          v-for="item of list"
          :key="item.id"
        >
          <img
            v-if="item.img !== ''"
            :src="item.img | recombinationImg"
            alt=""
          />
          <p>{{ item.catename }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    },
    fcategory:String, //一级分类的名称
    fid:Number
  }
};
</script>

<style scoped></style>
