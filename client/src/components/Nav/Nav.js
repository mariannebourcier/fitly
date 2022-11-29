import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


export default function Nav({ title }) {
  return (
    <div className="navigation">
       <nav>
        <Link className="link" to="/profile">Profile</Link>
        <Link className="link" to="/signup">Sign Up</Link>
        <Link className="link" to="/signin">Sign In</Link>
        <Link className="link" to="/calculate">Calculate</Link>
      </nav>
    </div>
   
  )
}