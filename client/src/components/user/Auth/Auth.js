import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon.js';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormControl from './FormControl.js';
import * as config from '../../../config.js';
import { signIn, signUp } from '../../../actions/Auth.js';


const formInitialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

function Auth() {
    // const state = null;
    const [isSignUp, setIsSignUp] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(formInitialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if(isSignUp) {
            dispatch(signUp(formData, history));
        } else {
            dispatch(signIn(formData, history));
        }



        // if(!form.checkValidity()) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }

        // setValidated(true);
    };
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const switchForm = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    };

    const googleSuccess = async (res) => {
        /* optional chaining - res 객체 접근 불가 시 에러 발생 무시 (cannot get property profileObje of undefined) */
        const result = res?.profileObj;
        const token = res?.tokenId;

        /* async try catch */
        try {
            dispatch( { type: 'AUTH', data: { result, token } } );
            document.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful.");
    };

    return (
        <>
            <Container className="w-auto">
                <Card body>
                    <Card.Header as="h5">{isSignUp ? "Sign Up" : "Sign In"}</Card.Header>
                    <Container className="mt-3">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {
                                isSignUp &&
                                <FormControl controlId="formName" inputName="name" labelName="Name" type="text" handleChange={handleChange} placeHolder="Enter Name" required />
                            }
                            <FormControl controlId="formEmail" inputName="email" labelName="Email" type="email" handleChange={handleChange} placeHolder="Enter Email" isSignUp={isSignUp} required />
                            <FormControl controlId="formPassword" inputName="password" labelName="Password" type="password" handleChange={handleChange} placeHolder="Enter Password" required />
                            {
                                isSignUp &&
                                <FormControl controlId="formConfirmPassword" inputName="confirmPassword" labelName="Confirm Password" type="password" handleChange={handleChange} placeHolder="Confirm Password" required />
                            }
                            <Button className="mb-4" block type="submit" color="primary">{isSignUp ? "Sign Up" : "Sign In"}</Button>
                            
                            <GoogleLogin
                                clientId={config.GOOGLE_CLIENT_ID}
                                render={(renderProps) => (
                                    <Button variant="secondary" block onClick={renderProps.onClick}><Icon /> Google Sign In</Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                            />
                        </Form>
                    </Container>
                    <Card.Footer>
                        <Button block variant="link" onClick={switchForm}>{isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</Button>        
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
}

export default Auth;