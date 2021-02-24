<template>
    <article>
            <ul>
                <li v-for="item of list" :key='item.id'><a href="#">{{item.catename}}</a></li>
            </ul>
            <button class="iconfont icon-icon1"></button>
        </article>
</template>


<script>
import {mapGetters } from 'vuex'
export default {
  computed:{
      ...mapGetters({
          list : "category/firstCategoryList"
      })
  },
  mounted(){
    //   判断如果没有数据，通过vuex重新获取数据
      if(this.list.length === 0){
          this.$store.dispatch('category/getCategoryList')
      }
  }
}
</script>


<style  scoped>

</style>