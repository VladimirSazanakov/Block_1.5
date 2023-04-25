
let body = document.querySelector('body');
let moreBtn = document.querySelector('.service-software__more-text');
let swiperLayout768 = document.querySelector('.swiper');
let swiper = undefined;

moreBtn.addEventListener('click', function(){
  swiperLayout768.classList.toggle('swiper--show-all');
  if (!moreBtn.classList.contains('service-software__more-text--less')) {
    moreBtn.innerHTML = 'Скрыть';
    moreBtn.classList.add('service-software__more-text--less');
  } else {
    moreBtn.innerHTML = 'Показать больше';
    moreBtn.classList.remove('service-software__more-text--less');
  }
})

let useSwiper = function() {
  if (window.innerWidth < 768) {
    if (!swiper){
      swiper = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: document.documentElement.scrollWidth/256,
        slidesPerGroup: 1,
        spaceBetween: 0,
        freeMode: true,
        slidesOffsetAfter: 40,
      });
    } else {
      swiper.params.slidesPerView = document.documentElement.scrollWidth/256;
      swiper.update();
    }
  } else if(swiper) {
    swiper.destroy(true, true);
    swiper = undefined;
  }
}

window.onload = function(){
  useSwiper();
};

window.addEventListener('resize', function(){
  useSwiper();
  
})