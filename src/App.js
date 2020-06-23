import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePageComponent";
import ShopPage from "./pages/shop/ShopPage";
import HeaderComponent from "./components/header/HeaderComponent";
import LoginRegistrationPage from "./pages/Login-RegitrationPage/LoginRegistrationPage";
function App() {
  return (
    <div>
        <HeaderComponent/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/login" component={LoginRegistrationPage}/>
        </Switch>
    </div>
  );
}

export default App;
