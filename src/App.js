import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shoppage.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
