import { Card, Typography } from "@material-tailwind/react";
import InputField from "./input";
import icon from "../assets/icons/logo/study_corner_icon_64.svg";
import { useState } from "react";
import Button from "./button";
import { useAppSelector } from "../hooks/redux";

export type FormField<T> = {
  label: string;
  name: keyof T;
  type?: React.HTMLInputTypeAttribute;
};

type AuthFormProps<T extends object> = {
  title: string;
  subtitle: string;
  fields: FormField<T>[];
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
};

const AuthForm = <T extends object>({
  title,
  subtitle,
  fields,
  initialValues,
  onSubmit,
}: AuthFormProps<T>) => {
  const { loading, error } = useAppSelector((state) => state.auth);

  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(values);
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
            key={String(field.name)}
            label={field.label}
            name={String(field.name)}
            type={field.type}
            value={String(values[field.name] ?? "")}
            onChange={handleChange}
          />
        ))}
        {error && <Typography color="red">{error}</Typography>}

        <Button type="submit" className="sbt-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Card>
  );
};

export default AuthForm;
