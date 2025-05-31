import "./App.css";
// src/App.jsx
import React from "react";

function App({ message = "Hello World" }) {
  return <div>{message}</div>;
}

export default App;
