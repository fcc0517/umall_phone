<template>
  <header>
    <img src="@/assets/images/iconimg/arrleft_03.jpg" @click="goback" />
    <h3>{{title}}</h3>
    <span class=" iconfont">&#xe708;</span>
  </header>
</template>

<script>
export default {
  props:{
      title:{
          type:String
      }
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>

<style scoped></style>
