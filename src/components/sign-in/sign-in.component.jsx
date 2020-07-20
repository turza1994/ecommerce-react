import React, { Component } from 'react';

import Input from '../input/input.component';
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends Component {

    constructor(){
        super();
        this.state={
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
      }
    
    
    
    render() {
        return (
            <div className="SignIn">
                <h2>Already have an account ?</h2>
                <form onSubmit={this.handleSubmit} >
                    <Input type = "text" name="email" handleChange={this.handleChange} > email: </Input>
                    <Input type = "password" name="password" handleChange={this.handleChange} > password: </Input>
                    <CustomButton onClick={signInWithGoogle} > sign in with google </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
