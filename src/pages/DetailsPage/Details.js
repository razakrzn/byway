import React, { useEffect } from "react";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import Header2 from "../../components/Header2/Header2";
import Footer from "../../components/Footer/Footer";
import SportlightOfDetails from "../../components/SportlightOfDetails/SportlightOfDetails";
import NavButtons from "../../components/NavButtons/NavButtons";
import CourseDescription from "../../components/CourseDescription/CourseDescription";
import Instructor from "../../components/Instructor/Instructor";
import Syllabus from "../../components/Syllabus/Syllabus";
import LearnerReviews from "../../components/LearnerReviews/LearnerReviews";
import Testimonial from "../../components/Testimonials/Testimonials";
import MoreCourses from "../../components/MoreCourses/MoreCourses";

function Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header2 />
      <SportlightOfDetails />
      <NavButtons />
      <CourseDescription />
      <Instructor />
      <Syllabus />
      <LearnerReviews />
      <Testimonial />
      <MoreCourses />
      <Footer />
    </>
  );
}

export default Details;
