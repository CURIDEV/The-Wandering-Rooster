const Marque = ({ pt = 0 }) => {
  return (
    <div className={`marque-section fix section-padding pt-${pt} section-bg`}>
      <div className="marquee-wrapper text-slider">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              <span className="text-slider text-color">populer</span>
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">dishes</span>
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">delicious</span>
              <span className="text-slider text-color-2">food</span>{" "}
              <img src="assets/img/icon/pizza.png" alt="icon-img" />{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">populer</span>
              <span className="text-slider text-color">dishes</span>{" "}
              <span className="text-slider" />
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">delicious</span>
              <span className="text-slider text-color">populer</span>
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">dishes</span>
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">delicious</span>
              <span className="text-slider text-color-2">food</span>{" "}
              <img src="assets/img/icon/pizza.png" alt="icon-img" />{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color">populer</span>
              <span className="text-slider text-color">dishes</span>{" "}
              <span className="text-slider" />
              <span className="text-slider">
                <img src="assets/img/icon/burger.png" alt="icon-img" />
              </span>{" "}
              <span className="text-slider" />{" "}
              <span className="text-slider text-color-2">delicious</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marque;
