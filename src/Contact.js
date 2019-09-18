import React from "react";
import { LinkedIn, GitHub, Mail } from "./icons/iconSVG";
export const Contact = props => (
  <div id="contact" className="shortFadeIn page horizontal maxswitch">
    <span className="contact" id="mail">
      <a className="contact" href="mailto:rvdang@uci.edu">
        <Mail className="contact" />
      </a>
    </span>
    <span className="contact">
      <a className="contact" href={"https://linkedin.com/in/rvdang"}>
        <GitHub className="contact" />
      </a>
    </span>
    <span className="contact">
      <a className="contact" href={"https://github.com/rvdang"}>
        <LinkedIn className="contact" />
      </a>
    </span>
  </div>
);
