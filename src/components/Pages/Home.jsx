import React, { Fragment } from "react";
import Header from "../Header/Header";
import HeroSection from "../Hero-Section/HeroSection";
import CompanySection from "../Company-section/Company";
import AboutUs from "../About/AboutUs";
import Courses from "../Courses-Section/Courses.jsx";
import ChooseUs from "../Choose-Us/ChooseUs.jsx";
import Features from "../Features-section/Features.jsx";
import FreeCourse from "../Free-course-section/FreeCourse.jsx";
import Testimonials from "../Testimonial/Testimonial.jsx";
import Newsletter from "../Newsletter/Newsletter.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
