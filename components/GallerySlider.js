"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySlider = () => {
  return (
    <div className="gallery-section fix section-padding">
      <div className="container">
        <div className="array-button">
          <button className="array-prev">
            <i className="far fa-long-arrow-left" />
          </button>
          <button className="array-next">
            <i className="far fa-long-arrow-right" />
          </button>
        </div>
        <Swiper
          {...sliderProps.gallerySlider}
          className="swiper gallery-slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="gallery-image">
                <img src="assets/img/gallery/01.jpg" alt="gallery-img" />
                <div className="icon">
                  <Link href="/gallery">
                    <i className="far fa-link" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-image">
                <img src="assets/img/gallery/02.jpg" alt="gallery-img" />
                <div className="icon">
                  <Link href="/gallery">
                    <i className="far fa-link" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-image">
                <img src="assets/img/gallery/03.jpg" alt="gallery-img" />
                <div className="icon">
                  <Link href="/gallery">
                    <i className="far fa-link" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-image">
                <img src="assets/img/gallery/01.jpg" alt="gallery-img" />
                <div className="icon">
                  <Link href="/gallery">
                    <i className="far fa-link" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-image">
                <img src="assets/img/gallery/02.jpg" alt="gallery-img" />
                <div className="icon">
                  <Link href="/gallery">
                    <i className="far fa-link" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="gallery-image">
                <img src="assets/img/gallery/03.jpg" alt="gallery-img" />
                <div className="icon">
                  <Link href="/gallery">
                    <i className="far fa-link" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default GallerySlider;
