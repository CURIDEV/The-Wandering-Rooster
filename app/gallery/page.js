import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"gallery"} />
      {/*<< Gallery Section Start >>*/}
      <div className="gallery-section fix section-bg section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/01.jpg")' }}
              >
                <a href="assets/img/gallery/01.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/02.jpg")' }}
              >
                <a href="assets/img/gallery/02.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/03.jpg")' }}
              >
                <a href="assets/img/gallery/03.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/04.jpg")' }}
              >
                <a href="assets/img/gallery/07.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-9 wow fadeInUp" data-wow-delay=".3s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/08.jpg")' }}
              >
                <a href="assets/img/gallery/08.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/09.jpg")' }}
              >
                <a href="assets/img/gallery/09.jpg" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Section Start */}
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
