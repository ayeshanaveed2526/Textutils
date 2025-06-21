
import "./App.css";
import Navbar from "./Navbar";
import  FormText from "./FormText";


function App() {
  return (
    <>
 <Navbar/>
 <div className="container my-3">
  <FormText heading="Enter the text to analyze below" />
 </div>

    </>
  );
}

export default App;
