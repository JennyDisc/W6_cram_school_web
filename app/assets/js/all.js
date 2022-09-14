// Swiper程式清單跑馬單
var swiper = new Swiper('.course-swiper', {
  // 自動撥放
  autoplay: {
      disableOnInteraction: false,
      delay: 0
  },
  speed: 1500,
  loop: true,
  // 卡片元素的間隔 
  spaceBetween: 16,
//   centeredSlides: true,
  // "auto"值會根據 swiper-slide 寬度自動調整畫面出現的數量 
  slidesPerView: "auto",
});


// Swiper心得分享
const feedbackswiper = new Swiper('.feedback-swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
