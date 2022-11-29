import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


export default function Nav({ title }) {
  return (
    <div className="navigation">
       <nav>
        <Link className="link" to="/profile">profile</Link>
        <Link className="link" to="/signup">sign up</Link>
        <Link className="link" to="/signin">sign in</Link>
        <Link className="link" to="/calculate">calculate</Link>
      </nav>
    </div>
   
  )
}