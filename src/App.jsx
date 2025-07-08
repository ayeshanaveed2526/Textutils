import "./App.css";
import Navbar from "./Navbar";
import FormText from "./FormText";
import About from "./About";
import React, { useState } from "react";
import Alert from "./Alert";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleBtn = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#343a40';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleBtn={toggleBtn} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route 
              path="/" 
              element={
                <FormText 
                  heading="Enter the text to analyze below" 
                  mode={mode} 
                  toggleBtn={toggleBtn}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<About mode={mode} />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;