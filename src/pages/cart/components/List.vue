<template>
  <div class="list">
    <ul>
      <li v-for="item of list" :key="item.id">
        <a href="#">
          <div class="lis-left">
            <img
              @click="toggleSelect(item.id)"
              id="checkImg"
              :src="item.status == 1 ? selectImg : notselectImg"
            />
            <img :src="item.img | recombinationImg" alt="" />
            <div class="desc">
              <h4>{{ item.goodsname | substr(6) }}</h4>
              <div class="money">&yen;{{ item.price.toFixed(2) }}</div>
            </div>
          </div>
          <div class="lis-right">
            <span @click="reduceCart(item.id)">-</span>
            <i>{{ item.num }}</i>
            <b @click="addCart(item.id)">+</b>
          </div>
        </a>
        <div class="del" @click="delCart(item.id)">删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入图片资源
import selectImg from "@/assets/images/selected.png";
import notselectImg from "@/assets/images/not-selected.png";
export default {
  data() {
    return {
      selectImg,
      notselectImg
    };
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleSelect(id) {
      this.$emit("select", id);
    },
    reduceCart(id){
        this.$emit('update',{id,type:'reduce'})
    },
    addCart(id){
        this.$emit('update',{id,type:'add'})
    },
    delCart(id){
      this.$emit('deleteCart',id)
    }
  }
};
</script>

<style>
#checkImg {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0;
}
</style>
