// 引入axios
import ajax from './ajax.js'
// 定义一个常量,设置地址
// const BASE = `http://localhost:5000`
const BASE = '/api'
// 根据经纬度获取位置详情
export const reqAddress = ({ longitude, latitude }) => ajax.get(BASE + `/position/${latitude},${longitude}`)
// 获取食品分类列表
export const reqCategorys = () => ajax.get(BASE + `/index_category`)
// 根据经纬度获取商铺列表
export const reqShopList = ({ longitude, latitude }) => ajax({
  method: 'GET',
  url: BASE + `/shops`,
  params: {
    longitude,
    latitude
  }
})
// 根据手机号码,发送短信验证码
export const reqSendCode = (phone) => ajax({
  method: 'GET',
  url: BASE + `/sendcode`,
  params: {
    phone
  }
})
// 手机和短信验证码登录方式接口
export const reqSmsLogin = (phone, code) => ajax({
  method: 'POST',
  url: BASE + `/login_sms`,
  data: {
    phone,
    code
  }
})
// 用户名和密码和图形验证码的登录方式接口
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax({
  method: 'POST',
  url: BASE + `/login_pwd`,
  data: {
    name,
    pwd,
    captcha
  }
})