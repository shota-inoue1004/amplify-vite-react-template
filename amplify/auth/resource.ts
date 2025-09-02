import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
     externalProviders: { 
      logoutUrls: ["https://main.d33vivr5ze9irj.amplifyapp.com"],
      callbackUrls:["https://main.d33vivr5ze9irj.amplifyapp.com"],
    },
  },
});
