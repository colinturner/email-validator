import React, { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({ label, placeholder, handleChange }) => {
  return (
    <div>
      <p>{label}</p>
      <input type="email" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default InputField;
