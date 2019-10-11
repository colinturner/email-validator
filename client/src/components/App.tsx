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

const SandboxNote = styled.div`
  font-size: 13px;
  margin-top: 30px;
`

const App: React.FC = () => {
  return (
    <Container>
      <InputField
        name="email"
        label="email address"
        placeholder="ronald_weasley@hogwarts.com"
      />
      <SandboxNote>
        *Note: this proof-of-concept app uses the free trial version of the <a href="https://kickbox.com/" target="_blank">Kickbox API</a> to verify email addresses. It only tests the integration with Kickbox. All email addresses will return as deliverable, whether or not they actually are.
      </SandboxNote>
    </Container>
  );
};

export default App;
