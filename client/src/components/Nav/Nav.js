import { Link } from "react-router-dom";
import "./Nav.css";
import Header from "../Header/Header";


export default function Nav({ title }) {
  return (
    <div className="navigation">
      <div className="nav-container">
        <Link className="logo-link-container" to='/'>
          🐷
        </Link>
        <Link className="link" to="/profile">profile</Link>
        <Link className="link" to="/signup">sign up</Link>
        <Link className="link" to="/signin">sign in</Link>
        <Link className="link" to="/calculate">calculate</Link>
      </div>

      <Header />
    </div>
  )
}