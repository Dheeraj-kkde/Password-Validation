import React from "react";
import Validation from "./Validation";
import PassInput from "./PassInput";

const Password = () => {
  return (
    <div className="password">
      <PassInput />
      <Validation />
    </div>
  );
};

export default Password;
