import React, { useState } from "react";

const PassInput = () => {
  const initialState = {
    password: "",
    eye: false
  };

  const [state, setState] = useState(initialState);

  const checkPassword = (data) => {
    const lowerCase = document.getElementById("lower");
    const upperCase = document.getElementById("upper");
    const digit = document.getElementById("number");
    const specialChar = document.getElementById("special");
    const minLength = document.getElementById("length");

    //javascript regular expression pattern
    const l = new RegExp("(?=.*[a-z])");
    const u = new RegExp("(?=.*[A-Z])");
    const d = new RegExp("(?=.*[0-9])");
    const s = new RegExp("(?=.*[!@#$%^&*])");
    const len = new RegExp("(?=.{8,})");

    //lowercase valLdation check
    if (l.test(data)) {
      lowerCase.classList.add("valid");
    } else {
      lowerCase.classList.remove("valid");
    }
    if (u.test(data)) {
      upperCase.classList.add("valid");
    } else {
      upperCase.classList.remove("valid");
    }
    if (d.test(data)) {
      digit.classList.add("valid");
    } else {
      digit.classList.remove("valid");
    }
    if (s.test(data)) {
      specialChar.classList.add("valid");
    } else {
      specialChar.classList.remove("valid");
    }
    if (len.test(data)) {
      minLength.classList.add("valid");
    } else {
      minLength.classList.remove("valid");
    }
  };

  const handleChange = (e) => {
    return setState((current) => {
      return { ...current, password: e.target.value };
    });
  };
  return (
    <div className="input_box">
      <input
        type={state.eye ? "input" : "password"}
        placeholder="Password"
        name="password"
        onKeyUp={() => checkPassword(state.password)}
        onChange={handleChange}
      />
      <span
        id="toggleEye"
        onClick={() => {
          setState((previous) => {
            return { ...previous, eye: !state.eye };
          });
        }}
      >
        {state.eye ? (
          <i className="fa-solid fa-eye"></i>
        ) : (
          <i className="fa-solid fa-eye-slash"></i>
        )}
      </span>
    </div>
  );
};

export default PassInput;
