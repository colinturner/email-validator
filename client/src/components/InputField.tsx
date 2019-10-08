import React from "react";
import useInputValidation from "../hooks/useInputValidation";
import { validateInputValue } from "../utilities/utils";
import { emailDomains } from "../constants";
import SuggestionsList from "./SuggestionsList";
import KickboxResults from "./KickboxResults";
import InputErrors from "./InputErrors";
import styled from "styled-components";

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

const Label = styled.div`
  cursor: default;
  color: black;
  font-size: 2em;
  background: rgb(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 10px;
`;

const EmailInput = styled.input`
  font-family: Raleway;
  border: 1px solid black;
  border-radius: 5px;
  background: rgb(255, 255, 255, 0.5);
  margin-top: 5vh;
  margin-bottom: 1vh;
  height: 5vh;
  min-width: 45vh;
  font-size: 20px;
  padding: 2vh;
  &:focus {
    border: none;
    outline: none;
  }
  ::placeholder {
    font-style: italic;
    color: grey;
  }
`;

const InputField: React.FC<Props> = ({ name, label, placeholder }) => {
  const { handleChange, value, errors } = useInputValidation(
    validateInputValue
  );

  return (
    <>
      <Label>Enter your {label}</Label>
      <EmailInput
        name={name}
        value={value.email || ""}
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <InputErrors email={value.email} errors={errors} />
      <KickboxResults email={value.email} />
      <SuggestionsList term={value.email} list={emailDomains} />
    </>
  );
};

export default InputField;
