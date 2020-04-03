import React from 'react';
import FormInput from '../form-input/index';
import CustomButton from '../custom-button/index';
import { auth, createUserProfileDocument } from '../../firebase/utils';
import "./index.scss";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {
            email = '',
            password = '',
            displayName = '',
            confirmPassword = ''
        } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return
        }
        try {
            const { user } = auth.createUserWithEmailAndPassword(email, password);
           await createUserProfileDocument(user, { displayName });

            this.setState({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
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
            password = '',
            displayName = '',
            confirmPassword = ''
        } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit} >

                    <FormInput
                        type="text"
                        name="displayName"
                        handleChange={this.handleChange}
                        value={displayName}
                        label="Display Name"
                        required />

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
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required />


                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form"> Sign Up</CustomButton>
                    </div>



                </form>
            </div>

        )
    }
}

export default SignUp;
