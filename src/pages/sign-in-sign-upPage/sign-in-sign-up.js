import React from "react";
import "./sign-in-sign-up.styles.scss";
import SignIn from "../../components/signin.component/signin.component";
import SignUp from "../../components/signup.component/signup.component";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignInSignUpPage;
