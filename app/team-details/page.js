import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import NiceSelect from "@/components/NiceSelect";
import PageBanner from "@/components/PageBanner";
import ReservationForm from "@/components/ReservationForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"chef Details"} />

      {/* Team Details Section Start */}
      <section className="team-details-section fix section-padding">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div
                  className="team-image bg-cover"
                  style={{
                    backgroundImage: 'url("assets/img/team/details.jpg")',
                  }}
                />
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="team-details-content">
                  <div className="star pb-3">
                    <Link href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                    <Link href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </Link>
                    <Link href="#">
                      <i className="fas fa-star" />
                    </Link>
                    <Link href="#">
                      {" "}
                      <i className="fas fa-star" />
                    </Link>
                    <Link href="#">(5k)</Link>
                  </div>
                  <h3>Alextina Ditarson</h3>
                  <span>General Manager</span>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment so blinded by desire that
                    they cannot foresee the pain and trouble that are
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-vimeo-v" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                  <Link
                    href="/contact"
                    className="theme-btn style-line-height mt-5"
                  >
                    contact with me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Skill Section Start */}
      <section
        className="team-skill fix section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/banner/main-cta-bg-2.jpg")',
        }}
      >
        <div className="container">
          <div className="team-skill-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-skill-content">
                  <h3>
                    Welcome to our culinary haven where each dish is a symphony
                    of flavors meticulously
                  </h3>
                </div>
              </div>
              <div
                className="col-lg-5 mt-4 mt-lg-0 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="progress-wrap">
                  <div className="pro-items">
                    <div className="pro-head">
                      <h6 className="title">cooking chiness</h6>
                      <span className="point">65%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value" />
                    </div>
                  </div>
                  <div className="pro-items">
                    <div className="pro-head">
                      <h6 className="title">serve managment</h6>
                      <span className="point">75%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value style-two" />
                    </div>
                  </div>
                  <div className="pro-items">
                    <div className="pro-head">
                      <h6 className="title">Human Interacation</h6>
                      <span className="point">65%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Reservation Section Start */}
      <section className="team-reservation fix section-padding">
        <div className="container">
          <div className="team-reservation-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="get-touch-items">
                  <div className="get-touch-title">
                    <h2 className="wow fadeInUp">Get in touch</h2>
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      mattis <br />
                      faucibus odio feugiat arc dolor.
                    </p>
                  </div>
                  <div className="contact-items">
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4>Contact</h4>
                      <h5>
                        <Link href="tel:+1718-904-4450">+1718-904-4450</Link>
                      </h5>
                    </div>
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4>Email</h4>
                      <h5>
                        <Link href="mailto:info@example.com" className="link">
                          info@example.com
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h4>Address</h4>
                      <h5>Jackpark, Ghana</h5>
                    </div>
                    <div
                      className="contact-info wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <h4>Follow</h4>
                      <div className="social-icon d-flex align-items-center">
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-vimeo-v" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="team-reservation-items">
                  <div className="reservation-title">
                    <h3>
                      create an <span>reservation........</span>
                    </h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <NiceSelect
                          option={[
                            { id: 1, name: "1 People", value: "1-people" },
                            { id: 2, name: "2 People", value: "2-people" },
                            { id: 3, name: "3 People", value: "3-people" },
                          ]}
                          className="no-of-person"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address*"
                        />
                        <div className="icon">
                          <i className="fal fa-envelope" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input type="date" id="calendar" name="calendar" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <Link
                          href="/reservation"
                          className="theme-btn bg-yellow"
                        >
                          booking now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Section Start */}
      <div className="marque-section section-padding pt-0">
        <div className="marquee-wrapper mt-0 text-slider style-responsive">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider text-color">populer</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">dishes</span>
                <span className="text-slider">
                  <img src="assets/img/star-2.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">food</span>{" "}
                <img src="assets/img/star-2.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">populer</span>
                <span className="text-slider text-color">dishes</span>{" "}
                <span className="text-slider" />
                <span className="text-slider">
                  <img src="assets/img/star-2.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">populer</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">dishes</span>
                <span className="text-slider">
                  <img src="assets/img/star-2.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">food</span>{" "}
                <img src="assets/img/star-2.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">populer</span>
                <span className="text-slider text-color">dishes</span>{" "}
                <span className="text-slider" />
                <span className="text-slider">
                  <img src="assets/img/star-2.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Food Banner Section Start */}
      <section className="food-banner-section-3 fix">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="pasta-banner-items bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/banner/pizza-bg-2.png")',
                }}
              >
                <div className="pasta-content">
                  <span>crispy, every bite taste</span>
                  <h3>
                    Delicious &amp; <br />
                    hot pizza
                  </h3>
                  <Link href="/shop-single" className="link-btn mt-4">
                    order now <i className="fas fa-arrow-right" />
                  </Link>
                </div>
                <div className="pasta-food">
                  <img src="assets/img/food/pasta-3.png" alt="food-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div
                className="single-offer-items bg-cover style-3"
                style={{
                  backgroundImage: 'url("assets/img/banner/banner-bg.png")',
                }}
              >
                <div className="offer-image-2">
                  <img
                    src="assets/img/offer/50percent-off-2.png"
                    alt="offer-img"
                  />
                </div>
                <div className="french-content">
                  <h4>
                    <span>Todays</span>Delicious
                  </h4>
                  <h3>french fry</h3>
                  <h5 className="mb-0">This Weekend only</h5>
                  <Link
                    href="/shop-single"
                    className="theme-btn bg-yellow mt-4"
                  >
                    order now
                  </Link>
                </div>
                <div className="noodles-image">
                  <img src="assets/img/food/noodles.png" alt="food-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div
                className="single-offer-items bg-cover style-3"
                style={{
                  backgroundImage: 'url("assets/img/banner/banner-bg-2.png")',
                }}
              >
                <div className="offer-shape-3">
                  <img
                    src="assets/img/offer/50percent-off-4.png"
                    alt="shape-img"
                  />
                </div>
                <div className="french-content">
                  <span>crispy, every bite taste</span>
                  <h3>
                    chiken &amp; <br />
                    french fry
                  </h3>
                  <Link href="/shop-single" className="link-btn mt-4">
                    order now <i className="fas fa-arrow-right" />
                  </Link>
                </div>
                <div className="chicken-image">
                  <img src="assets/img/food/chicken.png" alt="food-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Section Start */}
      <section
        className="booking-section mt-0 fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/main-bg.jpg")' }}
      >
        <div className="container">
          <div className="booking-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="booking-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      crispy, every bite taste
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      need booking? <br />
                      reserve your table?
                    </h2>
                  </div>
                  <div
                    className="icon-items d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <i className="flaticon-phone-call-2" />
                    </div>
                    <div className="content">
                      <h5>24/7 Support center</h5>
                      <h3>
                        <Link href="tel:+1718-904-4450">+1718-904-4450</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <ReservationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <TestimonialSlider />
      {/* Instagram Banner Section Start */}
      <InstagramBannerSlider />
    </FoodKingLayout>
  );
};
export default page;
