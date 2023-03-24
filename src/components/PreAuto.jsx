import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import round1 from "../assets/images/png/round1.png";
import round2 from "../assets/images/png/round2.png";
import round3 from "../assets/images/png/round3.png";
import round4 from "../assets/images/png/round4.png";
import yellowarrow from "../assets/images/png/yellowarrow.png";
import rounddot from "../assets/images/png/rounddotes.png";

const PreAuto = () => {
  return (
    <section>
      <div className="pre_bg mt_m1">
        <Container>
          <div className="text-center py-4">
            <h1 className="ff_inter fw_700 fs_5xl clr_blue mb-4 pt-3">
              Pre-Automation
            </h1>
            <p className="mb-0 ff_inter fw_400  fs_md clr_black">
              <span className="fw_700">Manually creating </span>and
              <span className="fw_700">distributing invoices</span> -
              labor-intensive and prone to errors.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <Row className="mt-lg-5 py-5 position-relative">
          <div
            className="d-lg-block d-none
          "
          >
            <img
              className="position-absolute left_32 top_0"
              src={rounddot}
              alt="dotes"
            />
          </div>
          <Col lg={3} md={6} className="px-xl-3 position-relative scale">
            <div className="white_card pt-5 pb-4">
              <div className="position-absolute right_m2 top_9 d-sm-block d-none">
                <img src={yellowarrow} alt="arrow" />
              </div>
              <div className="text-center">
                <img src={round1} alt="round1" />
              </div>
              <p className="text-center inter fw_300 fs_xsm clr_light_black pt-5 px-xl-5 px-lg-3 px-5">
                Download invoices manually
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            className="px-xl-3 position-relative scale mt-md-0 mt-4"
          >
            <div className="white_card pt-5 pb-4">
              <div className="position-absolute right_m2 bottom_9 d-sm-block d-none">
                <img src={yellowarrow} alt="arrow" />
              </div>
              <div className="text-center">
                <img src={round2} alt="round1" />
              </div>
              <p className="text-center inter fw_300 fs_xsm clr_light_black pt-5 px-xl-5 px-2">
                Create an email for the tenant contact
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            className="px-xl-3 position-relative scale mt-lg-0 mt-4"
          >
            <div className="white_card pt-5 pb-4 px-3">
              <div className="position-absolute right_m2 top_9 d-sm-block d-none">
                <img src={yellowarrow} alt="arrow" />
              </div>
              <div className="text-center">
                <img src={round3} alt="round1" />
              </div>
              <p className="text-center inter fw_300 fs_xsm clr_light_black pt-5 px-xl-5 px-lg-4 px-5">
                Send the e-mailmanually
              </p>
            </div>
          </Col>
          <Col
            lg={3}
            md={6}
            className="px-xl-3 position-relative scale mt-lg-0 mt-4"
          >
            <div className="white_card pt-5 pb-4">
              <div className="position-absolute right_m2 bottom_9 d-sm-block d-none">
                <img src={yellowarrow} alt="arrow" />
              </div>
              <div className="text-center">
                <img src={round4} alt="round1" />
              </div>
              <p className="text-center inter fw_300 fs_xsm clr_light_black pt-5 px-xl-4 px-1">
                Maintain communication records manually
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PreAuto;
