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
    <Card color="transparent" shadow={false}>
      <img src={icon} />
      <Typography variant="h4" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {subtitle}
      </Typography>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AuthForm;
