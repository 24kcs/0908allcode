(function(){


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
    loop:true
  });
})(window)