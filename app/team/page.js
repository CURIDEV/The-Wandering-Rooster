import InstagramBannerSlider from "@/components/InstagramBannerSlider";
import PageBanner from "@/components/PageBanner";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Our team"} />
      {/* Team Section Start */}
      <section className="team-section section-padding section-bg fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">about our food</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              MEET OUR EXPERT CHEFS
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/01.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>head chef</p>
                  <h3>
                    <Link href="/team-details">Leslie Alexander</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items active">
                <div className="team-image">
                  <img src="assets/img/team/02.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>sr table manager</p>
                  <h3>
                    <Link href="/team-details">HENRY LUCAS</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/03.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>senoir cooker</p>
                  <h3>
                    <Link href="/team-details">MATEO LEVI</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/04.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>senoir cooker</p>
                  <h3>
                    <Link href="/team-details">Daniel Jack</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/05.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>senoir cooker</p>
                  <h3>
                    <Link href="/team-details">Owen Asher</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-team-items">
                <div className="team-image">
                  <img src="assets/img/team/06.jpg" alt="team-img" />
                  <div className="social-link">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="team-content">
                  <p>senoir cooker</p>
                  <h3>
                    <Link href="/team-details">Leslie Michael</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section Start */}
      <div
        className="video-section-2 style-2 fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/bg-image/bg-shape.png")' }}
      >
        <div className="container">
          <div
            className="video-wrapper bg-cover"
            style={{
              backgroundImage: 'url("assets/img/banner/video-bg-3.jpg")',
            }}
          >
            <div className="video-btn video-pulse center">
              <a
                className="video-popup"
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Choose Us Section Start */}
      <section
        className="choose-us-2 fix section-padding bg-cover theme-bg"
        style={{ backgroundImage: 'url("assets/img/bg-image/bg-shape.png")' }}
      >
        <div className="container">
          <div className="food-icon-wrapper-2">
            <div className="row g-5">
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/01.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>Best Quality Food</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/02.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>fast food delivery</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/03.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>money back guarantee</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <img src="assets/img/icon/04.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>100% natural food</h3>
                    <p>
                      Sed ut perspiciatis unde omnis este natus sit voluptatem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Section Start */}
      <section className="booking-section mt-0 fix section-padding section-bg">
        <div className="container">
          <div className="booking-wrapper">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="booking-content style-2">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      crispy, every bite taste
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      need <span>booking</span>? <br />
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
                        <a href="tel:+1718-904-4450">+1718-904-4450</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="booking-contact style-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/shape/booking-shape.png")',
                  }}
                >
                  <h4 className="text-center text-white">
                    create an reservation
                  </h4>
                  <div className="booking-items">
                    <div className="form-clt">
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">no of person</span>
                        <ul className="list">
                          <li data-value={1} className="option selected">
                            1 People
                          </li>
                          <li data-value={1} className="option">
                            2 People
                          </li>
                          <li data-value={1} className="option">
                            3 People
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-clt">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="phone number"
                      />
                      <div className="icon">
                        <i className="fas fa-phone" />
                      </div>
                    </div>
                    <div className="form-clt">
                      <input type="date" id="calendar" name="calendar" />
                    </div>
                    <div className="form-clt">
                      <Link href="/reservation" className="theme-btn bg-yellow">
                        booking now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marque Section Start */}
      <div className="marque-section fix section-padding section-bg pb-5">
        <div className="marquee-wrapper style-responsive mt-0 text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider text-color">populer</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">dishes</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">food</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">populer</span>
                <span className="text-slider text-color">dishes</span>{" "}
                <span className="text-slider" />
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">populer</span>
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">dishes</span>
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
                <span className="text-slider text-color">food</span>{" "}
                <img src="assets/img/star.svg" alt="icon-img" />{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">populer</span>
                <span className="text-slider text-color">dishes</span>{" "}
                <span className="text-slider" />
                <span className="text-slider">
                  <img src="assets/img/star.svg" alt="icon-img" />
                </span>{" "}
                <span className="text-slider" />{" "}
                <span className="text-slider text-color">delicious</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Food Banner Section Start */}
      <section className="food-banner fix">
        <div className="row g-3">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="food-banner-items-2 bg-cover"
              style={{
                backgroundImage: "url(assets/img/banner/food-bg.jpg)",
              }}
            >
              <div
                className="price bg-cover"
                style={{ backgroundImage: 'url("assets/img/vector.png")' }}
              >
                <span>$38</span>
              </div>
              <div className="food-content">
                <h4>start price $25</h4>
                <h2 className="text-white">
                  delicious <br />
                  hamburger <br />
                  fries
                </h2>
                <a href="#" className="theme-btn bg-red mt-4">
                  order now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="food-banner-items-2 bg-cover"
              style={{
                backgroundImage: "url(assets/img/banner/food-bg-2.jpg)",
              }}
            >
              <div
                className="price style-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/vector-2.png")' }}
              >
                <span>$43</span>
              </div>
              <div className="food-content">
                <h4>start price $25</h4>
                <h2 className="text-white">
                  super <br />
                  chicken <br />
                  fry
                </h2>
                <a
                  href="#"
                  className="theme-btn bg-yellow border-radius-none mt-4"
                >
                  order now
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="food-banner-items-2 bg-cover"
              style={{
                backgroundImage: "url(assets/img/banner/food-bg-3.jpg)",
              }}
            >
              <div
                className="price bg-cover"
                style={{ backgroundImage: 'url("assets/img/vector.png")' }}
              >
                <span>$38</span>
              </div>
              <div className="food-content">
                <h4>start price $25</h4>
                <h2 className="text-white">
                  delicious <br />
                  hamburger <br />
                  fries
                </h2>
                <a href="#" className="theme-btn bg-red mt-4">
                  order now
                </a>
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
