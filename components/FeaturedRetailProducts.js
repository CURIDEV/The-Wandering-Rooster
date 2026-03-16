'use client';
 
const retailProducts = [
  {
    id: 1,
    name: "TWR Logo Tee",
    price: "20.00",
    image: "/assets/img/retail-images/twrback.png",
  },
  {
    id: 2,
    name: "CAFO Tee",
    price: "20.00",
    image: "/assets/img/retail-images/cafoback.png",
  },
  {
    id: 3,
    name: "TWR Hat",
    price: "20.00",
    image: "/assets/img/retail-images/totebagbw.png",
  },
];
 
const FeaturedRetailProducts = () => {
  return (
    <section className="food-category-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">Shop Our Products</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Featured Retail Items
          </h2>
        </div>
 
        <div className="row justify-content-center">
          {retailProducts.map((product, index) => (
            <div
              key={product.id}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`.${(index % 4) * 2 + 3}s`}
            >
              <div className="catagory-product-card-2 text-center">
                <a
                  href="https://www.roostershop.store"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div
                    className="catagory-product-image"
                    style={{
                      borderRadius: '8px 8px 0 0',
                      overflow: 'hidden',
                      backgroundColor: '#f8f8f8',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                </a>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <a href="https://www.roostershop.store" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Shop Now
                    </a>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <span>${product.price}</span>
                  </div>
                  <h4>
                    <a
                      href="https://www.roostershop.store"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {product.name}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".5s">
          <a href="https://www.roostershop.store" className="theme-btn">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};
 
export default FeaturedRetailProducts;
