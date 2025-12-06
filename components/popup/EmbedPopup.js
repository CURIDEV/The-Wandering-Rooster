"use client";
import useClickOutside from "@/utility/useClickOutside";
import { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const EmbedPopup_ = ({ close, videoID }) => {
  const domNode = useClickOutside(() => close(false));
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container popup-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={close}
              >
                ×
              </button>
              {videoID.includes("soundcloud.com") ? (
                <iframe
                  width="100%"
                  height={166}
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={videoID}
                ></iframe>
              ) : (
                <ReactPlayer url={videoID} playing={true} />
              )}
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const EmbedPopup = () => {
  const [video, setVideo] = useState(false);
  const [videoValue, setVideoValue] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      setVideoValue(e.currentTarget.href);
      setVideo(true);
    };

    const timerId = setTimeout(() => {
      document.querySelectorAll("a").forEach((a) => {
        if (
          ["www.youtube.com", "vimeo.com", "soundcloud.com"].some((domain) =>
            a.href.includes(domain)
          )
        ) {
          a.addEventListener("click", handleClick);
        }
      });
    }, 600);

    return () => clearTimeout(timerId);
  }, []);

  return (
    video && <EmbedPopup_ close={() => setVideo(false)} videoID={videoValue} />
  );
};

export default EmbedPopup;
