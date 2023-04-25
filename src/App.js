import { BrowserRouter } from "react-router-dom";
import './App.css';
import Aplication from "./assets/screens/Aplication.jsx"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Aplication />
      </BrowserRouter>
    </div>
  );
}

export default App;
