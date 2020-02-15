/**
 * 
 * 自己实现事件总线中的三个方法----实现总线的原理
 * 事件总线的对象---EventBus
 * on(eventName,listener)---绑定事件
 * emit(eventName,data)---分发(触发)事件
 * off(eventName)---解绑事件
 * 
 * eventName----事件名字---事件的类型
 * listener----该事件对应的回调函数
 * data---事件对应的回调函数执行的时候需要的参数数据
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 1.使用事件总线绑定事件
 * EventBus.on()
 * 2.使用事件总线分发事件
 * EventBus.emit()
 * 3.使用事件总线解绑事件
 * EventBus.off()
 * 
 * 
 * EventBus.on('add',f1)
 * EventBus.on('add',f2)
 * EventBus.on('add',f3)
 * 
 * EventBus.emit('add',123)---分发
 * 
 * 一个事件是可以绑定多个回调函数的,当触发该事件的时候,所有的回调函数都要执行
 * 容器,容器可以存储事件名字及对应的回调函数
 * 对象容器--{'add':[f1,f2,f3],'del':[f4,f5]}
 * 
 * 
 */

(function (window) {
  // 事件总线对象
  const EventBus = {}
  // 定义一个容器对象---用来存储事件名字及对应的事件回调函数---{'add':[f1,f2,f3],'del':[f4,f5]}
  let listenersContainer = {}
  // 绑定事件
  EventBus.on = function (eventName, listener) {
    // 根据事件名字通过容器对象查找该事件对应的数组
    let listeners = listenersContainer[eventName]
    // {'add':[f1,f2,f3],'del':[f4,f5]}
    // 判断该数组是否存在
    if (!listeners) {
      // 如果该数组容器不存在,则说明是第一次绑定事件,所以,要创建这个数组
      listeners = []
      // 把事件名字作为键,把数组作为值,以键值对的方式存储到大容器对象中
      listenersContainer[eventName] = listeners
      // {'add':[]}
    }
    // 把回调函数添加到对应的数组中(无路是否是第一次绑定事件)
    listeners.push(listener)
  }

  // {'add':[f1,f2,f3],'del':[f4,f5]}
  // EventBus.emit('add', 123)
  // 分发事件
  EventBus.emit = function (eventName, data) {
    // 根据事件名字,在打的容器对象中找对应的数组(存储了事件名字对应的所有回调函数的数组)
    let listeners = listenersContainer[eventName]
    // 判断这个数组是存在情况,并且这个数组中是有数据的(数组的长度是否大于0)
    if (listeners && listeners.length > 0) {
      // 遍历数组中的所有的回调函数,传入参数的同时,并调用
      listeners.forEach(listener => {
        listener(data)
      })
    }
  }


  // {'add':[f1,f2,f3],'del':[f4,f5]}
  // EventBus.off()
  // 解绑事件
  EventBus.off = function (eventName) {
    // 判断是否传入了事件名字
    if (typeof eventName === 'undefined') {
      listenersContainer = {}
    } else {
      // 解绑的是某个名字的事件,就干掉这个事件名字对应的数组
      delete listenersContainer[eventName]
      // 或者
      // listenersContainer[eventName] = []
    }
  }
  // 向外暴露事件总线对象
  window.EventBus = EventBus
})(window)
