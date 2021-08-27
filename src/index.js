import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HMSRoomProvider, HMSThemeProvider } from "@100mslive/hms-video-react";
import App from "./App";

const rootElement = document.getElementById("root");

// wrapping the entire app with HMSRoomProvider and HMSThemeProvider

ReactDOM.render(
  <HMSRoomProvider>
    <HMSThemeProvider
      appBuilder={{ theme: "dark" }}
    >
      <App />
    </HMSThemeProvider>
  </HMSRoomProvider>,
  rootElement
);