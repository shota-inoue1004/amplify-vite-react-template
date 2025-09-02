import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import { signInWithRedirect } from "aws-amplify/auth" // 追記
Amplify.configure(outputs);
signInWithRedirect({ // 追記
  provider: { custom: "MicrosoftEntraIDSAML" } // 追記
}) // 追記
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
