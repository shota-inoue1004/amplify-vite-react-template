import { useAuthenticator, Button } from '@aws-amplify/ui-react';
import { useCallback } from 'react';
import { useSWRConfig } from 'swr';
const SignOut = () => {
  const { cache } = useSWRConfig();
  const { signOut } = useAuthenticator();
  const onClickSignout = useCallback(() => {
    // SWRのキャッシュを全て削除する
    for (const key of cache.keys()) {
      cache.delete(key);
    }
    signOut();
  }, [cache, signOut]);
  return (
    <div>
      <div className="my-10 flex w-full justify-center">
        <Button onClick={onClickSignout} className="text-lg">
          サインアウト
        </Button>
      </div>
    </div>
  );
};
export default SignOut;