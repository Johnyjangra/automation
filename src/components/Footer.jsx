import React from "react";
import leftarrow from "../assets/images/png/leftarrow.png";
import rightarrow from "../assets/images/png/rightarrow.png";
import people from "../assets/images/png/people.png";
import clock from "../assets/images/png/watch.png";
import invoice from "../assets/images/png/invoice.png";
// import invoiceleftarrow from "../assets/images/img/duration_section/invoice_sec/leftarrow.png";
// import invoicerightarrow from "../assets/images/img/duration_section/invoice_sec/rightarrow.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <section>
      <Container>
        <div className="bg_blue p-4 br_15">
          <Row className="justify-content-around align-items-center">
            <Col lg={3}>
              <div className="d-flex align-items-end position-relative justify-content-center">
                <span className="ff_inter fw_700 fs_9xl clr_white">8</span>
                <div className="small_blue_box position-absolute months_line d-lg-block d-none"></div>
                <span className="ff_inter fw_700 fs_3xl clr_white position-relative months_pos">
                  MONTHS
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-evenly h -100">
                <img src={leftarrow} alt="leftarrow" />
                <div className="text-center ">
                  <p className="ff_inter fw_700 fs_2xl clr_white ">Duration</p>
                  <img src={clock} alt="clock" />
                </div>
                <img src={rightarrow} alt="rightarrow" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex align-items-end position-relative justify-content-center justify-content-lg-start">
                <span className="ff_inter fw_700 fs_9xl clr_white">4</span>
                <div className="small_blue_box position-absolute bottom_42 l_212 d-lg-block d-none"></div>
                <span className="ff_inter fw_700 fs_3xl clr_white position-relative months_remaing_pos">
                  MONTHS REMAINING
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="p-5 my-5 br_15 border_grey">
          <Row className="align-items-center justify-content-center text-center text-lg-start">
            <Col lg={2}>
              <p className="ff_inter fw_700 fs_4xl clr_blue mb-0">42K</p>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-evenly h- 100">
                <img src={leftarrow} alt="invoiceleftarrow" />
                <div className="text-center ">
                  <p className="ff_inter fw_700 fs_2xl clr_blue mb-0 ">
                    Invoices
                  </p>
                  <img src={invoice} alt="invoice" />
                </div>
                <img src={rightarrow} alt="rightarrow" />
              </div>
            </Col>
            <Col lg={2}>
              <p className="ff_inter fw_700 fs_4xl clr_yellow mb-0">21K </p>
            </Col>
          </Row>
        </div>
        <div className="p-5 my-5 br_15 bg_blue">
          <Row className="align-items-center justify-content-center text-center text-lg-start ">
            <Col lg={2}>
              <p className="ff_inter fw_700 fs_6xl clr_white mb-0">95</p>
              <p className="ff_inter fw_700 fs_xsm clr_white mb-0">MAN DAYS</p>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-evenly h -100">
                <img src={leftarrow} alt="leftarrow" />
                <div className="text-center ">
                  <p className="ff_inter fw_700 fs_2xl clr_white  ">Effort</p>
                  <img src={people} alt="people" />
                </div>
                <img src={rightarrow} alt="rightarrow" />
              </div>
            </Col>
            <Col lg={2}>
              <p className="ff_inter fw_700 fs_6xl clr_white mb-0">14.25 </p>
              <p className="ff_inter fw_700 fs_xsm clr_white mb-0">MAN DAYS </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
