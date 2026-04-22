import AuthForm from "../components/auth-form";
import type { FormField } from "../components/auth-form";
import HeaderNav from "../components/header-nav";
import { signUpUser, clearAuthError } from "../features/auth/authSlice";
import { useAppDispatch } from "../hooks/redux";
import type { SignUpPayload } from "../features/auth/types";

const registerFields: FormField<SignUpPayload>[] = [
  { label: "First Name", name: "firstName" },
  { label: "Last Name", name: "lastName" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

const SignUpPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <HeaderNav />
      <div className="auth-page-wrapper">
        <AuthForm
          title="Create your account"
          subtitle="Sign up to start organazing your study notes"
          fields={registerFields}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            try {
              await dispatch(signUpUser(values)).unwrap();
            } catch {
              dispatch(clearAuthError());
            }
          }}
        />
      </div>
    </>
  );
};

export default SignUpPage;
