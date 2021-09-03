import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shoppage.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-upPage/sign-in-sign-up";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utills";
import { createUserProfileDocument } from "./firebase/firebase.utills";
import { useSelector, useDispatch } from "react-redux";
import setCurrentUser from "./redux/user/user.actions";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        let userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </>
      </Switch>
    </div>
  );
}

export default App;
