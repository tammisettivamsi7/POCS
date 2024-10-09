import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speech from "./components/Speech";
import QrCode from "./components/QrCode";
import Signature from "./components/Signature";
import Pdf from "./components/Pdf";
import Charts from "./components/Charts";
import MainComponent from "./components/MainComponent";
import DragAndDrop from "./components/DragAndDrop";
import Task11 from "./components/Task11";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/speech" element={<Speech />} />
          <Route path="/qrcode" element={<QrCode />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/draganddrop" element={<DragAndDrop />} />
          <Route path="/task11" element={<Task11/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
