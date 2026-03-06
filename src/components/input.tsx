import React from "react";

type InputFieldProps = {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}: InputFieldProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />

      {error && <div>{error}</div>}
    </div>
  );
};

export default InputField;
