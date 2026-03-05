import React from "react";

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
}: InputFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <input name={name} type={type} value={value} onChange={onChange} />

      {error && <div>{error}</div>}
    </div>
  );
};

export default InputField;
