// 引入Vue
import Vue from 'vue';
// 引入插件---2.213版本的
import VeeValidate from 'vee-validate';
// 汉化---显示中文方式
import zh_CN from 'vee-validate/dist/locale/zh_CN'
// 声明使用插件
Vue.use(VeeValidate);
// 一会把validate卸载---
VeeValidate.Validator.localize('zh_CN', {
  // 简化代码的时候出现了一个坑----解决这个坑
  messages: zh_CN.messages,
  // 属性汉化的操作
  attributes: {
    phone: '手机号码',
    code: '短信验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '图形验证码'
  }
});
// 扩展方法,新添加了一个changePhone的属性---用来验证的手机号码是否是正确的
VeeValidate.Validator.extend('changePhone', {
  // 验证手机号码的一个提示信息
  getMessage: field => `请输入正确的` + field,
  // 验证手机号码的规则
  validate: value => {
    return /^[1]\d{10}$/.test(value)
  }
})


// var dict = {
//   zh_CN: {
//     messages: {
//       required: function (field) {
//         return '请输入' + field;
//       },
//       confirmed: function (field) {
//         return '两次输入的密码不一致';
//       }
//     },
//     attributes: {
//       OldPassword: '旧密码',
//       NewPassword: '新密码',
//       ConfirmNewPassword: '确认密码',
//     }
//   }
// };
