// 处理图片的过滤器
import Vue from "vue";

Vue.filter("recombinationImg", imgSrc => {
  // 如果imgSrc已经是远程路径就不处理  http:// https://
  if (!/^(https?:\/\/).*/.test(imgSrc)) {
    // imgSrc不是http://或者https://开头
    return "http://localhost:3000" + imgSrc;
  }
  return imgSrc;
});

// 字符串截取
Vue.filter("substr", (value, length, suffix = "...") => {
  // 转为字符串，通过字符串截取
  value = value.toString();
  // 判断传入的是不是数字
  if (isNaN(length) || length <= 0) {
    length = value.length;
  }
  // 如果被截取的内容的长度小于传入的长度，不需要进行截取
  if (value.length <= length) {
    return value;
  }
  return value.substr(0, length) + suffix;
});
