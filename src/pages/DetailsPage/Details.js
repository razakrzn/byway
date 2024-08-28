import React, { useEffect } from "react";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import Header2 from "../../components/Header2/Header2";
import Footer from "../../components/Footer/Footer";
import SportlightOfDetails from "../../components/SportlightOfDetails/SportlightOfDetails";
import Testimonial from "../../components/Testimonials/Testimonials";
import MoreCourses from "../../components/MoreCourses/MoreCourses";
import Main from "../../components/MainSection/Main";

function Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header2 />
      <SportlightOfDetails />
      <Main />
      <Testimonial />
      <MoreCourses />
      <Footer />
    </>
  );
}

export default Details;
