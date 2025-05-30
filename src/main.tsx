import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function mount(container: HTMLElement) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// 1. Standalone usage (for iframe or direct visit)
const root = document.getElementById("root");
if (root) {
  mount(root);
}

// 2. Script-injected widget
(window as any).ChatBotWidget = {
  init: ({ containerId = "chatbot-container" } = {}) => {
    const container = document.getElementById(containerId);
    if (container) {
      mount(container);
    } else {
      console.error(`Chatbot container with id '${containerId}' not found.`);
    }
  },
};
