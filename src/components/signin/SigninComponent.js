import React from "react";
import FormInput from "../form-input/FormInputComponent";
import CustomButton from "../custom-button/CustomButtonComponent";
import {signInWithGoogle} from "../../firebase/firebase.util";

class SigninComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }
    handleChange=(event)=>{
        const{value,name}=event.target;
        this.setState({
            [name]:value
        })
    }
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                               name="email"
                               required
                               handleChange={this.handleChange}
                               value={this.state.email}
                               id="email"
                               label="email"
                    />
                    <FormInput type="password"
                               name="password"
                               required
                               onChange={this.handleChange}
                               value={this.state.password}
                               id="password"
                               label="password"
                    />
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >{" "}Sign In With Google{" "}</CustomButton>
                </form>
            </div>
        );
    }
}
export default SigninComponent;