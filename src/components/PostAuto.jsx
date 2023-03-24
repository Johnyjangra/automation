import { Col, Container, Row } from "react-bootstrap";
import calculator from "../assets/images/png/calculator.png";
import mail from "../assets/images/png/mail.png";
import notes from "../assets/images/png/notes.png";
import noteswitharrow from "../assets/images/png/noteswitharrow.png";
import rightarrow from "../assets/images/png/rightarrow.png";
import shadowbox from "../assets/images/png/shadowbox.png";
import code from "../assets/images/png/code.png";

const PostAutomation = () => {
  return (
    <section className="position-relative ">
      <div className="bottom_bg_line position-absolute bottom_29_percnt d-none d-xl-block"></div>
      <div className="top_bg_line position-absolute top_19_percnt d-none d-xl-block"></div>
      <Container className="">
        <div className=" text-center pb-lg-5">
          <p className="ff_inter fw_700 fs_5xl clr_blue mb-4">
            Post-Automation
          </p>
          <p className="ff_inter fw_400 fs_md clr_black">
            <span className="fw_700"> End-to-end automation </span>on the Yardi
            platform
          </p>
        </div>
        <Row className="justify-content-center align-items-start align-items-lg-center my-5 mt-lg-5 pt-lg-5 ">
          {/* col 1 */}
          <Col
            md={4}
            className="  position-relative mb-lg-5 pb-lg-5 mt-lg-0 mt-2"
          >
            <div className=" p-lg-5 mb-lg-5">
              <div className="  mb-lg-5">
                <div className=" p-lg-4 mb-lg-5 text-center text-lg-start">
                  <img
                    src={shadowbox}
                    alt="shadowbox"
                    className="position-absolute sahdow_box_pos w-1 00 d-none d-lg-block"
                  />
                  <img src={notes} alt="notes" />
                  <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                    System picks up invoices
                    <span className="clr_yellow"> automatically</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="  position-relative mb-lg-5 pb-lg-5">
            {/* col 2 */}
            <div className=" p-lg-5 mb-lg-5">
              <div className=" p- 5 mb-lg-5">
                <div className=" p-lg-4 mb-lg-5 text-center text-lg-start">
                  <img
                    src={rightarrow}
                    alt="rightarrow"
                    className="position-absolute  arow_pos d-none d-lg-block"
                  />
                  <img
                    src={shadowbox}
                    alt="shadowbox"
                    className="position-absolute sahdow_box_pos w-1 00 d-none d-lg-block"
                  />
                  <img src={code} alt="code" />
                  <p className="ff_inter fw_500 mt-3 fs_sm clr_light_black">
                    Validating businessrules,{" "}
                    <span className="clr_yellow">coding</span>, and
                    <span className="clr_yellow"> handling</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="  position-relative mb-lg-5 pb-lg-5">
            {/* col 3 */}
            <div className=" p-lg-5 mb-lg-5">
              <div className=" p- 5 mb-lg-5 mt-lg-0 mt-3">
                <div className=" p-lg-4 mb-lg-5 text-center text-lg-start">
                  <img
                    src={rightarrow}
                    className="position-absolute  arow_pos d-none d-lg-block"
                    alt="rightarrow"
                  />
                  <img
                    src={shadowbox}
                    alt="shadowbox"
                    className="position-absolute sahdow_box_pos w-1 00 d-none d-lg-block"
                  />
                  <img src={noteswitharrow} alt="noteswitharrow" />
                  <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                    <span className="clr_yellow">Invoice distribution</span>by
                    gathering contact details
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className=" p t-5  position-relative mt-md-5 mt-3">
            {/* col 4 */}
            <div className="p-lg-5 mt- 5">
              <div className="p-lg-4 mt- 5 text-center text-lg-start">
                <img
                  src={shadowbox}
                  alt="shadowbox"
                  className="position-absolute sahdow_box_pos  w-1 00 d-none d-lg-block"
                />
                <img src={mail} alt="mail" />
                <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                  <span className="clr_yellow">Sending emails </span> with
                  attachments with invoices to the recipients.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className=" p t-5  position-relative mt-md-5 mt-3">
            {/* col 5 */}
            <div className="p-lg-5 mt- 5">
              <div className="p-lg-4 mt- 5 text-center text-lg-start">
                <img
                  src={rightarrow}
                  alt="rightarrow"
                  className="position-absolute  downarrow_pos d-none d-lg-block"
                />
                <img
                  src={shadowbox}
                  alt="shadowbox"
                  className="position-absolute sahdow_box_pos  w-1 00 d-none d-lg-block"
                />
                <img src={calculator} alt="calculator" />
                <p className="ff_inter fw_500 mt-4 fs_sm clr_light_black">
                  Finance receives system-generated
                  <span className="clr_yellow">automated summaries</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PostAutomation;
