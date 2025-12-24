// pages/index.js
"use client";
import { useEffect } from "react";
import { UserManager, WebStorageStateStore } from "oidc-client";
export default function Login() {
  useEffect(() => {
    async function handleLogin() {
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
      const user = await userManager.getUser();
      console.log(user);
      if (!user) {
        await userManager.signinRedirect();
      }
    }

    handleLogin();
  }, []);

  return (
    <div>
      <h1>Next.js OIDC Integration</h1>
      <p>Welcome to the authenticated section of your app!</p>
    </div>
  );
}
