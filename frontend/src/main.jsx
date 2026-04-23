import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContextProvider.jsx";
import { ProjectContextProvider } from "./context/ProjectContextProvider.jsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme/theme.js";
import "./styles/fonts.css"
import './styles/global.css';

// Import Mantine CSS (REQUIRED!)
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
    {/* MantineProvider wraps everything - applies your theme */}
    <MantineProvider theme={theme}  defaultColorScheme="auto">
      {/* Notifications for success/error messages */}
      <Notifications position="top-right" />

      {/* Your app */}
      <UserContextProvider>
        <ProjectContextProvider>
          <App />
        </ProjectContextProvider>
      </UserContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
