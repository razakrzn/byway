import React from "react";
import Header from "../../components/Header/Header";
import Sportlight from "../../components/Sportlight/Sortlight";
import GlobalStyle from "../../assets/styles/GlobalStyle";
import Status from "../../components/Status/Status";
import CourseDetails from "../../components/CourseDetails.js/CourseDetails";
import Testimonials from "../../components/Testimonials/Testimonials";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sportlight />
      <Status />
      <CourseDetails />
      <Testimonials />
      <CallToActionSection />
      <Footer />
    </>
  );
}

export default Home;
