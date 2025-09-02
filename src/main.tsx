import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import AuthWithSAML from "./components/AuthWithSAML.tsx";
import { Authenticator } from '@aws-amplify/ui-react';
import SignOut from "./components/SignOut.tsx"; // 追記
Amplify.configure(outputs);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider> 
      <AuthWithSAML> 
        <App />
        <SignOut /> 
      </AuthWithSAML> 
    </Authenticator.Provider>
  </React.StrictMode>
);
