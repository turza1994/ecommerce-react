import React from 'react'

const SignIn = () => {
    return (
        <div>
            <h3>Already have an account ?</h3>
            <form>
                <label>email:</label>
                <input type="email" name="email"/>
                <br/>
                <label>password:</label>
                <input type="password" name="password"/>
            </form>
        </div>
    )
}

export default SignIn
