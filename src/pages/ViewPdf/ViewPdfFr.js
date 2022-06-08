import React from "react";

const ViewPdfFr = () => {
  return (
    <div className="visupdf">
      <object
        data={require("../../media/cv.pdf")}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
};

export default ViewPdfFr;
