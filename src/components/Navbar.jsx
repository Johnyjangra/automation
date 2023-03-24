import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/png/Logo.png";

const Navbar = () => {
  const [first, setfirst] = useState(true);
  return (
    <nav>
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul
            className={
              first
                ? "hide d-flex mb-0 ps-0 align-items-center flex-md-row flex-column pos_ab h_100 w_100 l_0 top_0 justify-content-md-start justify-content-center"
                : "show d-flex mb-0 ps-0 align-items-center flex-md-row flex-column pos_ab h_100 w_100 l_0 top_0 justify-content-md-start justify-content-center top_0"
            }
          >
            <li className="mt-md-0 mt-4">
              <a
                className="ff_raleway fw_500 fs_xsm clr_blue media_font_30"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="ms-md-5 mt-md-0 mt-4">
              <a
                className="ff_raleway fw_500 fs_xsm clr_blue media_font_30"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="ms-md-5 mt-md-0 mt-4">
              <a
                className="ff_raleway fw_500 fs_xsm clr_blue media_font_30"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="ms-md-5 mt-md-0 mt-4">
              <a
                className="ff_raleway fw_500 fs_xsm clr_blue media_font_30"
                href="#"
              >
                Premium
              </a>
            </li>
            <div
              className="pos_ab top_10"
              onClick={() => {
                setfirst(true);
              }}
            >
              <div className="icon1"></div>
              <div className="icon2"></div>
            </div>
          </ul>
          <div
            className="d-md-none d-block"
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="navicon1"></div>
            <div className="navicon2"></div>
            <div className="navicon3"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
