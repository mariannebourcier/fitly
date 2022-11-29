import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
//top level component
//manage all routes
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Fitly" />} />
        <Route path="profile" element={<Profile title="This is the profile page!" />} >
          <Route path="profileID" element={<h1>This is a nested route!</h1>} />
        </Route>
        <Route path="signup" element={<Signup title="This is the signup page!" />} />
        <Route path="signin" element={<Signin title="This is the signin page!" />} />
        <Route path="calculate" element={<h1>Calculate your macros</h1>} />
      </Routes>

      <footer>
        Thanks for visiting Fitly!
      </footer>
    </div>
  );
}

export default App;
//path to match
//element : what to render 
//pass props in element tag, destructure in file and use 
// can nest routes under each other in router
// Route path="profile"
//    Route path="profile/id" example
// Outlet component will render nested route content <Outlet/> in profile.js example
