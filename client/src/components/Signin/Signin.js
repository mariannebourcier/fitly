import React from "react";
import './Signin.css';

export default function Signin() {
  return (
    <div className="signin-form-container">
      <form>
        <label>
          Email:
          <input/>
        </label>
        <label>
          Password:
          <input />
        </label>
      </form>
     
     <button>Confirm</button>
    </div>
  )
}