import React from "react";
import "./App.css";
import InputField from "./components/InputField";

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
