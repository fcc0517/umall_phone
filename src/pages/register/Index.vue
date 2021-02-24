<template>
  <div>
    <u-header title="会员注册" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="phoneRules"
      />
      <van-field
        v-model="nickname"
        name="昵称"
        label="昵称"
        placeholder="请输入昵称"
        :rules="[{ required: true, message: '请输入昵称' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round color="#f26b11" block type="info" native-type="submit" :disabled='disabled' :loading='loading' loading-text="注册中..."
          >登录</van-button
        >
      </div>
      <div class="notice">
        <router-link class="link" to="/login">已有账号，去登录</router-link>
      </div>
    </van-form>
  </div>
</template>

<script>
import UHeader from "@/components/Header";
import { Form, Field, Button, Toast } from "vant";
import { register } from "@/api/member";
export default {
  data() {
    return {
      phone: "",
      password: "",
      nickname: "",
      disabled: false,
      loading: false,
      phoneRules: [
        { required: true, message: "请填写正确的手机号码" },
        {
          pattern: /^1[3|4|5|7|8][0-9]{9}$/,
          message: "请输入正确内容"
        }
      ]
    };
  },
  components: {
    UHeader,
    VanForm: Form,
    VanField: Field,
    VanButton: Button
  },
  mounted() {
    // 进入登录页面，隐藏导航栏，只能用DOM操作
    document.querySelector("#tabbar").style.display = "none";
  },
  // 离开登录页面，显示导航栏，用组件内的守卫
  beforeRouteLeave(to, from, next) {
    //   此处注意#tabbar的样式，不能直接改为display = "block"，破坏原有的布局
    document.querySelector("#tabbar").style.display = "flex";
    next();
  },
  methods: {
    onSubmit() {
      // console.log("onSubmit");
      this.disabled=true
      this.loading=true
      // 请求接口数据
      register(this.phone,this.nickname,this.password).then(res => {
        Toast.success('注册成功')
        this.$router.push('/login')
      }).catch(err => {
        Toast.fail(err.message);
      }).finally(res => {
        this.disabled=false
      this.loading=false
      })
    }
  }
};
</script>

<style scoped>
@import url("../../assets/css/");
.notice {
  padding: 0 0.2rem;
  text-align: right;
  font-size: 0.2rem;
}
.link {
  color: #666;
}
</style>
