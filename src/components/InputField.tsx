import React from "react";
import useInputValidation from "../hooks/useInputValidation";
import { validateInputValue } from "../utils";

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

const InputField: React.FC<Props> = ({ name, label, placeholder }) => {
  const { handleChange, value, errors } = useInputValidation(
    validateInputValue
  );

  return (
    <div>
      <p>{label}</p>
      <input
        name={name}
        value={value.email}
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {errors.email && <div>Invalid email address.</div>}
    </div>
  );
};

export default InputField;
