import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

//top level component
//manage all routes
function App() {
  return (
    <div className="App">
     <header>
       Fitly
     </header>
     <Routes> 
       <Route path="/" element={<Home />} />

     </Routes>
    </div>
  );
}

export default App;
//path to match
//element : what to render 