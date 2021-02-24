<template>
  <div class="bus-bottom">
    <div class="fot-left" @click="onSelectAll">
      <img id="checkImg" :src="selectAll ? selectImg : notselectImg" />
      <span>全选</span>
    </div>
    <div class="fot-right">
      <div class="min-one">
        <div class="num">
          共计：<em>{{ total.toFixed(2) }}</em>
        </div>
        <div class="sale">不含运费，已优惠&yen;0.00</div>
      </div>
      <div class="min-two">
        <a href="../html/affirm.html">去结算({{ cartNum }}件)</a>
      </div>
    </div>
  </div>
</template>

<script>
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
    cartNum: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    selectAll: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onSelectAll() {
      this.$emit('select')
    }
  }
};
</script>

<style scoped>
#checkImg {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0;
}
</style>
