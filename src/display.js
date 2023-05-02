import React, { useState } from "react";
import './App.css';

function ImageDisplay(props) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(props.convertedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="image-display">
      <textarea className="image-text" value={props.convertedText} readOnly />
      <button onClick={handleCopyClick} className="copy-btn">{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
}

export default ImageDisplay;
