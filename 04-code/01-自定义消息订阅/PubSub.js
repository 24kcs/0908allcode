/**
 * 自定义消息订阅的原理代码---PubSub
 * .subscribe(msg,subscriber)---订阅消息
 * .publish(msg,data)----发布消息---异步
 * .publishSync(msg,data)---发布消息---同步
 * .unsubscribe(token)---取消消息订阅
 * 
 * msg------消息名字----事件的名字
 * subscriber---回调函数
 * data----数据参数
 * token---标识
 * 
 * var token1=PubSub.subscribe('add',f1)
 * var token2=PubSub.subscribe('add',f2)
 * var token3=PubSub.subscribe('add',f3)
 * 定义一个容器,存储消息名字及对应的回调函数,对象
 * {'add':[f1,f2,f3]}---还不完整
 * {token1:f1,token2:f2,token3:f3}---token对应回调
 * {'add':{token1:f1,token2:f2,token3:f3},'del':{token4:f4}}
 * 
 * 
 * 
 */
// 自调用函数
(function (window) {
  // 创建消息订阅对象PubSub
  const PubSub = {}
  // 定义一个容器对象,用来存储消息名字及对应的一个对象(这个对象中是以键值对象的方式存储token和回调函数)
  let subscribersContainer = {} // 大容器
  // id标识
  let id = 0
  // {'add':{token1:f1,token2:f2,token3:f3}--小容器,'del':{token4:f4}}
  // 订阅消息
  PubSub.subscribe = function (msg, subscriber) {
    // 根据订阅消息的名字获取对应的所有回调函数的容器
    let subscribers = subscribersContainer[msg]
    // 判断小容器是否存在的
    if (!subscribers) {
      // 没有这个容器
      subscribers = {}
      // 消息名字和小容器以键值对的方式存储到大的容器中
      // {'add':{}}
      subscribersContainer[msg] = subscribers
    }
    // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
    // 创建token
    const token = 'id_' + ++id
    // token和回调以键值对的方式存储到小的容器中
    subscribers[token] = subscriber
    // {'add':{'id_1':回调}}
    return token // 返回token标识
  }
  // PubSub.publisSync('add',12345)
  // 同步发布消息
  PubSub.publishSync = function (msg, data) {
    // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
    let subscribers = subscribersContainer[msg]
    // 判断这个小容器对象是否存在
    if (subscribers) {
      // 对象转数组---[f1,f2,f3]
      Object.values(subscribers).forEach(subscriber => {
        subscriber(data)
      })
    }
  }

  // 异步发布消息
  PubSub.publish = function (msg, data) {
    // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
    let subscribers = subscribersContainer[msg]
    setTimeout(() => {
      // 判断这个小容器对象是否存在
      if (subscribers) {
        // 对象转数组---[f1,f2,f3]
        Object.values(subscribers).forEach(subscriber => {
          subscriber(data)
        })
      }
    }, 1000)

  }

  // 取消消息订阅----- token啥也没有  token--> 'id_1' token ='add'
  PubSub.unsubscribe = function (token) {
    // 判断token是否传进来
    if (typeof token === 'undefined') {
      // 什么也没传
      subscribersContainer = {}
    } else if (token.indexOf('id_') !== -1) {
      // 根据token标识---[{'id_1':f1,'id_2':f2,'id_3':f3},{token4:f4}]
      const subscribers = Object.values(subscribersContainer).find(subscribers => subscribers[token])
      subscribers && delete subscribers[token]

    } else {
      // 根据消息名字取消消息订阅
      delete subscribersContainer[token]
    }
    // {'add':{'id_1':f1,'id_2':f2,'id_3':f3}--小容器,'del':{token4:f4}}
  }


  // 暴露出去
  window.PubSub = PubSub

})(window)