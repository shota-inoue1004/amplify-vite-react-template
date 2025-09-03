import { Amplify } from "aws-amplify";
import config from '../amplify_outputs.json';
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import { useAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(config);

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

