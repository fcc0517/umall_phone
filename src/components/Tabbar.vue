<template>
   <div class="nav-bottom" id="tabbar">
            <router-link to="/" exact-active-class="active">
                <em class="iconfont">&#xe620;</em>
                <span>首页</span>
            </router-link>
            <router-link to="/category" exact-active-class="active">
                <em class="iconfont">&#xe6a7;</em>
                <span>分类</span>
            </router-link>
            <router-link to="/cart" exact-active-class="active">
                <em class="iconfont">&#xe618;</em>
                <span>购物车</span>
            </router-link>
            <router-link to="/me" exact-active-class="active">
                <em class="iconfont">&#xe61d;</em>
                <span>我的</span>
            </router-link>
        </div>
</template>


<script>
export default {
  
}
</script>


<style  scoped>

</style>