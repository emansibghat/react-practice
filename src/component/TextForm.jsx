import React, { useState } from 'react';

export default function TextForm(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [text, setText] = useState("enter new text here");

  const handleUpClick = () => {
    console.log("upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("onChange")
    setText(event.target.value)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const darkModeStyle = {
    color: isDarkMode ? 'white' : 'black',
    backgroundColor: isDarkMode ? 'black' : 'white',
  }

  return (
    <div className='container' style={darkModeStyle}>
      <h1>{props.heading}</h1>
      
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">write a text to analyze</label>
        <textarea 
          className="form-control" 
          id="myBox" 
          value={text}
          onChange={handleOnChange} 
          rows="3"
          style={darkModeStyle}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
      <button className='btn btn-secondary' onClick={toggleDarkMode}>
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </div>
  );
}