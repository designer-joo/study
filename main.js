// Initialize Swiper 

  var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
      slidesPerView: 5,
        slidesPerGroup: 1,
        observer: true,
        observeParents: true,
        spaceBetween: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1280: {
                slidesPerView: 5,
                slidesPerGroup: 1,
            },
            720: {
                slidesPerView: 5,
                slidesPerGroup: 1,
            }
        }
  });
