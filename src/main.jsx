// Import React's StrictMode for additional development checks
import { StrictMode } from "react";
// Import createRoot for React 18's concurrent rendering features
import { createRoot } from "react-dom/client";
// Import global styles
import "./index.css";
import App from "./App"

// Create a root for our React application and render it
// Using createRoot (React 18+) instead of legacy ReactDOM.render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
