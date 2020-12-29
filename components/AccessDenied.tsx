import { signIn } from "next-auth/client";
import PublicLayout from "./PublicLayout";

//TODO we should redirect users to login page automatically
const AccessDenied = () => {
  return (
    <PublicLayout>
      <>
        <h1>Access Denied</h1>
        <p>
          <a
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            You must be signed in to view this page
          </a>
        </p>
      </>
    </PublicLayout>
  );
};

export default AccessDenied;
