import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile"

//top level component
//manage all routes
function App() {
  return (
    <div className="App">
      <header>
        Fitly
      </header>
      <Routes>
        <Route path="/" element={<Home title="Welcome to Fitly" />} />
        <Route path="/profile" element={<Profile title="This is the profile page!" />} />
      </Routes>
    </div>
  );
}

export default App;
//path to match
//element : what to render 
//pass props in element tag, destructure in file and use 