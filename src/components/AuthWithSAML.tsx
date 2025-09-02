import React, { useEffect, useState } from 'react';
import { Button, Text, Loader, useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { signInWithRedirect } from 'aws-amplify/auth';
import outputs from "../../amplify_outputs.json";
const cognitoUserPoolId: string = outputs.auth.user_pool_id;
const cognitoUserPoolCientId: string = outputs.auth.user_pool_client_id;
const cognitoIdentityPoolId: string = outputs.auth.identity_pool_id;
const samlCognitoDomainName: string = outputs.auth.oauth.domain;
const samlCognitoFederatedIdentityProviderName: string = "MicrosoftEntraIDSAML";
type Props = {
  children: React.ReactNode;
};
const AuthWithSAML: React.FC<Props> = (props) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // 認証状態の検証
    if (authStatus === 'configuring') {
      setLoading(true);
      setAuthenticated(false);
    } else if (authStatus === 'authenticated') {
      setLoading(false);
      setAuthenticated(true);
    } else {
      setLoading(false);
      setAuthenticated(false);
    }
  }, [authStatus]);
  const signIn = () => {
    signInWithRedirect({
      provider: {
        custom: samlCognitoFederatedIdentityProviderName,
      },
    });
  };
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: cognitoUserPoolId,
        userPoolClientId: cognitoUserPoolCientId,
        identityPoolId: cognitoIdentityPoolId,
        loginWith: {
          oauth: {
            domain: samlCognitoDomainName, // cdk.json の値を指定
            scopes: ['openid', 'email', 'profile'],
            // CloudFront で展開している Web ページを動的に取得
            redirectSignIn: [window.location.origin],
            redirectSignOut: [window.location.origin],
            responseType: 'code',
          },
        },
      },
    },
  });
  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 justify-items-center gap-4">
          <Text className="mt-12 text-center">Loading...</Text>
          <Loader width="5rem" height="5rem" />
        </div>
      ) : !authenticated ? (
        <div className="grid grid-cols-1 justify-items-center gap-4">
          <Text className="mt-12 text-center text-3xl">
            Todo App
          </Text>
          <Button
            variation="primary"
            onClick={() => signIn()}
            className="mt-6 w-60">
            ログイン
          </Button>
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};
export default AuthWithSAML;