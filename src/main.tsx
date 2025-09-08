import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { 
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";
import outputs from "../amplify_outputs.json";
// import { signInWithRedirect } from "aws-amplify/auth" // コメントアウト
import AuthWithSAML from "./components/AuthWithSAML.tsx"; // 追記
import { Authenticator } from '@aws-amplify/ui-react'; // 追記
Amplify.configure(outputs);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <AuthWithSAML> 
      <StorageBrowser/>
      </AuthWithSAML> 
    </Authenticator.Provider> 
  </React.StrictMode>
);