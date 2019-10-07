import React from "react";
import { IErrors } from "../interfaces/interfaces";

interface Props {
  email: string | undefined;
  errors: IErrors;
}

const InputErrors: React.FC<Props> = ({ email = "", errors }) => {
  return (
    <>
      <div>{email && errors.email && <div>{errors.email}</div>}</div>
    </>
  );
};

export default InputErrors;
