import React, { useRef } from "react";
import "./app.css";
import axios from "axios";

export default function App() {
  const fullnameInput = useRef();
  const usernameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const registered = {
      fullName: fullnameInput.current.value,
      userName: usernameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    axios
      .post("http://localhost:4000/api/signup", registered)
      .then((response) => console.log(response.data));
    fullnameInput.current.value = "";
    usernameInput.current.value = "";
    emailInput.current.value = "";
    passwordInput.current.value = "";
  }

  return (
    <div>
      <form className="container">
        <h2>Sign up</h2>
        <div className="name">
          <label htmlFor="fullname">Full name</label>
          <input
            required
            type="text"
            ref={fullnameInput}
            placeholder="Enter Fullname"
          />
        </div>
        <div className="name">
          <label htmlFor="username">User name</label>
          <input
            required
            type="text"
            ref={usernameInput}
            placeholder="Enter Username"
          />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            ref={emailInput}
            placeholder="Enter Email"
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            ref={passwordInput}
            placeholder="Enter Password"
          />
        </div>

        <button className="regBtn" type="submit" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}
