import { IErrors, IInputValue } from "./interfaces/interfaces";

export const isEmailValid = (email: string | undefined): boolean => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email || "");
};

export const validateInputValue = (value: IInputValue): IErrors => {
  let errors: IErrors = {};
  if (!isEmailValid(value.email)) {
    errors.email = "Invalid email address.";
  }
  return errors;
};
