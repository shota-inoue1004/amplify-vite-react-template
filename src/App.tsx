
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
//import { Amplify } from "aws-amplify";
import { useAuthenticator } from '@aws-amplify/ui-react';
//import config from '../amplify_outputs.json';

//Amplify.configure(config);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {

  const { signOut } = useAuthenticator();

  return (
    <main>
      <button onClick={signOut}>Sign out</button>
      <StorageBrowser/>
    </main>
  );
}

export default App;

