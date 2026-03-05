import React, { useState } from "react";
import InputField from "./input";
import Button from "./button";

type AuthFormProps = {
  title: string;
  subtitle: string;
};

type AuthFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const AuthForm = ({ title, subtitle }: AuthFormProps) => {
  const [authFormData, setAuthFormData] = useState<AuthFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      {title}
      {subtitle}
      <InputField
        label="First Name"
        name="firstName"
        type="string"
        value={authFormData.firstName}
        onChange={handleChange}
      />
      <InputField
        label="Last Name"
        name="lastName"
        type="string"
        value={authFormData.lastName}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={authFormData.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        value={authFormData.password}
        onChange={handleChange}
      />

      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default AuthForm;
