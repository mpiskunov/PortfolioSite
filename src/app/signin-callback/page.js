// pages/signin-callback.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { UserManager, WebStorageStateStore } from "oidc-client";

export default function SigninCallback() {
  const router = useRouter();

  useEffect(() => {
    async function handleCallback() {
      const userManagerConfig = {
        authority: "https://pisky.id/application/o/gaggle-app/",
        client_id: "e7ufCx1Vx7UbSBWHX6iqJWUIjUlQBTwGh6aJNo49",
        redirect_uri: "https://localhost:3000/signin-callback",
        response_type: "code",
        scope: "openid profile email offline_access",
        post_logout_redirect_uri: "https://localhost:3000",
        userStore: new WebStorageStateStore({ store: window.localStorage }),
      };

      const userManager = new UserManager(userManagerConfig);
      await userManager.signinRedirectCallback();
      router.push("/");
    }

    handleCallback();
  }, [router]);

  return <p>Redirecting...</p>;
}
