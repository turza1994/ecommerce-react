import React, { Component } from 'react';

import Input from '../input/input.component';

class SignIn extends Component {

    constructor(){
        super();
        this.state={
            email: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
      }

    render() {
        return (
            <div>
                <h3>Already have an account ?</h3>
                <form>
                    <Input type = "text" name="email" handleChange={this.handleChange} > email: </Input>
                    <Input type = "password" name="password" handleChange={this.handleChange} > password: </Input>
                </form>
            </div>
        );
    }
}

export default SignIn;
