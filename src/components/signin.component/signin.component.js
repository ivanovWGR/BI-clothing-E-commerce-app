import React, { useState } from "react";
import "./signin.component.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "password") {
      setPassword(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <label>Email</label>

        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <label>Password</label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
