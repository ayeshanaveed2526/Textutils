
import "./App.css";
import Navbar from "./Navbar";
// import  FormText from "./FormText";
import About from "./About";
import React,{ useState} from "react";


function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'
  const toggleBtn = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='#343a40';
    } else {
      setMode('light');
      document.body.style.background='white';
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleBtn={toggleBtn} />
      {/* <div className="container my-3">
        <FormText heading="Enter the text to analyze below"  mode={mode} toggleBtn={toggleBtn}/>
      </div> */}
      <About mode={mode}/>
    </>
  );
}

export default App;
