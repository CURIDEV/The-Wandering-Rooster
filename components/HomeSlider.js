"use client";

import { foodkingUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);
  const duration = "1";
  return (
    <section className="hero-section">
      <Swiper
        ref={swiperRef}
        {...sliderProps.hero}
        className="swiper hero-slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg.jpg")',
              }}
            >
              <div
                className="chilii-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div
                className="fire-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.7s"
              >
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-3"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="3s"
              >
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              <div
                className="offer-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/offer-shape.png" alt="shape-img" />
              </div>
              <h2
                className="hero-back-title"
                data-animation="fadeInRight"
                data-duration={duration}
                data-delay="2.5s"
              >
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="0.5s"
                      >
                        delicious
                        <span>fried</span>
                        chiken
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div
                      className="chiken-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/chiken.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg.jpg")',
              }}
            >
              <div
                className="chilii-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div
                className="fire-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.7s"
              >
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-3"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="3s"
              >
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              <div
                className="offer-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/offer-shape.png" alt="shape-img" />
              </div>
              <h2
                className="hero-back-title"
                data-animation="fadeInRight"
                data-duration={duration}
                data-delay="2.5s"
              >
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="0.5s"
                      >
                        Awesome
                        <span>fried</span>
                        chiken
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div
                      className="chiken-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/chiken.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg.jpg")',
              }}
            >
              <div
                className="chilii-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div
                className="fire-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.7s"
              >
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-3"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="3s"
              >
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              <div
                className="offer-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/offer-shape.png" alt="shape-img" />
              </div>
              <h2
                className="hero-back-title"
                data-animation="fadeInRight"
                data-duration={duration}
                data-delay="2.5s"
              >
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="0.5s"
                      >
                        Favorite
                        <span>fried</span>
                        chiken
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div
                      className="chiken-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/chiken.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg.jpg")',
              }}
            >
              <div
                className="chilii-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div
                className="fire-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.7s"
              >
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div
                className="chilii-shape-3"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="3s"
              >
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              <div
                className="offer-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.1s"
              >
                <img src="assets/img/hero/offer-shape.png" alt="shape-img" />
              </div>
              <h2
                className="hero-back-title"
                data-animation="fadeInRight"
                data-duration={duration}
                data-delay="2.5s"
              >
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="0.5s"
                      >
                        delicious
                        <span>fried</span>
                        chiken
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div
                      className="chiken-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/chiken.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-dot text-center pt-5">
        <div className="dot" />
      </div>
    </section>
  );
};
export default HomeSlider;

export const HomeSlider2 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);
  const duration = "1";
  return (
    <section className="hero-section">
      <Swiper
        ref={swiperRef}
        {...sliderProps.hero}
        className="swiper hero-slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-2 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg-2.jpg")',
              }}
            >
              <div
                className="left-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.2s"
              >
                <img src="assets/img/hero/left-shape.png" alt="shape-img" />
              </div>
              <div
                className="chili-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/leaves+chilli.png" alt="shape-img" />
              </div>
              <div
                className="vagetable-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.8s"
              >
                <img src="assets/img/hero/onion+tomato.png" alt="shape-img" />
              </div>
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero-content">
                      <p
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.3s"
                      >
                        crispy, every bite taste
                      </p>
                      <h1 data-animation="fadeInUp" data-delay="1.5s">
                        hot spicy chiken burger
                      </h1>
                      <div
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.7s"
                        className="price-text"
                      >
                        <h3>limited offer /</h3>
                        <h2>$5</h2>
                      </div>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                    <div
                      className="burger-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/burger.png" alt="chiken-img" />
                      <div
                        className="burger-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.6s"
                      >
                        <img
                          src="assets/img/hero/burger-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div
                        className="hero-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.8s"
                      >
                        <img
                          src="assets/img/hero/today_best_deals.png"
                          alt="text-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-2 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg-2.jpg")',
              }}
            >
              <div
                className="left-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.2s"
              >
                <img src="assets/img/hero/left-shape.png" alt="shape-img" />
              </div>
              <div
                className="chili-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/leaves+chilli.png" alt="shape-img" />
              </div>
              <div
                className="vagetable-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.8s"
              >
                <img src="assets/img/hero/onion+tomato.png" alt="shape-img" />
              </div>
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero-content">
                      <p
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.3s"
                      >
                        crispy, every bite taste
                      </p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.5s"
                      >
                        hot spicy chiken burger
                      </h1>
                      <div
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.7s"
                        className="price-text"
                      >
                        <h3>limited offer /</h3>
                        <h2>$5</h2>
                      </div>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                    <div
                      className="burger-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/burger.png" alt="chiken-img" />
                      <div
                        className="burger-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.6s"
                      >
                        <img
                          src="assets/img/hero/burger-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div
                        className="hero-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.8s"
                      >
                        <img
                          src="assets/img/hero/today_best_deals.png"
                          alt="text-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-2 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg-2.jpg")',
              }}
            >
              <div
                className="left-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.2s"
              >
                <img src="assets/img/hero/left-shape.png" alt="shape-img" />
              </div>
              <div
                className="chili-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/leaves+chilli.png" alt="shape-img" />
              </div>
              <div
                className="vagetable-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.8s"
              >
                <img src="assets/img/hero/onion+tomato.png" alt="shape-img" />
              </div>
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero-content">
                      <p
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.3s"
                      >
                        crispy, every bite taste
                      </p>
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.5s"
                      >
                        hot spicy chiken burger
                      </h1>
                      <div
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.7s"
                        className="price-text"
                      >
                        <h3>limited offer /</h3>
                        <h2>$5</h2>
                      </div>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                    <div
                      className="burger-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/burger.png" alt="chiken-img" />
                      <div
                        className="burger-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.6s"
                      >
                        <img
                          src="assets/img/hero/burger-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div
                        className="hero-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.8s"
                      >
                        <img
                          src="assets/img/hero/today_best_deals.png"
                          alt="text-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-2 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg-2.jpg")',
              }}
            >
              <div
                className="left-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.2s"
              >
                <img src="assets/img/hero/left-shape.png" alt="shape-img" />
              </div>
              <div
                className="chili-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.4s"
              >
                <img src="assets/img/hero/leaves+chilli.png" alt="shape-img" />
              </div>
              <div
                className="vagetable-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.8s"
              >
                <img src="assets/img/hero/onion+tomato.png" alt="shape-img" />
              </div>
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero-content">
                      data-duration={duration}
                      <p data-animation="fadeInUp" data-delay="1.3s">
                        crispy, every bite taste
                      </p>
                      data-duration={duration}
                      <h1 data-animation="fadeInUp" data-delay="1.5s">
                        hot spicy chiken burger
                      </h1>
                      <div
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.7s"
                        className="price-text"
                      >
                        <h3>limited offer /</h3>
                        <h2>$5</h2>
                      </div>
                      <div className="hero-button">
                        <Link
                          href="#"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="flaticon-delivery" />
                            </span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                    <div
                      className="burger-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/burger.png" alt="chiken-img" />
                      <div
                        className="burger-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.6s"
                      >
                        <img
                          src="assets/img/hero/burger-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div
                        className="hero-text"
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay="1.8s"
                      >
                        <img
                          src="assets/img/hero/today_best_deals.png"
                          alt="text-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-dot text-center pt-5">
        <div className="dot" />
      </div>
    </section>
  );
};

