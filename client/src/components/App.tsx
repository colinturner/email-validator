import React from "react";
import InputField from "./InputField";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 40vh;
  width: 70vh;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  box-shadow: 1px 2px 10px black;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <InputField
        name="email"
        label="email address"
        placeholder="ronald_weasley@hogwarts.com"
      />
    </Container>
  );
};

export default App;
