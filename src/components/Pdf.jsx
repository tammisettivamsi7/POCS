import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "../assests/style/Pdf.css";
import { Link } from "react-router-dom";

export default function Pdf() {
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.text.value;
    const jspdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a3",
    });
    const margin = { top: 80, right: 40, bottom: 40, left: 40 };

    const pageSize = jspdf.internal.pageSize;
    const pageWidth = pageSize.getWidth();
    const contentWidth = pageWidth - margin.left - margin.right;
    jspdf.text(val, margin.left, margin.top, {
      align: "justify",
      maxWidth: contentWidth,
    });
    jspdf.save("test.pdf");
  };

  const handleTextChange = (e) => {
    if (e.target.value.trim()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <div className="backButton">
        <Link to="/">
          <button className="backLink">Back</button>
        </Link>
      </div>
      <h1>PDF</h1>
      <form className="formArea" onSubmit={handleSubmit}>
        <textarea
          name="text"
          placeholder="enter the text..... "
          cols="60"
          rows="10"
          className="textArea"
          onChange={handleTextChange}
        ></textarea>
        <br />
        <button type="submit" className="btn" disabled={disabled}>
          Generate PDF
        </button>
      </form>
    </div>
  );
}
