import React from "react";
import useInputValidation from "../hooks/useInputValidation";
import { validateInputValue } from "../utilities/utils";
import { emailDomains } from "../constants";
import SuggestionsList from "./SuggestionsList";

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
        value={value.email || ""}
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {value.email && errors.email && <div>{errors.email}</div>}
      <SuggestionsList term={value.email} list={emailDomains} />
    </div>
  );
};

export default InputField;