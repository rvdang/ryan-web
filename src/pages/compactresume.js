import React from "react";
export const CompactResume = props => (
  <div className="shortFadeIn page vertical maxswitch">
      {/* <embed
    type="application/pdf"
    src={require('../documents/Ryan Dang Resume.pdf')}
    id="pdfDocument"
    width="100%"
    height="100%" /> */}
    <iframe style={{width:0,height:0,border:0, border:"none"}}><embed
    type="application/pdf"
    src={require('../documents/Ryan Dang Resume.pdf')}
    onLoad="printDocument(this)"
    id="pdfDocument"
    width="100%"
    height="100%" /></iframe>
    
  </div>
);

function printDocument(documentId) {
    var doc = document.getElementById(documentId);

    //Wait until PDF is ready to print    
    if (typeof doc.print === 'undefined') {    
        setTimeout(function(){printDocument(documentId);}, 1000);
    } else {
        doc.print();
    }
}