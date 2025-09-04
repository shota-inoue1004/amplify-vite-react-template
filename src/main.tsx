import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import config from "../amplify_outputs.json";
// import { signInWithRedirect } from "aws-amplify/auth" // コメントアウト
import AuthWithSAML from "./components/AuthWithSAML.tsx"; // 追記
import { Authenticator } from '@aws-amplify/ui-react'; // 追記


// Storage設定を config.storage に統合する（型安全）
const amplifyConfig = {
  ...config,
  storage: {
    ...config.storage,
    defaultAccessLevel: 'protected' // 認証済みユーザーに限定
  }
};

Amplify.configure(amplifyConfig);


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