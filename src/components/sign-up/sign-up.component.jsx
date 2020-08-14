import React, { Component } from 'react';
import { auth, createUserProfile } from '../../firebase/firebase.utils'
import Input from '../input/input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

class SignUp extends Component {

    constructor(){
        super()
        this.state={
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert("password doesn't match")
            return;
        }
        console.log(displayName, email, password, confirmPassword);
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfile(user, {displayName})
            console.log(user);
            
            await this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
              });
            
        } catch (error) {
            console.error(error);
        }
        
    }

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="SignUp">
                <h2>Not have an account ?</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="displayName" value={displayName} handleChange={this.handleChange}> Name: </Input>
                    <Input type="email" name="email" value={email} handleChange={this.handleChange}> Email: </Input>
                    <Input type="password" name="password" value={password} handleChange={this.handleChange}> password: </Input>
                    <Input type="password" name="confirmPassword" value={confirmPassword} handleChange={this.handleChange}> confirm password: </Input>
                    <CustomButton type="submit" > SignUp </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
