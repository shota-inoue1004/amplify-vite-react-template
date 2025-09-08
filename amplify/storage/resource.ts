import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myProjectFiles',
  access: (allow) => ({
    "authenticated/*": [
      allow.authenticated.to(['read', 'write', 'delete'])
    ]
  })
});