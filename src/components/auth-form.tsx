import { Card, Typography } from "@material-tailwind/react";
import InputField from "./input";
import icon from "../assets/icons/logo/study_corner_icon_64.svg";
import { useState } from "react";
import Button from "./button";

export type FormField = {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
};

type AuthFormProps = {
  title: string;
  subtitle: string;
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
};

const AuthForm = ({ title, subtitle, fields, onSubmit }: AuthFormProps) => {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Card color="transparent" shadow={false} className="auth-form-wrapper">
      <img className="logo-icon" src={icon} />
      <Typography variant="h4" className="form-title">
        {title}
      </Typography>
      <Typography color="gray" className="form-subtitle">
        {subtitle}
      </Typography>
      <form onSubmit={handleSubmit} className="form">
        {fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={values[field.name] || ""}
            onChange={handleChange}
          />
        ))}
        <Button type="submit" className="sbt-btn">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default AuthForm;
