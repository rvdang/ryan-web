import React from "react";
import { LinkedIn, GitHub, Mail } from "./icons/iconSVG";
export const Contact = props => (
  <div id="contact" className="shortFadeIn page horizontal maxswitch">
    <div style={{margin: "auto", display: "flex", flexDirection: "row-reverse", textAlign: "center"}}>
      <span className="contact" id="mail">
        <a className="contact" href="mailto:rvdang@uci.edu">
          <Mail className="contact" />
        </a>
      </span>
      <span className="contact">
        <a className="contact" href={"https://github.com/rvdang"}>
          <GitHub className="contact" />
        </a>
      </span>
      <span className="contact">
        <a className="contact" href={"https://linkedin.com/in/rvdang"}>
          <LinkedIn className="contact" />
        </a>
      </span>
    </div>
  </div>
);
