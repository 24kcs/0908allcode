// 自定义插件---Vue中的插件很多,目前还有使用到Vue中的插件
// 插件就是封装了一些代码-能够实现相关的功能,在使用之前先暴露出去,声明使用即可
// 插件也是一个对象,所以,对象能够在window下可以使用,必然要进行暴露
(function (window) {
	// 定义了一个对象
	const MyPlugin = {}
	// 当前的这个插件的全局资源(全局方法)或者实例的方法或者一些资源都在这里写
	MyPlugin.install = function (Vue) {
		// 定义全局方法
		Vue.myGlobalMethod = function () {
			console.log('全局的方法')
		}
		// 添加一个全局指令
		Vue.directive('my-directive', function (el, binding) {
			el.textContent = 'my-directive' + '===' + binding.value
		})
		// 定义实例方法
		Vue.prototype.$myMethod = function () {
			console.log('实例方法')
		}
	}

	// 向外暴露这个对象
	window.MyPlugin = MyPlugin

})(window)


// const vm = new Vue()
// Vue.sayHi() 全局方法
// vm.$eat() 实例方法