import React, { useState } from "react";
import { IErrors, IInputValue } from "../interfaces/interfaces";

// Custom hook that takes a Validation function as an argument and hangs on to state for a functional component that invokes it.
function useInputValidation<T>(
  validate: (target: string, value: string) => IErrors
) {
  // Value setter and initialization
  const [value, setValue] = useState<IInputValue>({});

  // Errors setter and initialization
  const [errors, setErrors] = useState<IErrors>({});

  // Handles changes when user types in the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
    const errors = validate(event.target.name, event.target.value);
    setErrors(errors);
  };

  // Handles changes when user clicks a suggestion
  const handleClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setValue({
      ...value,
      email: event.currentTarget.textContent || ""
    });
    const errors = validate("email", event.currentTarget.textContent || "");
    setErrors(errors);
  };

  return { handleChange, handleClick, value, errors };
}

export default useInputValidation;
