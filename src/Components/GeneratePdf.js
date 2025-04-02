

// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import imgData1 from "./image";

// const generatePDF = (recipientDetails, items) => {
//   const doc = new jsPDF();

//   // Company Logo & Details
//   doc.addImage(imgData1, "JPEG", 10, 10, 40, 40);
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(20);
//   doc.text("XYZ Company", 55, 20);
//   doc.setFontSize(12);
//   doc.setFont("helvetica", "normal");
//   doc.text("123 Business Street, Hubballi, India", 55, 28);
//   doc.text("GSTIN: 12ABCDE3456F", 55, 36);
//   doc.line(10, 50, 200, 50); // Separator

//   // Quotation Title & Date
//   doc.setFontSize(16);
//   doc.setFont("helvetica", "bold");
//   doc.text("QUOTATION", 85, 60);
//   doc.setFontSize(12);
//   doc.setFont("helvetica", "normal");
//   doc.text(`Date: ${recipientDetails.date}`, 150, 60);

//   // Recipient Details
//   doc.setFontSize(14);
//   doc.setFont("helvetica", "bold");
//   doc.text("To:", 10, 72);
//   doc.setFontSize(12);
//   doc.setFont("helvetica", "normal");
//   doc.text(`Company Name: ${recipientDetails.name}`, 10, 80);
//   doc.text(`Address: ${recipientDetails.address}`, 10, 85);
//   doc.text(`GSTIN: ${recipientDetails.gstin}`, 10, 90);
//   doc.text(`Phone: ${recipientDetails.phone}`, 10, 95);
//   doc.line(10, 100, 200, 100); // Separator

//   // Table Headers
//   const tableColumn = ["Item Name", "HSN Code", `Rate (Rs)`, "Quantity", "GST %", "Total (Rs)"];
//   const tableRows = [];
//   let grandTotal = 0;

//   // Table Data
//   items.forEach((item) => {
//     const total = (item.rate * item.quantity) + (item.rate * item.quantity * (item.gst / 100));
//     grandTotal += total;
//     const rowData = [item.name, item.hsn, item.rate, item.quantity, item.gst, total.toFixed(2)];
//     tableRows.push(rowData);
//   });

//   // Add Table
//   doc.autoTable({
//     startY: 110,
//     head: [tableColumn],
//     body: tableRows,
//     theme: "striped",
//     styles: { halign: "center", fontSize: 10 },
//     headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
//     columnStyles: { 5: { halign: "right" } },
//   });

//   // Grand Total
//   const finalY = doc.autoTable.previous.finalY + 10;
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(14);
//   doc.text("Grand Total:",130, finalY);
//   doc.text(`Rs. ${grandTotal}`, 190, finalY, { align: "right" });

//   // Terms and Conditions
//   const termsY = finalY + 20;
//   doc.setFontSize(12);
//   doc.setFont("helvetica", "bold");
//   doc.text("Terms and Conditions:", 10, termsY);
//   doc.setFontSize(10);
//   doc.setFont("helvetica", "normal");
//   doc.text("1. Payment should be made within 30 days.", 10, termsY + 10);
//   doc.text("2. Goods once sold will not be taken back.", 10, termsY + 20);
//   doc.line(10, termsY + 30, 200, termsY + 30); // Separator

//   // Signature Section
//   const signatureY = termsY + 40;
//   doc.setFontSize(12);
//   doc.text("Authorized Signatory", 150, signatureY);
//   doc.text("(XYZ Company)", 150, signatureY + 10);
//   doc.text("______________________", 150, signatureY + 20);
//   doc.text("Signature & Seal", 150, signatureY + 30);

//   // Save the PDF
//   doc.save(`${recipientDetails.name}_Quotation.pdf`);
// };

// export default generatePDF;


import jsPDF from "jspdf";
import "jspdf-autotable";
import imgData1 from "./image";

const generatePDF = (recipientDetails, items) => {
  const doc = new jsPDF();

  // Company Logo & Details
  doc.addImage(imgData1, "JPEG", 10, 10, 40, 40);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("XYZ Company", 55, 20);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("123 Business Street, Hubballi, India", 55, 28);
  doc.text("GSTIN: 12ABCDE3456F", 55, 36);
  doc.line(10, 50, 200, 50); // Separator

  // Quotation Title & Date
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("QUOTATION", 85, 60);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Date: ${recipientDetails.date}`, 150, 60);

  // Recipient Details
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("To:", 10, 72);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Company Name: ${recipientDetails.name}`, 10, 80);
  doc.text(`Address: ${recipientDetails.address}`, 10, 85);
  doc.text(`GSTIN: ${recipientDetails.gstin}`, 10, 90);
  doc.text(`Phone: ${recipientDetails.phone}`, 10, 95);
  doc.line(10, 100, 200, 100); // Separator

  // Table Headers
  const tableColumn = ["Item Name", "Description", "HSN Code", `Rate (Rs)`, "Quantity", "GST %", "Total (Rs)"];
  const tableRows = [];
  let grandTotal = 0;

  // Table Data
  items.forEach((item) => {
    const total = (item.rate * item.quantity) + (item.rate * item.quantity * (item.gst / 100));
    grandTotal += total;
    const rowData = [item.name, item.description, item.hsn, item.rate, item.quantity, item.gst, total.toFixed(2)];
    tableRows.push(rowData);
  });

  // Add Table
  doc.autoTable({
    startY: 110,
    head: [tableColumn],
    body: tableRows,
    theme: "striped",
    styles: { halign: "center", fontSize: 10, textColor: [0, 0, 0] },
    headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
    columnStyles: { 6: { halign: "right" } },
  });

  // Grand Total
  const finalY = doc.autoTable.previous.finalY + 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Grand Total:", 130, finalY);
  doc.text(`Rs. ${grandTotal.toFixed(2)}`, 190, finalY, { align: "right" });

  // Terms and Conditions
  const termsY = finalY + 20;
  // doc.setFontSize(12);
  // doc.setFont("helvetica", "bold");
  // doc.text("Terms and Conditions:", 10, termsY);
  // doc.setFontSize(10);
  // doc.setFont("helvetica", "normal");
  // doc.text("1. Payment should be made within 30 days.", 10, termsY + 10);
  // doc.text("2. Goods once sold will not be taken back.", 10, termsY + 20);
  doc.line(10, termsY + 30, 200, termsY + 30);

  // Signature Section
  const signatureY = termsY + 40;
  doc.setFontSize(12);
  doc.text("Authorized Signatory", 150, signatureY);
  doc.text("(XYZ Company)", 150, signatureY + 10);
  doc.text("______________________", 150, signatureY + 20);
  doc.text("Signature & Seal", 150, signatureY + 30);

  // Save the PDF
  doc.save(`${recipientDetails.name}_Quotation.pdf`);
};

export default generatePDF;