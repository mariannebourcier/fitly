import React from "react";
import './Signup.css';

export default function Signup({ title }) {
  

  return (
    <div className="signup-form-container">
    <form>
      <label>
        Name:
        <input type="text"/>
      </label>
      <label>
        Date of birth:
        <input type="text"/>
      </label> 
      <label>
        Gender:
        <input type="text"/>
      </label> 
      <label>
        Email:
        <input type="text"/>
      </label> 
      <label>
        Password:
        <input type="text"/>
      </label>
    </form>
    
   <button>Confirm</button>
    </div>
  )
}