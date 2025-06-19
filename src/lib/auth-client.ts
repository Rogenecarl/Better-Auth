import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
});

export const {signIn, signUp, signOut} = authClient;
