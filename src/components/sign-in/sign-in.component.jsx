import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.style.scss';

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I've already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={email} type="email" label="email" handleChange={this.handleChange} required />
                    <FormInput name="password" value={password} type="password" label="password" handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;