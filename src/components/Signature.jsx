import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import "../assests/style/Signature.css";
import { Link } from "react-router-dom";

export default function Signature() {
  const [sign, setSign] = useState();
  const [image, setImage] = useState();
  const [penColor, setPenColor] = useState("black");
  const [disabled, setDisabled] = useState(true);

  const handleClear = () => {
    sign.clear();
    setDisabled(true);
  };
  const handleSave = () => {
    const img = sign.getTrimmedCanvas().toDataURL("image/png");
    console.log(img);
    setImage(img);
  };

  const handleDelete = () => {
    setImage(null);
  };

  const handleButton = () => {
    if (sign.isEmpty()) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <div>
      <div className="backButton">
        <Link to="/">
          <button className="backLink">Back</button>
        </Link>
      </div>
      <div className="signContainer">
        <select
          className="penSelection"
          value={penColor}
          onChange={(e) => setPenColor(e.target.value)}
        >
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>

        <SignatureCanvas
          penColor={penColor}
          canvasProps={{ width: 500, height: 300 }}
          ref={(data) => setSign(data)}
          onEnd={handleButton}
        />
        <div className="sub-Container">
          <button onClick={handleClear} disabled={disabled}>
            Clear
          </button>
          <button onClick={handleSave} disabled={disabled}>
            Save
          </button>
        </div>
      </div>
      {image && (
        <div>
          <img src={image} alt="signature" />
          <button className="deleteButton" onClick={handleDelete}>
            delete
          </button>
        </div>
      )}
    </div>
  );
}
