import React from "react";
import { Outlet } from "react-router-dom";

export default function Profile({ title }) {
  return (
    <div>
      <header>
      </header>
      <h1>{title}</h1>
      <Outlet />
    </div>
  )
}