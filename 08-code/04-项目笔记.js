/**
 * 
 * 
 * 1. 使用脚手架2下载工程
 * vue init webpack gshop
 * npm run dev 运行项目  或者 npm start
 * npm run bulid 打包
 * serve dist 运行打包文件
 * 2. 干掉src目录中所有的不需要的文件及代码,自己重新写所有的文件及代码
 * 3. 创建main.js和App.vue文件,及把里面必要的代码准备好
 * 4. App.vue中的下面的代码:<style lang="stylus" rel="stylesheet/stylus">这里将来放stylus代码</style>
 * 将来很多组件文件中都会写stylus代码
 * 于是乎: 安装stylus及相关的的插件包
 *      npm install stylus stylus-loader
 * 在config目录中的index.js文件中设置浏览器自动打开,第18行代码位置修改:autoOpenBrowser: true
 * 
 * 5. 准备项目需要的一些静态资源
 *    1), 重置样式---一般放在static目录的css目录中(图标字体的文件也可以放在这里)
 *    2), 相关的stylus的混合文件 放在src目录中的common目录中的stylus目录中---是在一些组件中引入使用的,现在不用
 *    3), 图标字体
 *    4), 去index.html中设置基本的代码
 *        移动端的代码设置, 引入重置样式的css文件,引入图标字体的文件(可以是在线引入),设置移动端延迟的0.3s的代码
 * 
 * 6. 在src目录中创建相关的目录,开始进行开发
 * api目录: 用来存放接口文件及ajax文件
 * common目录:用来存储静态资源文件(stylus的混合文件)
 * components目录:用来存放各种组件目录及文件
 * filter目录:用来存储过滤器的先关文件
 * mock目录:用来存储模拟的数据及相关文件
 * pages目录:用来存储路由组件目录及文件
 * router目录:用来存储路由配置的相关文件
 * store目录:用来存储Vuex相关的文件
 * 
 * 
 * 
 */