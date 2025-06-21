import { useState } from "react";

export default function FormText({ heading }) {
  const handleUpClick = () => {
        // Convert text to uppercase
        let newText = text.toUpperCase();
        console.log("Uppercase was clicked")
        setText(newText);
      }
      const handleLoClick = () => {
        // Convert text to lowercase
        let newText = text.toLowerCase();
        console.log("Lowercase was clicked")
        setText(newText);
      }
      const handleOnChange = () => {
        // Convert text to uppercase
        console.log(" handle on change was clicked")
        setText(event.target.value)
      }
      const [text, setText] = useState( " Enter your text here ");
  return (
    <>
    <div>
      

      <div className="mb-3">
        <h2>{heading}</h2>

        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button
        className="btn btn-primary mx-2"
        onClick={(handleUpClick)}
      >
        Convert to Uppercase{" "}
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={(handleLoClick)}
      >
        Convert to Lowercase{" "}
        
      </button>
      
      
    </div>
    <div className="container my-3">
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes Read</p>
    </div>
    <div className="container my-3">
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
