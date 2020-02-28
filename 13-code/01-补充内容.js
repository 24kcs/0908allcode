/**
 * 1.插槽
 * 2.混合
 * 3.组件
 * 4.事件
 * 5.双向数据绑定
 * 6.响应式数据
 * 7.项目优化
 * 1)首页ShopList组件中的图片的懒加载
 *  <ul v-if="shops.length"></ul>
 *  <ul>
 *       <li>
 *         <img src="./images/shop_back.svg" alt />
 *       </li>
 *       <li>
 *         <img src="./images/shop_back.svg" alt />
 *       </li>
 *       <li>
 *         <img src="./images/shop_back.svg" alt />
 *       </li>
 *  </ul>
 * 2)图片的懒加载 Food组件
 *    vue-lazyload
 * 3)路由的懒加载
 *    const MSite = ()=>import('../pages/MSite/MSite.vue')
 *    const Search = ()=>import('../pages/Search/Search.vue')
 *    const Order = ()=>import('../pages/Order/Order.vue')
 *    const Profile = ()=>import('../pages/Profile/Profile.vue')
 * 3)data-fns过滤器
 * 路有守卫
 * 8.禅道
 * 9.正向代理和反向代理,打包运行
 * 
 * 
 */