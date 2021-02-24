<template>
  <div class="main-left">
    <!-- fid代表当前选中的一级分类的ID  -->
    <!-- 需要阻止a标签的默认事件 -->
    <a
      class="cell"
      :class="{ active: fid === item.id }"
      href="#"
      v-for="item of list"
      :key="item.id"
      @click="onChange($event, item.id)"
      >{{ item.catename }}
      </a>
  </div>
</template>

<script>
export default {
  // 因为left跟right组件都需要数据，直接从父组件拿数据，传递过来
  props: {
    list: {
      type: Array,
      required: true
    },
    fid: {
      type: Number
    }
  },

  methods: {
    onChange(e, id) {
      // 阻止a标签的默认事件
      e.preventDefault();
      // console.log(id);
      this.$emit('change',id)
    }
  }
};
</script>

<style scoped>
.main-left {
  justify-content: flex-start !important;
}
.cell {
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  padding-left: 0.15rem !important;
}
.cell.active {
  background: #f26b11;
  color: #fff !important;
}
</style>
