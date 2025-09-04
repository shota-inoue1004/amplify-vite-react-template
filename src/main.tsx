import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import config from "../amplify_outputs.json";
// import { signInWithRedirect } from "aws-amplify/auth" // コメントアウト
import AuthWithSAML from "./components/AuthWithSAML.tsx"; // 追記
import { Authenticator } from '@aws-amplify/ui-react'; // 追記


Amplify.configure({
  ...(config as any),
  Storage: {
    AWSS3: {
      bucket: config.storage.bucket_name,
      region: config.storage.aws_region
    },
    defaultAccessLevel: "protected"
  }
});


// signInWithRedirect({ // コメントアウト
//   provider: { custom: "MicrosoftEntraIDSAML" }  // コメントアウト
// })  // コメントアウト
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <AuthWithSAML> 
        <App />
      </AuthWithSAML> 
    </Authenticator.Provider> 
  </React.StrictMode>
);