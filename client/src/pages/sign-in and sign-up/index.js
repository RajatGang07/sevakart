import React from 'react';
import SignIn from '../../components/sign-in/index';
import SignUp from '../../components/sign-up';

import { SignInAndSignUpContainer } from './index.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
