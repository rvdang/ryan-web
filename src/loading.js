import React from "react";
import "./Loading.css";
import { Link } from "react-router-dom";
import { Mail, GitHub, LinkedIn } from "./icons/iconSVG";
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
  <div className="logo fadeIn">
    <span className="logo">R&nbsp;</span>
    <span className="logo">YD</span>
    <span className="logo">AA</span>
    <span className="logo">NN</span>
    <span className="logo">&nbsp;G</span>
    <Link
      to={"/"}
      style={{
        textDecoration: "none",
        color: "white",
        fontFamily: "Raleway",
        fontWeight: 100
      }}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About Me
    </Link>
    <Link
      to={"/resume"}
      style={{
        textDecoration: "none",
        color: "white",
        fontFamily: "Raleway",
        fontWeight: 100
      }}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Resume
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
        textDecoration: "none",
        color: "white",
        fontFamily: "Raleway",
        fontWeight: 100
      }}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contact Me
    </Link>
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
