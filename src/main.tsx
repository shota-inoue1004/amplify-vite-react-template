import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { signInWithRedirect } from "aws-amplify/auth" // 追記
Amplify.configure(outputs);
signInWithRedirect({ // 追記
  provider: { custom: "MicrosoftEntraIDSAML" } // 追記
}) // 追記
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);