import React from "react";

const Validation = () => {
  return (
    <div className="validation">
      <ul>
        <li id="lower">Atleast one lowercase character</li>
        <li id="upper">Atleast one uppercase character</li>
        <li id="number">Atleast one number</li>
        <li id="special">Atleast one special character</li>
        <li id="length">Atleast 8 characters</li>
      </ul>
    </div>
  );
};

export default Validation;
