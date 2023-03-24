import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import computer from "../assets/images/png/computer.png";
import dotes from "../assets/images/png/dotes.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="back_img pt-3 h- 100 position-relative">
      <Navbar />
      <div className="py-5">
        <div className="position-absolute l_m6 t_48 z-m1 d-md-block d-none">
          <img src={dotes} alt="dotes" />
        </div>
        <Container>
          <Row className="align-items-center flex-lg-row flex-column-reverse ">
            <Col lg={6}>
              <div className="text-lg-start text-center">
                <p className="mb-0 ff_inter fw_300 fs_4xl clr_blue ">
                  Increased Efficiency
                </p>
                <h1 className="mb-0 ff_inter fw_700 fs_7xl clr_blue">
                  Through Automation
                </h1>
                <p className="mb-0 ff_inter fw_400  fs_md clr_black">
                  We have{" "}
                  <span className="fw_700">automated invoice distribution</span>{" "}
                  from as our automation initiatives.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <img className="w-100" src={computer} alt="computer" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5"></div>
    </section>
  );
};

export default Hero;
