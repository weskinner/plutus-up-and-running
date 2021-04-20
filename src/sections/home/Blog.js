import React from "react";
import { Link } from "gatsby";

import imgB1 from "../../assets/image/home-1/png/post-thumbnails-1.png";
import imgB2 from "../../assets/image/home-1/png/post-thumbnails-2.png";
import imgB3 from "../../assets/image/home-1/png/post-thumbnails-3.png";
import imgB4 from "../../assets/image/home-1/png/post-thumbnails-4.png";

const Blog = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="mb-10 mb-lg-17">
            <div className="row align-items-center justify-content-center justify-content-lg-start">
              <div className="col">
                {/* <!-- Section Title --> */}
                <div
                  className="text-center text-lg-left"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <h2 className="font-size-11 font-weight-medium pr-md-6 pr-lg-9 pr-xl-0 mb-0">
                    Plutus Up and Running
                  </h2>
                </div>
                {/* <!-- End Section Title --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {/* <!-- Single Blog --> */}
            <Link to={"#"}>
              <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                <div className="mr-10">
                  <img className="square-116" src={imgB2} alt="" />
                </div>
                <div className="mt-8 mt-xs-0">
                  <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                    Install a haskell development environment.
                  </h4>
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="text-bali-gray font-size-3 pr-9">
                      <i className="fa fa-clock mr-2"></i>Beginner
                    </span>
                    <span className="text-bali-gray font-size-3 pr-9">
                      <i className="fa fa-clock mr-2"></i>6 min read
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
