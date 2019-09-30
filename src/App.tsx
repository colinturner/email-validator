import React from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  return (
    <InputField
      label="email"
      placeholder="ronald_weasley@hogwarts.com"
      handleChange={e => {
        console.log(e.target.value);
      }}
    />
  );
};

export default App;
