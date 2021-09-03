import React, { useState, useEffect } from "react";
import "./signup.component.styles.scss";
import CustomButton from "../custom-button.component/custom.button";
import FormInput from "../form-input/form-input";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utills";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;

      default:
        console.log("wrong input");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setDisplayName("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
    } catch (eror) {
      throw new Error("bad sign up request");
    }

    try {
      auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          onChange={handleChange}
          label="Display Name"
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          type="email"
          onChange={handleChange}
          label="Email adress"
          name="email"
          value={email}
          required
        />

        <FormInput
          type="password"
          onChange={handleChange}
          label="Password"
          name="password"
          value={password}
          required
        />

        <FormInput
          type="password"
          onChange={handleChange}
          label="Confirm password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
