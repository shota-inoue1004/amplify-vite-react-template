"use client";

import { Amplify } from "aws-amplify";
import { 
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react-storage/styles.css";
import outputs from "../amplify_outputs.json";
import AuthWithSAML from "./components/AuthWithSAML.tsx";

Amplify.configure(outputs);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

export default function App() {
  return (
    <Authenticator.Provider>
      <AuthWithSAML> 
        <App />
      </AuthWithSAML> 
    </Authenticator.Provider> 
  );
}