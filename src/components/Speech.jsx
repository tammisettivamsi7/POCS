import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "../assests/style/Speech.css";
import { Link } from "react-router-dom";

const Speech = () => {
  const [textcopy, setTextCopy] = useState(false);
  const [saved, setSaved] = useState([]);
  const [language, setLanguage] = useState("en-IN");
  const [isListening, setIsListening] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const sayThankYou = () => {
    const utterance = new SpeechSynthesisUtterance("Thank you Boss.");
    speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: language });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    sayThankYou();
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(transcript);
    setTextCopy(true);
    setTimeout(() => setTextCopy(false), 5000);
  };

  const save = () => {
    setSaved([...saved, transcript]);
  };

  const deleteItem = (index) => {
    const newSaved = [...saved];
    newSaved.splice(index, 1);
    setSaved(newSaved);
  };
  return (
    <div className="speechContainer">
      <div className="backButton">
        <Link to="/">
          <button className="backLink">Back</button>
        </Link>
      </div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en-IN">English</option>
        <option value="hi-IN">Hindi</option>
        <option value="te-IN">Telugu</option>
        <option value="ta-IN">Tamil</option>
        <option value="kn-IN">Kannada</option>
      </select>
      <h1>SPEECH TO TEXT CONVERTER</h1>
      <div className="main-container">
        <div className="text" onClick={() => setTextCopy(transcript)}>
          {transcript}
        </div>
        <div className="container">
          <button
            onClick={startListening}
            className="btn-primary"
            disabled={isListening}
          >
            Start Listening!!
          </button>
          <button
            onClick={stopListening}
            className="btn-primary"
            disabled={!isListening}
          >
            Stop Listening!!
          </button>
          <button
            onClick={resetTranscript}
            className="btn-primary"
            disabled={isListening || !transcript}
          >
            Reset
          </button>
          <button
            onClick={copyClipboard}
            className="btn-primary"
            disabled={isListening || !transcript}
          >
            {textcopy ? "copied" : "copy to clipboard"}
          </button>
          <button
            onClick={save}
            className="btn-primary"
            disabled={isListening || !transcript}
          >
            Save
          </button>
        </div>
      </div>
      {saved.length > 0 && (
        <div className="saved">
          {saved.map((item, index) => (
            <div className="savedText" key={index}>
              {item}
              <div className="btn-secondary" onClick={() => deleteItem(index)}>
                delete
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Speech;
