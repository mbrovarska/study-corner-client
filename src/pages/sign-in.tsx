import AuthForm from "../components/auth-form";
import type { FormField } from "../components/auth-form";

const loginFields: FormField[] = [
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

const SignUpPage = () => {
  return (
    <div className="auth-page-wrapper">
      <AuthForm
        title="Welcome to Study Corner"
        subtitle="Please log in to continue"
        fields={loginFields}
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};

export default SignUpPage;
