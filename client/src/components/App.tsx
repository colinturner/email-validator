import React from "react";
import "../styles/App.css";
import InputField from "./InputField";

const App: React.FC = () => {
  return (
    <>
      <InputField
        name="email"
        label="email"
        placeholder="ronald_weasley@hogwarts.com"
      />
    </>
  );
};

export default App;
