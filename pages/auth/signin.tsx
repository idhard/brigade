import { providers, signIn, csrfToken } from "next-auth/client";
import PublicLayout from "../../components/PublicLayout";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-unfetch";
type Props = {
  //TODO check types in https://github.com/nextauthjs
  providers: [any];
  csrfToken: string;
};

const SignIn = ({ providers, csrfToken }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    fetch("/api/auth/signin/email", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      <h2>Or</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken}  ref={register} />
        <label>
          Email address
          <input type="text" id="email" name="email" ref={register} />
        </label>
        <button type="submit">Sign in with Email</button>
      </form>
    </>
  );
};

SignIn.getInitialProps = async (context) => {
  return {
    //@ts-ignore
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};

SignIn.Layout = PublicLayout;

export default SignIn;
