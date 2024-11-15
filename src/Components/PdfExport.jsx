import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Chart, registerables } from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";

Chart.register(...registerables);

const PdfExport = ({ users, dailyData }) => {
  const chartRef = useRef();

  const renderChart = () => {
    new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: dailyData.map((day) => day.date),
        datasets: [
          {
            label: "Temperature",
            data: dailyData.map((day) => day.temperature),
            fill: false,
            borderColor: "#003366",
            tension: 0.1,
          },
        ],
      },
      options: {
        plugins: { legend: { display: true, position: "top" } },
        scales: {
          x: { title: { display: true, text: "Date" } },
          y: { title: { display: true, text: "Temperature (°C)" } },
        },
      },
    });
  };

  const handlePdfExport = async () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Weather Report", 14, 15);

    doc.setFontSize(12);
    doc.text("User List", 14, 25);
    doc.autoTable({
      startY: 30,
      head: [["No", "Username", "Email", "Mobile"]],
      body: users.map((user, index) => [
        index + 1,
        user.username,
        user.email,
        user.phone,
      ]),
      theme: "striped",
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
    });

    doc.text("Weather Data", 14, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 15,
      head: [["No", "Date", "Temperature (°C)"]],
      body: dailyData.map((day, index) => [
        index + 1,
        day.date,
        `${day.temperature}°C`,
      ]),
      theme: "striped",
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
    });

    const chartImage = chartRef.current.toDataURL("image/png", 1.0);
    doc.addPage();
    doc.setFontSize(14);
    doc.text("Temperature Graph", 14, 15);
    doc.addImage(chartImage, "PNG", 10, 15, 150, 100);

    doc.save("Weather_Report.pdf");
  };

  return (
    <div>
      <canvas
        ref={chartRef}
        width="300"
        height="200"
        style={{ display: "none" }}
      />

      <button
        onClick={() => {
          renderChart();
          setTimeout(handlePdfExport, 500);
        }}
        className="bg-blue-900 text-white font-light text-sm rounded-md p-2 mr-2 "
      >
        <FontAwesomeIcon icon={faFileExport} className="mr-2" />
        Download PDF
      </button>
    </div>
  );
};

export default PdfExport;
