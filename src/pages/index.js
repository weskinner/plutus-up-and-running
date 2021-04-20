import React from "react";

import PageWrapper from "../components/PageWrapper";

import Blog from "../sections/home/Blog";
// import Section from "../layout/Section";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
