import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePageComponent";
import ShopPage from "./pages/shop/ShopPage";
import HeaderComponent from "./components/header/HeaderComponent";
import LoginRegistrationPage from "./pages/Login-RegitrationPage/LoginRegistrationPage";
import {auth,createUserProfileDocument} from "./firebase/firebase.util";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentUser:null
        }
    }
    unsubscribeFromAuth=null;
    componentDidMount() {
        this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
            if(userAuth){
                const userRef=createUserProfileDocument(userAuth);
                (await userRef).onSnapshot(snapShot=>{
                    this.setState({
                        currentUser:{
                            id:snapShot.id,
                            ...snapShot.data()
                        },
                    });
                })
            }
            this.setState({
                currentUser:userAuth
            })
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <HeaderComponent currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/login" component={LoginRegistrationPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
