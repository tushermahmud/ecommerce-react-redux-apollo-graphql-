import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePageComponent";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shops" component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
