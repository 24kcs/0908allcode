(function () {

  // 点击下面的菜单,对应的上面导航显示出来
  // 获取footer中所有的a
  var aObjs = document.querySelectorAll('.app .footer .footItem')
  // 获取所有的section
  var sections = document.querySelectorAll('.app .content section')
  // 遍历所有的a


  // let的方式
  for (let i = 0; i < aObjs.length; i++) {
    var item =aObjs[i]
    item.index=i
    item.addEventListener('touchend',function(){
        for(var j=0;j<aObjs.length;j++){
          aObjs[j].className='footItem'
          sections[j].className=''
        }
        this.className='footItem active'
        sections[i].className='on'
    })
  }

  // 闭包的方式
  // for (var i = 0; i < aObjs.length; i++) {
  //   var item =aObjs[i]
  //   item.index=i
  //   ;(function(i){item.addEventListener('touchend',function(){
  //     for(var j=0;j<aObjs.length;j++){
  //       aObjs[j].className='footItem'
  //       sections[j].className=''
  //     }
  //     this.className='footItem active'
  //     sections[i].className='on'
  // },false)})(i);
  // }



  // for (var i = 0; i < aObjs.length; i++) {
  //   var item =aObjs[i]
  //   item.index=i
  //   item.addEventListener('touchend',function(){
  //       for(var j=0;j<aObjs.length;j++){
  //         aObjs[j].className='footItem'
  //         sections[j].className=''
  //       }
  //       this.className='footItem active'
  //       sections[this.index].className='on'
  //   })
  // }

  // 轮播图
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
    // 循环播放
    loop: true

  });
})(window)