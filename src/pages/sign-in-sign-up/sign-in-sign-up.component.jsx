import React from 'react'
import './sign-in-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => {
    return (
        <div className="SignInSignUp">
            <div>
                <SignIn />
            </div>
            
            <div>
                <SignUp />
            </div>
        </div>
    )
}

export default SignInSignUp
