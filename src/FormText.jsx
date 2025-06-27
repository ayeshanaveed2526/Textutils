import { useState } from "react";

export default function FormText({ heading,mode}) {
  const [isItalic, setIsItalic] = useState(false);
  const [text, setText] = useState(" Enter your text here ");
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleUpClick = () => {
    // Convert text to uppercase
    let newText = text.toUpperCase();
    console.log("Uppercase was clicked");
    setText(newText);
  };
  const handleLoClick = () => {
    // Convert text to lowercase
    let newText = text.toLowerCase();
    console.log("Lowercase was clicked");
    setText(newText);
  };
 
  const handleClearClick = () => {
    console.log("Text is cleared");
    setText("");
  };
  const handleItalicClick = () => {
    setIsItalic(!isItalic);
    console.log("text is converted to italic font");
    // setText(newText);
  };
  const handleBoldClick = () => {
    // Convert text to bold
    setIsBold(!isBold);
    console.log("text is converted to bold font");
    // setText(newText);
  };
  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
    console.log("text is converted to underline font");
  };
  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    console.log("Extra spaces were removed");
    setText(newText);
  }
  const handleCopyClick = () => {
  navigator.clipboard.writeText(text);
  setCopied(true);
      
    console.log("Text copied to clipboard");
 
  setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
};
   const handleOnChange = () => {
    // Convert text to uppercase
    console.log(" handle on change was clicked");
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <div className="mb-3 " style={{ color: mode === 'dark' ? 'white' : 'black'}}>
          <h2>{heading}</h2>

          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            
            onChange={handleOnChange}
            style={{
              fontStyle: isItalic ? "italic" : "normal",
              fontWeight: isBold ? "bold" : "normal",
              textDecoration: isUnderline ? "underline" : "normal",
              backgroundColor: mode === 'dark' ? 'grey' : 'light',
              color: mode=== 'light' ? 'black' : 'white', 
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase{" "}
        </button>
       
        <button className="btn btn-primary mx-2" onClick={handleItalicClick}>
          Convert to italics{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleBoldClick}>
          Bold Text{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUnderlineClick}>
          Underline text{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>
          Remove Extra Spaces{" "}
        </button>
         <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text{" "}
        </button>
        
        <button className="btn btn-success mx-2" onClick={handleCopyClick}> Copy
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
</svg>
      
        </button>
        {copied && (
  <div className="alert alert-info mt-2" role="alert">
    Text copied to clipboard!
  </div>
)}
      </div>
      <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black'}} >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
      <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black'}}>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p style={{ fontStyle: isItalic ? "italic" : "normal", fontWeight: isBold ? "bold" : "normal" , fontWeight: isBold ? "bold" : "normal" }}> {text.length>0?text:"Enter Text to textbox to preview it"}</p>
       
        
      </div>
    </>
  );
}
