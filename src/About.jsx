import React from "react";
import { Link } from "react-router-dom";

export default function About({ mode }) {
  return (
    <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
      <h2>About us</h2>
      
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{ background: mode === 'dark' ? '#343a40' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: mode === 'dark' ? 'white' : 'black', background: mode === 'dark' ? '#343a40' : 'white' }}>
              <strong>TextUtils is a text manipulation tool.</strong> It provides various features to analyze and modify your text including converting to uppercase, lowercase, removing extra spaces, and more. You can also copy text to clipboard and see real-time preview of your changes.
              <br />
              <Link to="/" className="btn btn-primary mt-2">Go to Home</Link>
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ background: mode === 'dark' ? '#343a40' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ background: mode === 'dark' ? '#343a40' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
              <strong>Our features include:</strong>
              <ul>
                <li>Convert text to uppercase</li>
                <li>Convert text to lowercase</li>
                <li>Remove extra spaces</li>
                <li>Copy text to clipboard</li>
                <li>Text formatting (bold, italic, underline)</li>
                <li>Word and character count</li>
                <li>Reading time estimation</li>
              </ul>
              <Link to="/" className="btn btn-success mt-2">Try Now</Link>
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ background: mode === 'dark' ? '#343a40' : 'white', color: mode === 'dark' ? 'white' : 'black' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Dark Mode Support
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ background: mode === 'dark' ? '#343a40' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
              <strong>We support both light and dark themes.</strong> You can toggle between light and dark mode using the switch in the navigation bar. The dark mode provides a comfortable viewing experience in low-light conditions.
              <br />
              <Link to="/" className="btn btn-info mt-2">Back to TextUtils</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}