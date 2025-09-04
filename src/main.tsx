import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Amplify } from "aws-amplify";
import { 
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";
import outputs from "../amplify_outputs.json";
import AuthWithSAML from "./components/AuthWithSAML.tsx"; // 追記
import { Authenticator } from '@aws-amplify/ui-react'; // 追記
//import { useAuthenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
Amplify.configure(outputs);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

  //const { signOut } = useAuthenticator();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <AuthWithSAML> 
      <App />
      </AuthWithSAML> 
    </Authenticator.Provider> 
  </React.StrictMode>
);