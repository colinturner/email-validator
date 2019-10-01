import React, { useState } from "react";
import { IErrors, IInputValue } from "../interfaces/interfaces";

function useInputValidation<T>(validate: (value: IInputValue) => IErrors) {
  const [value, setValue] = useState<IInputValue>({});
  const [errors, setErrors] = useState<IErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
    const errors = validate({ [event.target.name]: event.target.value });
    setErrors(errors);
  };

  return { handleChange, value, errors };
}

export default useInputValidation;
