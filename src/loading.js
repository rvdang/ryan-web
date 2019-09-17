import React from "react";
import "./Loading.css";
import { Link } from "react-router-dom";
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
      to={"/"}
      style={{
        textDecoration: "none",
        color: "white",
        fontFamily: "Raleway",
        fontWeight: 100
      }}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Resume
    </Link>
    <Link
      to={"/projects"}
      style={{
        textDecoration: "none",
        color: "white",
        fontFamily: "Raleway",
        fontWeight: 100
      }}
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Projects
    </Link>
    <Link
      to={"/"}
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
        <img className="icon" src={require("./icons/mail.svg")} />
      </a>
    </span>
    <span className="footer">
      <a href={"https://github.com/rvdang"}>
        <img className="icon" src={require("./icons/github.svg")} />
      </a>
    </span>
    <span className="footer">
      <a href={"https://linkedin.com/in/rvdang"}>
        <img className="icon" src={require("./icons/linkedin.svg")} />
      </a>
    </span>
  </div>
);

export const AboutMe = props => (
  <div className="shortFadeIn page horizontal maxswitch">
    <img
      src={require("./images/profilepic.png")}
      height="432px"
      style={{ padding: "10px" }}
    ></img>
    <span
      style={{
        width: "500px",
        color: "black",
        textAlign: "left",
        lineHeight: 1.5,
        wordWrap: "break-word",
        padding: "10px"
      }}
    >
      Hello! My name is Ryan Dang.
      <br />
      <br /> I am currently 21 years old and I attend the University of
      California, Irvine as a Computer Science Student.
      <br />
      <br /> I currently work as a back-end developer for Ardent Labs where
      handle all things API for all of our interal applications. This includes a
      mobile application for students to practice problems, and two web
      applications for management of classes and students, emailing parents and
      more. When I am not too busy with API tasks at work, I like to play with
      front-end development to better understand the way our developers use our
      API. Since doing so, I've gained a decent understanding of React, although
      I still have much to learn to attain my goal of full-stack development.
      <br />
      <br />
      During my free time, I rock climb at Sender One in Santa Ana, work on some
      web applications, and catch up with old friends on League of Legends.
    </span>
  </div>
);
