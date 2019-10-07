import React, { useEffect, useState } from "react";
import useInputValidation from "../hooks/useInputValidation";
import { validateInputValue, isEmailValid } from "../utilities/utils";
import { emailDomains } from "../constants";
import SuggestionsList from "./SuggestionsList";
import { verifyEmail } from "../utilities/api";
import useDebounce from "../hooks/useDebounce";

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

const InputField: React.FC<Props> = ({ name, label, placeholder }) => {
  const { handleChange, value, errors } = useInputValidation(
    validateInputValue
  );
  const [isVerifying, setIsVerifying] = useState(false);
  const [kickboxResults, setKickboxResults] = useState([]);
  const debouncedSearchTerm = useDebounce(value.email, 500);

  useEffect(() => {
    if (isEmailValid(value.email)) {
      setIsVerifying(true);
      verifyEmail(debouncedSearchTerm).then((results: any) => {
        //remove 'any' typing
        setIsVerifying(false);
        setKickboxResults(results);
      });
    } else {
      setKickboxResults([]);
    }
  }, [debouncedSearchTerm]);

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
