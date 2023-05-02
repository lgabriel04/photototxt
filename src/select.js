import './App.css';
import React, { useRef, useState } from "react";
import ImageDisplay from "./display.js";
import Tesseract from 'tesseract.js';

function Select() {
    const fileInputRef = useRef(null);
    const [convertedText, setConvertedText] = useState("");
    const [showSelectFileMessage, setShowSelectFileMessage] = useState(false);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileSelect = (e) => {
      const file = e.target.files[0];
      // Do something with the selected file, e.g. upload it
    };
  
    const handleConvertClick = () => {
      const file = fileInputRef.current.files[0];
      
      if (!file) {
        setShowSelectFileMessage(true);
        setTimeout(() => setShowSelectFileMessage(false), 2000);
        return;
      }

      const reader = new FileReader();
  
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
  
        img.onload = () => {
          Tesseract.recognize(img)
            .then(({ data: { text } }) => {
              setConvertedText(text);
            });
        };
      };
  
      reader.readAsDataURL(file);
    };
  
    return (
      <div>
        <button onClick={handleButtonClick} className="select-btn">Select image</button>
        <button onClick={handleConvertClick} className="convert-btn">Convert to text</button>
        {showSelectFileMessage && <div className="file-select-message">Please select a file first</div>}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
        <ImageDisplay convertedText={convertedText} />
      </div>
    );
  }
  
export default Select;
