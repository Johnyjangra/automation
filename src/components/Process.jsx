import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import turn from "../assets/images/png/turnarrow.png";
import leftimg from "../assets/images/png/leftimg.png";
import rightimg from "../assets/images/png/rightimg.png";

const Process = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center">
          <p className="ff_inter fw_700 fs_5xl clr_blue">
            Increasing process efficiency by
          </p>
          <div className="position-relative  d-inline-block">
            <span className="ff_inter fw_700 fs_8xl clr_green">4x</span>
            <img
              src={turn}
              alt="turn"
              className="position-absolute xarrow_pos"
            />
          </div>
          <div className="position-relative my-5">
            <Row className="py-5">
              <Col md={6}>
                <div className="back_purple_opacity_low br_15 py-4">
                  <p className="ff_inter fw_700 fs_lg clr_purple mb-0">
                    PRE-AUTOMATION
                  </p>
                </div>
              </Col>

              {/* <Col className=""> */}

              {/* </Col> */}

              <Col md={6} className="mt-md-0 mt-5">
                <div className="back_white_opacity_low br_15 py-4">
                  <p className="ff_inter fw_700 fs_lg clr_white mb-0">
                    PRE-AUTOMATION
                  </p>
                </div>
              </Col>
            </Row>
            <div className="max_184 d-lg-block d-none">
              <div className="bg_blur_white p-3  position-absolute start-50 translate-middle-x top-0 d-inline-block">
                <div className="yellow_border_circle d-flex align-items-center justify-content-center">
                  <span className="ff_inter fw_700 fs_5xl clr_purple mb-0">
                    V
                  </span>
                  <span className="mt-3 ff_inter fw_700 fs_5xl clr_purple mb-0">
                    S
                  </span>
                </div>
              </div>
            </div>
            <Row>
              <Col lg={6}>
                <img src={leftimg} alt="leftimg" className="mt-4 w_md_100" />
                <p className="ff_inter fw_700 fs_xl clr_yellow mt-5">
                  With 100% manual process
                </p>
                <div className="small_line mx-auto mt-5"></div>
              </Col>
              <Col lg={6}>
                <img src={rightimg} alt="rightimg" className="mt-4 w_md_100" />
                <p className="ff_inter fw_700 fs_xl clr_bluestone mb-0 mt-5">
                  With just 70% implementation
                </p>
                <div className="small_line mx-auto mt-5"></div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
