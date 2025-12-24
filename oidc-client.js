import { UserManager, WebStorageStateStore } from "oidc-client";

const userManagerConfig = {
  authority: "http://localhost:9000/application/o/test-app/",
  client_id: "kmqKIxZLUmaKKe99nvhauRpvfDw3tMUJJZOKLrHk",
  redirect_uri: "https://localhost:3000/signin-callback",
  response_type: "code",
  scope: "openid profile email offline_access",
  post_logout_redirect_uri: "https://localhost:3000",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

const userManager = new UserManager(userManagerConfig);

export default userManager;
