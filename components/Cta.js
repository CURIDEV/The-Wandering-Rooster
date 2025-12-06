import Link from "next/link";

const Cta = () => {
  return (
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
              Fresh from the Roost,  <br />
              <span className="theme-color-3">Straight to You</span>
            </h2>
          </div>
          <Link href="/food-menu" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
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
  );
};

export default Cta;
