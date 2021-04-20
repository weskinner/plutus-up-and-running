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
              <div className="col-xl-5 col-lg-6 col-xs-10">
                {/* <!-- Section Title --> */}
                <div
                  className="text-center text-lg-left"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <h2 className="font-size-11 font-weight-medium pr-md-6 pr-lg-9 pr-xl-0 mb-0">
                    Latest news about job trends
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
            <div className="col-lg-6 col-md-10">
              {/* <!-- Single Blog --> */}
              <Link to={"#"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB1} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      Why freelancers are more interested in Full-time jobs?
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>3 days ago
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>6 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}
              {/* <!-- Single Blog --> */}
              <Link to={"#"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB2} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      10 resume writing tips to land you next job.
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>2 days ago
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>6 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}
            </div>
            <div className="col-lg-6 col-md-10 mt-lg-n23">
              {/* <!-- Single Blog --> */}
              <Link to={"#"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB3} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      Engineering job is becoming more interesting.
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>3 days ago
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>6 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}
              {/* <!-- Single Blog --> */}
              <Link to={"#"}>
                <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
                  <div className="mr-10">
                    <img className="square-116" src={imgB4} alt="" />
                  </div>
                  <div className="mt-8 mt-xs-0">
                    <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
                      How to manage your time efficiently to do more.
                    </h4>
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>2 days ago
                      </span>
                      <span className="text-bali-gray font-size-3 pr-9">
                        <i className="fa fa-clock mr-2"></i>6 min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              {/* <!-- End Single Blog --> */}
              {/* <!-- Btn Section --> */}
              <div className="btn-section text-center mt-10 mt-lg-13">
                <a className="btn-link gr-hover-text-primary" href="/#">
                  See all blog posts
                </a>
              </div>
              {/* <!-- End Btn Section --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
