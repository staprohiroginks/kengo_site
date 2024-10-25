// ハンバーガーメニュー
  const button = document.querySelector(".button");
  const box = document.querySelector(".box");
  
  button.addEventListener("click",function(){
      button.classList.toggle("open");
      box.classList.toggle("open");
  });

//  スライダー
  const swiper = new Swiper('.swiper', {
    
    loop: true,
    speed:1000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });