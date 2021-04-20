import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo-main-black.png";
import imgLW from "../../assets/image/logo-main-white.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`bg-default-1 pb-13 pb-lg-10 ${className}`} {...rest}>
        <div className="container">
          <hr className="border-top border-default-color-2 m-0 p-0" />
          <div
            className="row pt-12 pt-lg-25 justify-content-center"
          >
            <div className="col-lg-4 col-md-5 col-md-3">
              
            </div>
            <div className="col-lg-7 col-md-7 offset-lg-1">
              <div className="row">
                
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-3 pt-lg-22">
            <div className="col-md-6 text-center text-md-left">
              <div className="copyright mb-5">
                <p className="mb-0 font-size-3 text-stone">
                  
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="footer-right mb-5">
                <p className="mb-0 font-size-3 text-stone">
                  {" "}
                  Built with love by <Link to="https://github.com/weskinner/plutus-up-and-running">Weskinner</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
