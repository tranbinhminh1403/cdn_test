import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function mountChatbot(container: HTMLElement) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

// Mount normally if 'root' exists (direct visit)
const rootEl = document.getElementById("root");
if (rootEl) {
  mountChatbot(rootEl);
}

// Expose as global widget
(window as any).ChatBotWidget = {
  init: ({ containerId = "chatbot-container" } = {}) => {
    const container = document.getElementById(containerId);
    if (container) {
      mountChatbot(container);
    } else {
      console.error(`Chatbot container with ID "${containerId}" not found.`);
    }
  },
};
