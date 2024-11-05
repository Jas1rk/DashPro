import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const PdfExport = ({ contentRef }) => {
  const handlePdf = async () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const content = contentRef.current;
    if (content) {
      const canvas = await html2canvas(content);
      const imageData = canvas.toDataURL("image/png");
      doc.addImage(imageData, "PNG", 10, 10, 190, 0);
      doc.save("dashboard.pdf");
    } else {
      alert("no content");
    }
  };
  return (
    <button
      className="bg-blue-900 text-white rounded-md p-2"
      onClick={handlePdf}
    >
      Download PDF
    </button>
  );
};

export default PdfExport;
