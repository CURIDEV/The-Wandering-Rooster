'use client';
 
import Link from "next/link";
 
const featuredMenuItems = [
  {
    id: 1,
    name: "Conch Fritters",
    image: "/assets/img/food/conchfritters.jpeg",
  },
  {
    id: 2,
    name: "Cuban Mix",
    image: "/assets/img/food/cubanmix.jpeg",
  },
  {
    id: 3,
    name: "Smash Burger",
    image: "/assets/img/food/burger.png",
  },
];
 
const FeaturedMenuItems = () => {
  return (
    <section className="food-banner-section section-padding fix">
      <div className="burger-shape-2">
        <img src="assets/img/shape/burger-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="wow fadeInUp">Featured Items</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Try Our Favorites
          </h2>
        </div>
 
        <div className="row g-4">
          {featuredMenuItems.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay={`.${(index + 1) * 2}s`}
            >
              <div
                className="single-offer-items bg-cover style-3"
                style={{
                  backgroundImage: `url("${item.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "350px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.4)",
                    borderRadius: "8px",
                  }}
                />
                <div
                  className="offer-content"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <h5 style={{ color: "#fff" }}>Featured Item</h5>
                  <h3 style={{ color: "#fff" }}>{item.name}</h3>
                  <Link href="/food-menu" className="link-btn">
                    View Menu <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default FeaturedMenuItems;
