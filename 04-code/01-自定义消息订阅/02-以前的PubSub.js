/**
 * 
 * 自定义PubSub
 * PubSub.subscribe(msg,subscriber)---订阅消息
 * PubSub.publish(msg,data)---发布消息--异步
 * PubSub.publishSync(msg,data)---发布消息--同步
 * PubSub.unsubscribe(token)---取消消息订阅
 * 
 * msg---消息名字---相当于事件名字
 * subscriber---回调---相当于事件的回调函数
 * data---数据
 * token---标识
 * 
 * 消息订阅需要提供标识
 * var token1=PubSub.subscribe('add',f1)
 * var token2=PubSub.subscribe('add',f2)
 * {'add':{token1:f1,token2:f2},'del':{token3:f3}}
 * 
 * 
 */
(function (window) {
  // 定义消息订阅对象
  const PubSub = {}
  // 用来存储消息及对应回调函数的容器对象
  let subscriberContainer = {}
  // id标识
  let id = 0
  // 订阅消息
  PubSub.subscribe = function (msg, subscriber) {
    // 根据订阅消息名字获取对应的所有回调的容器
    let sbuscribers = subscriberContainer[msg]
    // 判断容器是否存在
    if (!sbuscribers) {
      // 没有这个容器
      sbuscribers = {}
      // 消息名字和对应的容器存储到大的容器中,键值对
      subscriberContainer[msg] = sbuscribers
    }
    // 创建token
    const token = 'id_' + ++id
    // 根据标识添加对应的回调
    sbuscribers[token] = subscriber
    // 并返回标识
    return token

  }
  // 异步发布消息
  PubSub.publish = function (msg, data) {
    const subscribers = subscriberContainer[msg]
    setTimeout(() => {
      // 判断容器是否存在
      if (subscribers) {
        Object.values(subscribers).forEach(subscriber => {
          subscriber(data)
        })
      }
    }, 1000)
  }
  // 同步发布消息
  PubSub.publishSync = function (msg, data) {
    const subscribers = subscriberContainer[msg]
    // 判断容器是否存在
    if (subscribers) {
      Object.values(subscribers).forEach(subscriber => {
        subscriber(data)
      })
    }
  }
  // 取消消息订阅
  PubSub.unsubscribe = function (token) {
    // 判断token是否窜入
    if (typeof token === 'undefined') {
      subscriberContainer = {}
    } else if (token.indexOf('id_') !== -1) {
      // 根据标识删除消息
      const subscribers = Object.values(subscriberContainer).find(subscribers => subscribers[token])
      subscribers && delete subscribers[token]
    } else {
      // 根据名字删除消息
      delete subscriberContainer[token]
    }
  }

  // 向外暴露PubSub
  window.PubSub=PubSub
})(window)