import { Amplify } from "aws-amplify";
import outputs from '../amplify_outputs.json';
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
  ...outputs,
  storage:{
    aws_region:"ap-northeast-1",
    bucket_name: "amplify-d33vivr5ze9irj-ma-myprojectfilesbucket89ac-rvwlvsseazta",
    buckets: [
      {
        name: "amplify-d33vivr5ze9irj-ma-myprojectfilesbucket89ac-rvwlvsseazta",
        bucket_name: "amplify-d33vivr5ze9irj-ma-myprojectfilesbucket89ac-rvwlvsseazta",
        aws_region: "ap-northeast-1",
        paths: {
          "public/*": {
            "guest": [
              "get",
              "list"
            ],
            "authenticated": [
              "get",
              "list",
              "write",
              "delete"
            ]
          },
        }
      }
    ]
  }
});

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

