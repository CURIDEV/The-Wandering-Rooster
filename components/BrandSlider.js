"use client";

import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider = () => {
  return (
    <Swiper {...sliderProps.brandSlider} className="swiper brand-slider">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/01.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/02.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/03.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/04.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/05.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/06.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/01.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/02.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/03.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/04.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/05.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-image">
            <img src="assets/img/brand/06.svg" alt="brand-img" />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default BrandSlider;
