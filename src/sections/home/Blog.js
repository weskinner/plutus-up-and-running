import React from "react";
import { Link } from "gatsby";

import imgB1 from "../../assets/image/home-1/png/post-thumbnails-1.png";
import imgB2 from "../../assets/image/home-1/png/post-thumbnails-2.png";
import imgB3 from "../../assets/image/home-1/png/post-thumbnails-3.png";
import imgB4 from "../../assets/image/home-1/png/post-thumbnails-4.png";

const lessons = [
  {
    title: "Install a haskell development environment.",
    icon: "arrow-alt-circle-down",
    color: "blue-1",
    description: "",
    difficulty: "Beginner",
    enabled: true,
    length: "15 mins"
  },
  {
    title: "Create a basic project with CABAL.",
    icon: "hammer",
    color: "woodsmoke",
    description: "",
    difficulty: "Beginner",
    enabled: false,
    length: "7 mins"
  },
  {
    title: "Writing test cases and Test Driven Development.",
    icon: "shield-alt",
    color: "sunset",
    description: "",
    difficulty: "Beginner",
    enabled: false,
    length: "6 mins"
  },
  {
    title: "Our first interactions with the Cardano blockchain.",
    icon: "link",
    color: "dark-green",
    description: "",
    difficulty: "Beginner-Intermediate",
    enabled: false,
    length: "6 mins"
  },
]

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
                    Plutus <i>Up and Running</i>
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
            {lessons.map(lesson => <Lesson lesson={lesson} />)}
            
          </div>
        </div>
      </div>
    </>
  );
};

function Lesson(props) {
  return (
    <Link style={{width: "100%"}} to={"#"}>
      <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
        <div className="mr-10">
          <div class={`square-116 bg-${props.lesson.color} shadow-dodger-blue-1 rounded-10 text-white font-size-7`}><i class={`fa fa-${props.lesson.icon}`}></i></div>
        </div>
        <div className="mt-8 mt-xs-0">
          <h4 className={`font-size-8 font-weight-medium ${props.lesson.enabled ? "text-primary" : "text-muted"} mb-5 line-height-34`}>
            {props.lesson.title}
          </h4>
          <div className="d-flex align-items-center flex-wrap">
            <span className="text-bali-gray font-size-3 pr-9">
              <i className="fa fa-clock mr-2"></i>{props.lesson.difficulty}
            </span>
            <span className="text-bali-gray font-size-3 pr-9">
              <i className="fa fa-clock mr-2"></i>{props.lesson.length} read
            </span>
          </div>
        </div>
      </div>
    </Link>
    );
}

export default Blog;
