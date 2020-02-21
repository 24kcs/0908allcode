(function () {


  // 使用let
  // 获取footer中所有的a
  var aObjs = document.querySelectorAll('.app .footer .footItem')
  // 所有的sction标签
  var sections = document.querySelectorAll('.app .content section')
  // 遍历所有的a标签,绑定点击事件---touchend
  for (let i = 0; i < aObjs.length; i++) {
    var item = aObjs[i]
    // 使用自定义属性存储索引值i
    item.addEventListener('touchend', function () {
      for (var j = 0; j < aObjs.length; j++) {
        aObjs[j].className = 'footItem'
        sections[j].className = ''
      }
      // 设置当前的a的类样式active
      this.className = 'footItem active'
      // 同时设置当前a对应的sction标签应用on类样式
      sections[i].className = 'on'
    }, false)
  }


  // 闭包

  // // 排他效果
  // // 获取footer中所有的a
  // var aObjs = document.querySelectorAll('.app .footer .footItem')
  // // 所有的sction标签
  // var sections = document.querySelectorAll('.app .content section')
  // // 遍历所有的a标签,绑定点击事件---touchend
  // for (var i = 0; i < aObjs.length; i++) {
  //   var item = aObjs[i]
  //   ;(function(i){
  //     item.addEventListener('touchend', function () {
  //       for (var j = 0; j < aObjs.length; j++) {
  //         aObjs[j].className = 'footItem'
  //         sections[j].className = ''
  //       }
  //       // 设置当前的a的类样式active
  //       this.className = 'footItem active'
  //       // 同时设置当前a对应的sction标签应用on类样式
  //       sections[i].className = 'on'
  //     }, false)
  //   })(i);
    
  // }



  // // 排他效果
  // // 获取footer中所有的a
  // var aObjs = document.querySelectorAll('.app .footer .footItem')
  // // 所有的sction标签
  // var sections = document.querySelectorAll('.app .content section')
  // // 遍历所有的a标签,绑定点击事件---touchend
  // for (var i = 0; i < aObjs.length; i++) {
  //   var item = aObjs[i]
  //   // 使用自定义属性存储索引值i
  //   item.index = i
  //   item.addEventListener('touchend', function () {
  //     for (var j = 0; j < aObjs.length; j++) {
  //       aObjs[j].className = 'footItem'
  //       sections[j].className = ''
  //     }
  //     // 设置当前的a的类样式active
  //     this.className = 'footItem active'
  //     // 同时设置当前a对应的sction标签应用on类样式
  //     sections[this.index].className = 'on'
  //   }, false)
  // }




  // 轮播图代码
  var swiper = new Swiper('.swiper-container', {
    // 间隔
    spaceBetween: 30,
    centeredSlides: true,
    // 自动播放
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    // 小圆点
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // 设置循环轮播
    loop: true
  });
})(window)