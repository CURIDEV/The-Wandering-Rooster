import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop List"} />
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-5">
            <ProductSidebar />
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <ProductTopBar mb0={true} />
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="shop-list-items">
                    <div className="shop-image">
                      <img
                        src="assets/img/shop-food/list/01.png"
                        alt="shop-img"
                      />
                    </div>
                    <div className="shop-content">
                      <div className="star pb-4">
                        <span>-5%</span>
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
                        <Link href="#" className="color-bg">
                          {" "}
                          <i className="fas fa-star" />
                        </Link>
                      </div>
                      <h3>
                        <Link href="shop-single">SUBWAY MELT</Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised
                      </p>
                      <h5>4.19$-6.09$</h5>
                      <div className="shop-list-btn">
                        <Link href="shop-single" className="theme-btn">
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
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="shop-list-items">
                    <div className="shop-image">
                      <img
                        src="assets/img/shop-food/list/02.png"
                        alt="shop-img"
                      />
                    </div>
                    <div className="shop-content">
                      <div className="star pb-4">
                        <span>-5%</span>
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
                        <Link href="#" className="color-bg">
                          {" "}
                          <i className="fas fa-star" />
                        </Link>
                      </div>
                      <h3>
                        <Link href="shop-single">SPICY CHICKEN SANDWICH</Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised
                      </p>
                      <h5>4.19$-6.09$</h5>
                      <div className="shop-list-btn">
                        <Link href="shop-single" className="theme-btn">
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
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="shop-list-items">
                    <div className="shop-image">
                      <img
                        src="assets/img/shop-food/list/03.png"
                        alt="shop-img"
                      />
                    </div>
                    <div className="shop-content">
                      <div className="star pb-4">
                        <span>-5%</span>
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
                        <Link href="#" className="color-bg">
                          {" "}
                          <i className="fas fa-star" />
                        </Link>
                      </div>
                      <h3>
                        <Link href="shop-single">CRUNCHWRAP SUPREME</Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised
                      </p>
                      <h5>4.19$-6.09$</h5>
                      <div className="shop-list-btn">
                        <Link href="shop-single" className="theme-btn">
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
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="shop-list-items">
                    <div className="shop-image">
                      <img
                        src="assets/img/shop-food/list/04.png"
                        alt="shop-img"
                      />
                    </div>
                    <div className="shop-content">
                      <div className="star pb-4">
                        <span>-5%</span>
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
                        <Link href="#" className="color-bg">
                          {" "}
                          <i className="fas fa-star" />
                        </Link>
                      </div>
                      <h3>
                        <Link href="shop-single">GRILLED CHICKEN WRAP</Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised
                      </p>
                      <h5>4.19$-6.09$</h5>
                      <div className="shop-list-btn">
                        <Link href="shop-single" className="theme-btn">
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
                </div>
                <div className="col-xl-12 col-lg-12">
                  <div className="shop-list-items">
                    <div className="shop-image">
                      <img
                        src="assets/img/shop-food/list/05.png"
                        alt="shop-img"
                      />
                    </div>
                    <div className="shop-content">
                      <div className="star pb-4">
                        <span>-5%</span>
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
                        <Link href="#" className="color-bg">
                          {" "}
                          <i className="fas fa-star" />
                        </Link>
                      </div>
                      <h3>
                        <Link href="shop-single">PIECE CHICKEN MCNUGGETS</Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised
                      </p>
                      <h5>4.19$-6.09$</h5>
                      <div className="shop-list-btn">
                        <Link href="shop-single" className="theme-btn">
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
                </div>
              </div>
              <div className="page-nav-wrap mt-5 text-center">
                <ul>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-left" />
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      3
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      4
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
