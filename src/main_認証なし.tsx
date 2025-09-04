import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
// import { signInWithRedirect } from "aws-amplify/auth" // コメントアウト
//import AuthWithSAML from "./components/AuthWithSAML.tsx"; // 追記
//import { Authenticator } from '@aws-amplify/ui-react'; // 追記
Amplify.configure(outputs);
// signInWithRedirect({ // コメントアウト
//   provider: { custom: "MicrosoftEntraIDSAML" }  // コメントアウト
// })  // コメントアウト


export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
        <StorageBrowser/>
  </React.StrictMode>
);