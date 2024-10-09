import React from "react";
import { Link } from "react-router-dom";
import speechimg from "../assests/images/speech-to-text-apps.jpg";
import Chartsimg from "../assests/images/charts.jpg";
import Pdfimg from "../assests/images/pdf generator.jpg";
import Qrcodeimg from "../assests/images/qr-code.jpg";
import Signatureimg from "../assests/images/digital_signature.jpg";
import "../assests/style/MainComponent.css";
import DragandDropimg from "../assests/images/drag-and-drop.jpg";

export default function MainComponent() {
  return (
    <div className="mainComponent">
      <div className="cardContainer">
        <img src={speechimg} alt="Speech to Text Apps" />
        <h3>Speech to Text</h3>
        <Link to="/speech">
          <button>For More</button>
        </Link>
      </div>
      <div className="cardContainer">
        <img src={Qrcodeimg} alt="Qrcode" />
        <h3>QR Code Generator</h3>
        <Link to="/qrcode">
          <button>For More</button>
        </Link>
      </div>
      <div className="cardContainer">
        <img src={Signatureimg} alt="Signature" />
        <h3>Digital Signature</h3>
        <Link to="/signature">
          <button>For More</button>
        </Link>
      </div>
      <div className="cardContainer">
        <img src={Pdfimg} alt="pdf" />
        <h3>PDF Generator</h3>
        <Link to="/pdf">
          <button>For More</button>
        </Link>
      </div>
      <div className="cardContainer">
        <img src={Chartsimg} alt="charts" />
        <h3>Charts</h3>
        <Link to="/charts">
          <button>For More</button>
        </Link>
      </div>
      <div className="cardContainer">
        <img src={DragandDropimg} alt="invoice" />
        <h3>Drag and Drop</h3>
        <Link to="/draganddrop">
          <button>For More</button>
        </Link>
      </div>

      <div className="cardContainer">
        <img src={DragandDropimg} alt="invoice" />
        <h3>JSON DATA</h3>
        <Link to="/Task11">
          <button>For More</button>
        </Link>
      </div>
    </div>
  );
}
