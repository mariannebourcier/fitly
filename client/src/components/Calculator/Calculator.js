import React from "react";


export default function Calculator() {
  
  return (
    <div className="calculator-container">
      <form>
        <label>
          Height:
          <input />
        </label>
        <label>
          Weight:
          <input />
        </label>
        <label>
          Goal:
          <input />
        </label>
     
      </form>

      <button>Calculate</button>
    </div>
  )
}