import AuthForm from "../components/auth-form";
import type { FormField } from "../components/auth-form";

const registerFields: FormField[] = [
  { label: "First Name", name: "firstName" },
  { label: "Last Name", name: "lastName" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];

const SignUpPage = () => {
  return (
    <div className="bg-blue-500">
      <AuthForm
        title="Create your account"
        subtitle="Sign up to start organazing your study notes"
        fields={registerFields}
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};

export default SignUpPage;
