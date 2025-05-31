// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Expose a global function to render the app
(window as any).renderMyReactApp = (containerId: string, props = {}) => {
  const container = document.getElementById(containerId);
  if (container) {
    ReactDOM.createRoot(container).render(<App {...props} />);
  } else {
    console.error(`Container with ID ${containerId} not found.`);
  }
};

// Optional: Auto-render if a specific container exists
if (document.getElementById("my-react-app")) {
  (window as any).renderMyReactApp("my-react-app");
}
