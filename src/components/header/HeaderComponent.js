import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/4.3 crown.svg.svg";
import {auth} from "../../firebase/firebase.util"
import {connect} from "react-redux";
import CartIconComponent from "../cart-icon/CartIconComponent";
import CartDropdownComponent from "../cart-dropdown/CartDropdownComponent";

const mapStateToProps= ({user,cart})=>({
    currentUser:user.currentUser,
    hidden:cart.hidden
});

const HeaderComponent=({currentUser,hidden})=>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser?
                        <div style={{cursor:"pointer"}} className="option"
                             onClick={()=>auth.signOut()}>SIGN OUT
                        </div>:
                        <Link className="option" to="/login">SIGN IN</Link>
                }
                <CartIconComponent/>
            </div>
            {!hidden?(<CartDropdownComponent/>):
            null
            }

        </div>
    )
}
export default connect(mapStateToProps,null)(HeaderComponent);