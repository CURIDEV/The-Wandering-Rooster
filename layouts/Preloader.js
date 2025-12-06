"use client";
import { foodkingUtility } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    foodkingUtility.preloader();
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        {/* Your TWR Logo */}
        <div className="logo-loading" style={{ 
          textAlign: 'center', 
          marginTop: '20px',
          animation: 'fadeIn 0.6s ease-in-out'
        }}>
          <img 
            src="/assets/img/logo/twr_logo.svg" 
            alt="Loading" 
            style={{ 
              width: '250px', 
              height: 'auto',
              maxWidth: '80%'
            }}
          />
        </div>
        <p className="text-center" style={{ marginTop: '20px' }}>Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
