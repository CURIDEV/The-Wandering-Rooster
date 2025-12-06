"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const AboutFoodItems = () => {
  return (
    <section className="about-food-section section-bg section-padding">
      <div className="container">
        <div className="about-food-wrapper style-2">
          <div className="section-title text-center">
            <span className="wow fadeInUp">about our food</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              hot delicious item
            </h2>
          </div>
          <Tab.Container defaultActiveKey="chicken">
            <Nav as="ul" className="nav mb-4 justify-content-center">
              {["chicken", "pizza", "burger", "deserts"].map((item, index) => (
                <Nav.Item
                  key={item}
                  as="li"
                  className={`nav-item wow fadeInUp`}
                  data-wow-delay={`.${(index + 1) * 2}s`}
                >
                  <Nav.Link as="a" eventKey={item} href={`#${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content className="tab-content">
              {["chicken", "pizza", "burger", "deserts"].map((item) => (
                <Tab.Pane key={item} eventKey={item} className="tab-pane fade">
                  <div className="description-items">
                    <div className="row">
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          className={`col-xl-3 col-lg-6 col-md-6 wow fadeInUp`}
                          data-wow-delay={`.${(index + 1) * 2}s`}
                        >
                          <div className="about-food-items center">
                            <div className="food-image">
                              <img
                                src={`assets/img/about-food/${
                                  [
                                    "pizza",
                                    "potato",
                                    "chicken",
                                    "cheeseburger",
                                  ][index]
                                }.png`}
                                alt="food-img"
                              />
                            </div>
                            <div className="food-content">
                              <h3>
                                <Link href="shop-single">
                                  Chicago Deep Pizza.
                                </Link>
                              </h3>
                              <p>
                                It's the perfect dining experience where
                                Experience quick and efficient
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};
export default AboutFoodItems;

export const AboutFoodItems2 = () => {
  return (
    <section className="about-food-section">
      <div className="container">
        <div
          className="about-food-wrapper bg-cover"
          style={{
            backgroundImage: 'url("assets/img/shape/about-food-bg.png")',
          }}
        >
          <div className="section-title text-center">
            <span className="wow fadeInUp">about our food</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              hot delicious item
            </h2>
          </div>
          <Tab.Container id="about-food-tabs" defaultActiveKey="chicken">
            <Nav className="justify-content-center">
              <Nav.Item className="wow fadeInUp" data-wow-delay=".3s">
                <Nav.Link eventKey="chicken">chicken fry</Nav.Link>
              </Nav.Item>
              <Nav.Item className="wow fadeInUp" data-wow-delay=".5s">
                <Nav.Link eventKey="pizza">pizza</Nav.Link>
              </Nav.Item>
              <Nav.Item className="wow fadeInUp" data-wow-delay=".7s">
                <Nav.Link eventKey="burger">burger</Nav.Link>
              </Nav.Item>
              <Nav.Item className="wow fadeInUp" data-wow-delay=".8s">
                <Nav.Link eventKey="deserts">deserts</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {["chicken", "pizza", "burger", "deserts"].map((category) => (
                <Tab.Pane key={category} eventKey={category}>
                  <div className="description-items">
                    <div className="row">
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          className={`col-xl-3 col-lg-6 col-md-6 wow fadeInUp`}
                          data-wow-delay={`.${(index + 1) * 2}s`}
                        >
                          <div className="about-food-items center">
                            <div className="food-image">
                              <img
                                src={`assets/img/about-food/${
                                  [
                                    "pizza",
                                    "potato",
                                    "chicken",
                                    "cheeseburger",
                                  ][index]
                                }.png`}
                                alt="food-img"
                              />
                            </div>
                            <div className="food-content">
                              <h3>
                                <Link href="shop-single">
                                  Chicago Deep Pizza.
                                </Link>
                              </h3>
                              <p>
                                It's the perfect dining experience where
                                Experience quick and efficient
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};
