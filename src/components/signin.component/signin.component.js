import React, { useState } from "react";
import "./signin.component.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button.component/custom.button";
import { signInWithGoogle } from "../../firebase/firebase.utills";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleSign = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
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
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
        />
        <CustomButton type="submit" googleLogIn={!googleSign}>
          Sign In
        </CustomButton>
        <CustomButton onClick={signInWithGoogle} googleLogIn={googleSign}>
          Sign In with google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
