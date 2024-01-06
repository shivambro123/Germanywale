import React from "react";
import Hero from "../components/Hero/Hero";
import Navbarcomp from "../components/common/Navbar/Navbarcomp";
import ScrollSpy from "react-ui-scrollspy";
import Testimonal from "../components/Testimonal/Testimonal";
import Header from "../components/Header/Header";

const Landingpage = () => {
  return (
    <>
      <Header />
      <Navbarcomp />
      <ScrollSpy>
        <Hero />
        <Testimonal />
        <Hero />
      </ScrollSpy>
    </>
  );
};

export default Landingpage;
