import React from "react";
import { jsPDF,HTMLOptionImage } from "jspdf";

const GeneratePdf = () => {

  const generatePdf = () => {

      const doc = new jsPDF('p', 'pt','a4',true);

      var content = document.getElementById("print");
      console.log("content", content);
      if (content) {
        doc.html(content, {
          callback: function(doc) {
            console.log("in callback");
            doc.save();
          },
          x: 50,
          y: 50,
          html2canvas: { scale: 0.5 },
        });
      }

  };


  return (

    <>
      <button type="button" onClick={generatePdf} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2">Download as PDF</button>
    </>

  );
};

export default GeneratePdf;