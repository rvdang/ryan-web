import React from "react";
export const AboutMe = props => (
  <div className="shortFadeIn page horizontal maxswitch">
    <img
      className="shortFadeIn"
      src={require("./images/ryan_headshot.jpeg")}
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
      <br /> I am currently 21 years old, and I attend the University of
      California, Irvine as a Computer Science Student.
      <br />
      <br /> I currently work as a back-end developer for Ardent Labs, where I
      handle all things API for all of our internal applications. This includes a
      mobile application for students to practice problems, and two web
      applications for management of classes and students. On occasion, I like
      to play with front-end development to better understand the way our
      developers use our API. Since doing so, I've gained a decent understanding
      of React but I still have much to learn to attain my goal of full-stack
      development.
      <br />
      <br />
      During my free time, I rock climb at Sender One in Santa Ana, work on some
      web applications, and catch up with old friends on League of Legends.
    </span>
  </div>
);
