import React from 'react';
import SignIn from '../../components/sign-in/index';
import "./index.scss";
import SignUp from '../../components/sign-up';

const SignInAnsSignUp = ({ title,items }) => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn ></SignIn>

            <SignUp></SignUp>
           
        </div>

    )
}

export default SignInAnsSignUp;
