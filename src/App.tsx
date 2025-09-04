import { Amplify } from "aws-amplify";
import config from '../amplify_outputs.json';
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const amplifyConfig = {
  ...config,
  // Storage設定を config.storage に統合する
  storage: {
    ...config.storage,
    defaultAccessLevel: 'protected' // 認証済みユーザーに限定
  }
};

Amplify.configure(amplifyConfig);



export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

export default function App() {

  const { signOut } = useAuthenticator();

  return (
    <main>
      <button onClick={signOut}>Sign out</button>
      <StorageBrowser/>
    </main>
  );
}

