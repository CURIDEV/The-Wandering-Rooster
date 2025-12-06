"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const InstagramBannerSlider = () => {
  return (
    <div className="instagram-banner fix">
      <Swiper
        {...sliderProps.instagramBannerSlider}
        className="swiper instagram-banner-slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/01.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/01.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/02.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/02.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/03.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/03.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/04.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/04.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/05.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/05.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/01.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/01.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/02.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/02.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/03.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/03.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/04.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/04.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="instagram-banner-items">
              <div className="banner-image">
                <img src="assets/img/instagram-banner/05.jpg" alt="food-img" />
                <a
                  href="assets/img/instagram-banner/05.jpg"
                  className="icon img-popup"
                >
                  <i className="far fa-search" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default InstagramBannerSlider;