export const HomeSlider3 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);
  const duration = "1";
  return (
    <section className="hero-section-3">
      <div className="pegi-wrp">
        <div className="pegi-number"></div>
      </div>
      <Swiper
        {...sliderProps.hero}
        ref={swiperRef}
        className="swiper hero-slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-3 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg-3.jpg")',
              }}
            >
              <div
                className="frame-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2s"
              >
                <img src="assets/img/hero/frame.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.2s"
              >
                <img src="assets/img/hero/frame-2.png" alt="shape-img" />
              </div>
              <div className="frame-shape-3">
                <img
                  src="assets/img/hero/frame-3.png"
                  alt="shape-img"
                  data-animation="fadeInUp"
                  data-duration={duration}
                  data-delay="2.4s"
                />
              </div>
              <div
                className="frame-shape-4"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.6s"
              >
                <img src="assets/img/hero/frame-4.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-5"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.8s"
              >
                <img src="assets/img/hero/frame-5.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-6"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.9s"
              >
                <img src="assets/img/hero/frame-6.png" alt="shape-img" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-5">
                    <div className="hero-content">
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".4s"
                      >
                        super delicious pizza
                      </h1>
                      <h4
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".8s"
                      >
                        Star Your Order Just Only $25.00
                      </h4>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn bg-yellow border-radius-none"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-text">order now</span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
                    <div
                      className="pizza-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/pizza.png" alt="pizza-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-3 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg-3.jpg")',
              }}
            >
              <div
                className="frame-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2s"
              >
                <img src="assets/img/hero/frame.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.2s"
              >
                <img src="assets/img/hero/frame-2.png" alt="shape-img" />
              </div>
              <div className="frame-shape-3">
                <img
                  src="assets/img/hero/frame-3.png"
                  alt="shape-img"
                  data-animation="fadeInUp"
                  data-duration={duration}
                  data-delay="2.4s"
                />
              </div>
              <div
                className="frame-shape-4"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.6s"
              >
                <img src="assets/img/hero/frame-4.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-5"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.8s"
              >
                <img src="assets/img/hero/frame-5.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-6"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.9s"
              >
                <img src="assets/img/hero/frame-6.png" alt="shape-img" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-5">
                    <div className="hero-content">
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".4s"
                      >
                        awesome delicious pizza
                      </h1>
                      <h4
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".8s"
                      >
                        Star Your Order Just Only $29.00
                      </h4>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn bg-yellow border-radius-none"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-text">order now</span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
                    <div
                      className="pizza-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/pizza-2.png" alt="pizza-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-3 bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-bg-3.jpg")',
              }}
            >
              <div
                className="frame-shape"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2s"
              >
                <img src="assets/img/hero/frame.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-2"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.2s"
              >
                <img src="assets/img/hero/frame-2.png" alt="shape-img" />
              </div>
              <div className="frame-shape-3">
                <img
                  src="assets/img/hero/frame-3.png"
                  alt="shape-img"
                  data-animation="fadeInUp"
                  data-duration={duration}
                  data-delay="2.4s"
                />
              </div>
              <div
                className="frame-shape-4"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.6s"
              >
                <img src="assets/img/hero/frame-4.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-5"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.8s"
              >
                <img src="assets/img/hero/frame-5.png" alt="shape-img" />
              </div>
              <div
                className="frame-shape-6"
                data-animation="fadeInUp"
                data-duration={duration}
                data-delay="2.9s"
              >
                <img src="assets/img/hero/frame-6.png" alt="shape-img" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-5">
                    <div className="hero-content">
                      <h1
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".4s"
                      >
                        super delicious pizza
                      </h1>
                      <h4
                        data-animation="fadeInUp"
                        data-duration={duration}
                        data-delay=".8s"
                      >
                        Star Your Order Just Only $25.00
                      </h4>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn bg-yellow border-radius-none"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="1s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-text">order now</span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 mt-5 mt-lg-0">
                    <div
                      className="pizza-image"
                      data-animation="fadeInUp"
                      data-duration={duration}
                      data-delay="1.4s"
                    >
                      <img src="assets/img/hero/pizza.png" alt="pizza-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};
