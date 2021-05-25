import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shoppage.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-upPage/sign-in-sign-up";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
