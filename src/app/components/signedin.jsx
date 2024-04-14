import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function SignedIn() {
  const { isAuthenticated } = getKindeServerSession();

  return (await isAuthenticated()) ? (
    <div>
      <p>Yay! Signed in.</p>
      <LogoutLink><b>Log out</b></LogoutLink>
    </div>
  ) : (
    <div>
      <p>
      This page is protected, please <LoginLink><b>Login</b></LoginLink> to view it.
      </p>
      <p>
      If you don&apos;t have an account, you can <RegisterLink><b>Sign Up</b></RegisterLink>.
      </p>
    </div>
  );
}