import PageBanner from "@/components/PageBanner";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Right Sidebar"} />
      <section className="food-category-section fix section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-9 col-lg-8">
              <ProductTopBar />
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/pasta-2.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">Chiness pasta</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style active text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/burger-2.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">Whopper Burger King</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/pizza-3.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">delicious burger</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img src="assets/img/food/ruti.png" alt="product-img" />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">ruti with chiken</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/grilled-2.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">grilled chiken</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/main-food-3.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">delicious burger</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/french-fry-3.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">ruti with chiken</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/fried-chicken-2.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">grilled chiken</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="catagory-product-card-2 shadow-style text-center">
                    <div className="icon">
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </div>
                    <div className="catagory-product-image">
                      <img
                        src="assets/img/food/french-fry-4.png"
                        alt="product-img"
                      />
                    </div>
                    <div className="catagory-product-content">
                      <div className="catagory-button">
                        <Link href="shop-cart" className="theme-btn-2">
                          <i className="far fa-shopping-basket" />
                          Add To Cart
                        </Link>
                      </div>
                      <div className="info-price d-flex align-items-center justify-content-center">
                        <p>-5%</p>
                        <h6>$30.52</h6>
                        <span>$28.52</span>
                      </div>
                      <h4>
                        <Link href="shop-single">delicious burger</Link>
                      </h4>
                      <div className="star">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star color-bg" />
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
            <ProductSidebar className="col-xl-3 col-lg-4" style="style-2" />
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
};
export default page;
