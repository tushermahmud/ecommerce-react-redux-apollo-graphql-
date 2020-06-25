import React from 'react';
import './App.css';
import { Route,Switch,Redirect } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePageComponent";
import ShopPage from "./pages/shop/ShopPage";
import HeaderComponent from "./components/header/HeaderComponent";
import LoginRegistrationPage from "./pages/Login-RegitrationPage/LoginRegistrationPage";
import {auth,createUserProfileDocument} from "./firebase/firebase.util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";


const mapStateToProps=({user})=>({
    currentUser:user.currentUser
});

const mapDispatchToProps=dispatch=>({
    setCurrentUser:(user)=>dispatch(setCurrentUser(user))
});
class App extends React.Component{
    unsubscribeFromAuth=null;

    componentDidMount() {

        const {setCurrentUser}=this.props;
        this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
            if(userAuth){
                const userRef=createUserProfileDocument(userAuth);
                (await userRef).onSnapshot(snapShot=>{
                   setCurrentUser({
                        id:snapShot.id,
                        ...snapShot.data()
                    })
                })
            }

            setCurrentUser(userAuth);

        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path="/login" render={()=>
                        this.props.currentUser!=null?(<Redirect to="/"/>):
                        (<LoginRegistrationPage/>)}/>
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
