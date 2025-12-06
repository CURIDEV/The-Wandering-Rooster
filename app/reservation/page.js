import Cta from "@/components/Cta";
import Marque from "@/components/Marque";
import NiceSelect from "@/components/NiceSelect";
import PageBanner from "@/components/PageBanner";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"reservation"} />
      {/* Booking Section Start */}
      <section className="booking-section fix section-bg section-padding mt-0">
        <div className="container">
          <div className="booking-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="booking-contact mb-0 style-2 bg-cover"
                  style={{
                    backgroundImage:
                      'url("assets/img/shape/booking-shape.png")',
                  }}
                >
                  <h3 className="text-center mb-4 text-white wow fadeInUp">
                    create an reservation
                  </h3>
                  <div className="booking-items">
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <NiceSelect
                            option={[
                              {
                                id: 1,
                                name: "Lucas Henry",
                                value: "lucas-henry",
                              },
                              {
                                id: 2,
                                name: "Mateo Jack",
                                value: "mateo-jack",
                              },
                              {
                                id: 3,
                                name: "Michael Asher",
                                value: "michael-asher",
                              },
                            ]}
                            className="clients-name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
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
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
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
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input type="date" id="calendar" name="calendar" />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="phone number"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
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
        </div>
      </section>
      {/* Testimonial Section Start */}
      <TestimonialSlider sectionBg={false} />
      {/* Marque Section Start */}
      <Marque pt={10} />
      {/* Main Cta Banner Section Start */}
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
