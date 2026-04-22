import AuthForm from "../components/auth-form";
import type { FormField } from "../components/auth-form";
import HeaderNav from "../components/header-nav";
import { signInUser, clearAuthError } from "../features/auth/authSlice";
import { useAppDispatch } from "../hooks/redux";
import type { SignInPayload } from "../features/auth/types";

const loginFields: FormField<SignInPayload>[] = [
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

const SignInPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <HeaderNav />
      <div className="auth-page-wrapper">
        <AuthForm
          title="Welcome to Study Corner"
          subtitle="Please log in to continue"
          fields={loginFields}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              await dispatch(signInUser(values)).unwrap();
            } catch {
              dispatch(clearAuthError());
            }
          }}
        />
      </div>
    </>
  );
};

export default SignInPage;
