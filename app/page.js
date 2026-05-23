"use client";

import { SingleHeroSlide } from "@/components/SingleHeroSlide";
import ModernTestimonials from "@/components/ModernTestimonials";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import FeaturedMenuItems from "@/components/FeaturedMenuItems";
import FeaturedRetailProducts from "@/components/FeaturedRetailProducts";
import LoyaltyRewards from "@/components/LoyaltyRewards";

const Page = () => {
  return (
    <FoodKingLayout>
      {/* Hero Section */}
      <SingleHeroSlide />

      {/* Featured Menu Items Section */}
      <FeaturedMenuItems />

      {/* Delivery CTA Banner */}
      <section
        className="main-cta-banner-2 section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/banner/main-cta-bg-2.jpg")',
        }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src="assets/img/tomato.png" alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src="assets/img/chilli.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              <span className="theme-color-3 wow fadeInUp">
                Island Fresh, Rooster Fast
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Fresh from the Roost, <br />
                <span className="theme-color-3">Straight to You</span>
              </h2>
            </div>
            <Link
              href="/food-menu"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery" />
                </span>
                <span className="button-text">Order Now</span>
              </span>
            </Link>
            <div className="delivery-man">
              <img src="assets/img/delivery-man-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Retail Products Section */}
      <FeaturedRetailProducts />

      {/* Video Section */}
      <div
        className="video-section section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/banner/video-bg.svg")',
          position: "relative",
        }}
      >
        <div className="container">
          <div
            className="video-wrapper"
            style={{
              position: "relative",
              paddingBottom: "10%",
              height: 0,
              overflow: "hidden",
              maxWidth: "600px",
              margin: "0 auto",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              src="https://www.youtube.com/embed/zH9JWps1wOY?autoplay=0&mute=0&controls=1&loop=0&rel=0&modestbranding=1"
              title="Restaurant Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <ModernTestimonials />
      {/* Loyalty Rewards Section */}
      <LoyaltyRewards />  
    </FoodKingLayout>
  );
};

export default Page;
