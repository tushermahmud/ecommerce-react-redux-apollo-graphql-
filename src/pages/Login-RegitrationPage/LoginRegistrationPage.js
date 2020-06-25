import React from "react";
import SigninComponent from "../../components/signin/SigninComponent";
import SignupComponent from "../../components/signup/SignupComponent";
const LoginRegistrationPage=()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SigninComponent/>
            <SignupComponent/>
        </div>
    )
}
export default LoginRegistrationPage;