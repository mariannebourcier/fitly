import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


export default function Nav({ title }) {
  return (
    <div className="navigation">
       <nav>
        <Link classname="link" to="/profile">Profile</Link>
        <Link classname="link" to="/signup">Sign Up</Link>
        <Link classname="link" to="/signin">Sign In</Link>
        <Link classname="link" to="/calculate">Calculate</Link>
      </nav>
    </div>
   
  )
}