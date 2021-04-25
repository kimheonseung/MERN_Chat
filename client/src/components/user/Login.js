import React, { useState, useEffect, useRef } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function Login(props) {
    const [user, setUser] = useState({
        id: '',
        password: ''
    });

    const requestLogin = () => {
        axios.post('http://localhost:5000/user/login', user).then((result) => {
            console.log(result.data);
        });
    }

    return (
        <>
        <h2>로그인</h2>
        <Container>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalId">
                    <Form.Label align="right" column sm={props.labelSize}>아이디</Form.Label>
                    <Col sm={props.inputSize}>
                        <Form.Control type="text" placeholder="Enter ID" 
                            onChange={(event) => {setUser({ ...user, id: event.target.value})}} />
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label align="right" column sm={props.labelSize}>비밀번호</Form.Label>
                    <Col sm={props.pwSize}>
                        <Form.Control type="password" placeholder="Enter Password" 
                            onChange={(event) => {setUser({ ...user, password: event.target.value})} } />
                    </Col>
                </Form.Group>
                <br />
                <Button sm={8} onClick={ () => { requestLogin() }}>로그인</Button>
            </Form>

        </Container>
        </>
    );
}

Login.defaultProps = {
    labelSize: 4,
    dupCheckSize: 4,
    inputSize: 6,
    pwSize: 6
}

export default Login;