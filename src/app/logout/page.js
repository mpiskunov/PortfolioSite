// pages/logout.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { UserManager, WebStorageStateStore } from "oidc-client";
export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    async function handleLogout() {
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
      await userManager.signoutRedirect();
    }

    handleLogout();
  }, []);

  return <p>Logging out...</p>;
}
