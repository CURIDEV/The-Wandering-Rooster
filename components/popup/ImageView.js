"use client";
import useClickOutside from "@/utility/useClickOutside";
import { Fragment, useEffect, useState } from "react";

const ImgViews = ({ close, src }) => {
  let domNode = useClickOutside(() => close(false));
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <img className="mfp-img" src={src} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);

  useEffect(() => {
    const handleImageClick = (e) => {
      e.preventDefault();
      setImgValue(e.currentTarget.href);
      setImg(true);
    };

    const setupImageLinks = () => {
      document
        .querySelectorAll('a[href*="assets/img"]:not([download])')
        .forEach((a) => {
          a.addEventListener("click", handleImageClick);
        });
    };

    const timerId = setTimeout(setupImageLinks, 1500);
    return () => clearTimeout(timerId);
  }, []);

  return img && <ImgViews close={() => setImg(false)} src={imgValue} />;
};

export default ImageView;
