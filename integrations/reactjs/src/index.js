import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-kit/styles/css/main.css";
import "@gooddata/sdk-ui-ext/styles/css/main.css";
import tigerFactory, {
  TigerTokenAuthProvider,
} from "@gooddata/sdk-backend-tiger";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";

const root = ReactDOM.createRoot(document.getElementById("root"));

const backend = tigerFactory()
  .onHostname( process.env.REACT_APP_GD_HOSTNAME )
  .withAuthentication(
    new TigerTokenAuthProvider( process.env.REACT_APP_GD_API_TOKEN )
  );

root.render(
  <React.StrictMode>
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace= { process.env.REACT_APP_GD_WORKSPACE_ID } >
        <App />
      </WorkspaceProvider>
    </BackendProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
