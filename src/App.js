import React from 'react';
import './App.css';
import { Route,Switch,Redirect } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePageComponent";
import ShopPage from "./pages/shop/ShopPage";
import HeaderComponent from "./components/header/HeaderComponent";
import LoginRegistrationPage from "./pages/Login-RegitrationPage/LoginRegistrationPage";
import {
    auth,
    createUserProfileDocument,
    addCollectionsAndItems,
    firestore,
    covertCollectionSnapshotToMap
} from "./firebase/firebase.util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import {updateCollections} from "./redux/shop/shopAction";


const mapStateToProps=({user,shop})=>({
    currentUser:user.currentUser,
    collectionsArray:shop.collections,
});

const mapDispatchToProps=dispatch=>({
    setCurrentUser:(user)=>dispatch(setCurrentUser(user)),
    updateCollections:(collectionMap)=>dispatch(updateCollections(collectionMap))
});
class App extends React.Component{
    unsubscribeFromAuth=null;
    unsbuscribeFromSnapshot=null;

    componentDidMount() {
        const {setCurrentUser}=this.props;
        addCollectionsAndItems('collections',this.props.collectionsArray
            .map(({title,items})=>({title,items})));
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
        const {updateCollections}=this.props;
        const collectionRef=firestore.collection('collections');
        this.unsbuscribeFromSnapshot=collectionRef.onSnapshot(async snapshot=>{
            const collectionsMap=covertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
        })
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
                    <Route exact path="/checkout" component={CheckOutPage}/>
                    <Route exact path="/login" render={()=>
                        this.props.currentUser!=null?(<Redirect to="/"/>):
                        (<LoginRegistrationPage/>)}/>
                </Switch>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
