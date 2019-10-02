import React from "react";
import "./Loading.css";
import { Link } from "react-router-dom";
import { Mail, GitHub, LinkedIn } from "./icons/iconSVG";

import mountain from "./images/mountain.svg";
export const LoadingScreen = props => (
  <div id="loadingscreen" className="max">
    <span className="intro" id="r">
      R
    </span>
    <span className="intro" id="y">
      Y
    </span>
    <span className="intro" id="a1">
      A
    </span>
    <span className="intro" id="n1">
      N
    </span>
    <span className="intro" id="d">
      D
    </span>
    <span className="intro" id="a2">
      A
    </span>
    <span className="intro" id="n2">
      N
    </span>
    <span className="intro" id="g">
      G
    </span>
    {props.children}
  </div>
);

export const Navbar = props => (
  <div
    id="nav"
    className="logo fadeIn"
    style={{ justifyContent: "space-between" }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <span className="logo" style={{ paddingBottom: "19px" }}>
        R
      </span>
      <span className="logo">YD</span>
      <span className="logo">AA</span>
      <span className="logo">NN</span>
      <span className="logo" style={{ paddingTop: "19px" }}>
        G
      </span>
        <Link
          to={"/"}
          style={{
            fontSize: "20px",
            textDecoration: "none",
            color: "white",
            fontFamily: "Raleway",
            fontWeight: 100,
            marginLeft: 20,
            marginTop: 4,
            textAlign: "center"
          }}
        >
          About&nbsp;Me
        </Link>

        <Link
          to={"/resume"}
          style={{
            fontSize: "20px",
            textDecoration: "none",
            color: "white",
            fontFamily: "Raleway",
            fontWeight: 100,
            marginLeft: 15,
            marginTop: 4,
            textAlign: "center"
          }}
        >
          Resume
        </Link>
      {/* <Link
      to={"/projects"}
      style={{
        textDecoration: "none",
        color: "white",
        fontFamily: "Raleway",
        fontWeight: 100
      }}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Projects
    </Link> */}
        <Link
          to={"/contact"}
          style={{
            fontSize: "20px",
            textDecoration: "none",
            color: "white",
            fontFamily: "Raleway",
            fontWeight: 100,
            marginLeft: 15,
            marginTop: 4,
            textAlign: "center"
          }}
        >
          Contact&nbsp;Me
        </Link>
    </div>
    <div id="footer" className="fadeIn">
      <span className="footer">
        <a href="mailto:rvdang@uci.edu">
          <Mail className="icon" />
        </a>
      </span>
      <span className="footer">
        <a href={"https://github.com/rvdang"}>
          <GitHub className="icon" />
        </a>
      </span>
      <span className="footer">
        <a href={"https://linkedin.com/in/rvdang"}>
          <LinkedIn className="icon" />
        </a>
      </span>
    </div>
  </div>
);

export const Badge = props => (
  <div className="shortFadeIn page maxswitch">
    <span className="badge" style={{ color: "black" }}>
      R&nbsp;
    </span>
    <span className="badge" style={{ color: "black" }}>
      &nbsp;D
    </span>
  </div>
);

export const Footer = props => (
  <div id="footer" className="fadeIn">
    <span className="footer">
      <a href="mailto:rvdang@uci.edu">
        <Mail className="icon" />
      </a>
    </span>
    <span className="footer">
      <a href={"https://github.com/rvdang"}>
        <GitHub className="icon" />
      </a>
    </span>
    <span className="footer">
      <a href={"https://linkedin.com/in/rvdang"}>
        <LinkedIn className="icon" />
      </a>
    </span>
  </div>
);

export const Mountain = props => (
  <img
    src={require("./images/mountain.svg")}
    style={{ width: "20%", position: "fixed", bottom: "33px", right: 0 }}
  />
);
