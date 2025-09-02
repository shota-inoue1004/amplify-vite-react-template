import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
     externalProviders: { 
        saml: { // 追記
        name: "MicrosoftEntraIDSAML", // 追記
        metadata: { // 追記
        metadataType: "URL", // 追記
        metadataContent: "https://login.microsoftonline.com/eb7ac5e7-8095-4a7f-b340-b225f9751e72/federationmetadata/2007-06/federationmetadata.xml?appid=d1412b64-1daf-4866-a466-7640ee7ca3eb", // 追記
        }, // 追記
        attributeMapping: { // 追記
          email: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress", // 追記
        }, // 追記
      }, // 追記
      logoutUrls: ["https://main.d33vivr5ze9irj.amplifyapp.com"],
      callbackUrls:["https://main.d33vivr5ze9irj.amplifyapp.com"],
    },
  },
});
