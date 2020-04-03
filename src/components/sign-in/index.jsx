import React from 'react';
import FormInput from '../form-input/index';
import CustomButton from '../custom-button/index';
import { signInWithGoogle, auth } from '../../firebase/utils';
import "./index.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: '',
            })
        } catch (error) {
            console.error('Error in sign up', error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {
            email = '',
            password = ''
        } = this.state;

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handleSubmit} >

                    <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        value={email}
                        label="Email"
                        required />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required />


                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form"> Sign In</CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>



                </form>
            </div>

        )
    }
}

export default SignIn;
