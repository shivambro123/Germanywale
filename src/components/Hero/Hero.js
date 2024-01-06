import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./../../styles/Hero.css";
import coverimage from "./../../assests/heroimage.svg";
import studentsgroup from "./../../assests/Group 124.svg";
import tesla from "./../../assests/Tesla_logo.svg";
import bmw from "./../../assests/bmw.svg";
import oodd from "./../../assests/oodd.svg";
import sap from "./../../assests/sap.svg";
import lufthansa from "./../../assests/Lufthansa_Logo_2018.svg";

const Hero = () => {
  return (
    <>
      <div className="herowrapper" id="first">
        <Container className="py-20">
          <Row className="px-4 py-4 h-full">
            <Col lg={5} md={6} className="hero_content">
              <div className="mb-4">
                Empowering dreams of
                <h2 className="studycontent">Studying in Germany</h2>
                <button className="callbtn">Call for FREE counselling</button>
              </div>
              <div className="mb-6 flex items-center">
                <img src={studentsgroup} alt="studentsgroup" />
                <p className="text-black guranteewrapper">
                  {" "}
                  <span className="percent"> &nbsp; 100% </span>
                  guaranteed admission
                </p>
              </div>
              <div className="mt-5">
                <p className="text-base" style={{ fontFamily: "100" }}>
                  Our students finished University to work at{" "}
                  <span className="percent">global offices</span> of
                </p>
              </div>
              <div className="flex justify-between mt-3">
                <img src={tesla} alt="tesla" />
                <img src={bmw} alt="bmw" />
                <img src={oodd} alt="oodd" />
                <img src={sap} alt="sap" />
                <img src={lufthansa} alt="lufthansa" />
              </div>
            </Col>
            <Col
              lg={7}
              md={6}
              className="flex justify-center align-middle h-3/4 "
            >
              <img src={coverimage} alt="coverimage" className="coverimage" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
