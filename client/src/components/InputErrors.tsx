import React from "react";
import { IErrors } from "../interfaces/interfaces";
import styled from "styled-components";

interface Props {
  email: string | undefined;
  errors: IErrors;
}

const Div = styled.div`
  cursor: default;
`;

const InputErrors: React.FC<Props> = ({ email = "", errors }) => {
  return (
    <>
      <Div>{email && errors.email && <div>{errors.email}</div>}</Div>
    </>
  );
};

export default InputErrors;
