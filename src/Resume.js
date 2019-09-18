import React from "react";
import resume from "./documents/Ryan Dang Resume.pdf";
export const Resume = props => (
  <div id="resume" className="shortFadeIn page vertical maxswitch">
    <object data={resume} type="application/pdf" width="100%" height="100%">
      <p style={{ textAlign: "center" }}>
        It appears you don't have a PDF plugin for this browser. No biggie...{" "}
        <br />
        you can{" "}
        <a style={{ color: "#a5a299" }} href={resume}>
          click here{" "}
        </a>{" "}
        to download my resume :)
      </p>
    </object>
  </div>
);
