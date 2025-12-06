import SwiperCore from "swiper";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid, Parallax]);

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export const sliderProps = {
  hero: {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
    pagination: {
      el: ".pegi-number",
      type: "fraction",
    },
  },
  foodCatagorySlider: {
    spaceBetween: 30,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  brandSlider: {
    spaceBetween: 30,
    speed: 1000,
    loop: "true",
    speed: 1000,
    //centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1399: {
        slidesPerView: 6,
      },
      991: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
    },
  },
  testimonialContentSlider: {
    speed: 1000,
    loop: "true",
    autoplay: true,
    centeredSlides: true,
  },
  testimonialImageSlider: {
    speed: 1000,
    loop: true,
    // spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: true,
    grabCursor: true,
    centeredSlides: true,
  },
  gallerySlider: {
    spaceBetween: 30,
    loop: "true",
    speed: 2000,
    //centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      485: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  testimonialContentSlider2: {
    spaceBetween: 30,
    speed: 1000,
    loop: "true",
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot-2",
      clickable: true,
    },
  },
  instagramBannerSlider: {
    spaceBetween: 0,
    loop: "true",
    speed: 2000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      1299: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  },
  todayBestSaleImageSlider: {
    loop: "true",
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
    breakpoints: {
      991: {
        slidesPerView: 1,
      },
    },
  },
  testimonialContentSlider3: {
    spaceBetween: 30,
    speed: 1000,
    loop: "true",
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot-2",
      clickable: true,
    },
  },
};
