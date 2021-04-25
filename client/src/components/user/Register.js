import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

function Register(props) {

    const passwordCheckMessage = useRef(null);

    const [user, setUser] = useState({
        id: '',
        nick: '',
        password: '',
        confirmPassword: '',
        regDt: ''
    });

    const [status, setStatus] = useState({
        isPasswordEquals: false,
        isUniqueId: false,
        isUniqueNick: false
    });

    const comparePassword = (user) => {
        setUser(user);
        let item = passwordCheckMessage.current;
        item.children[0].hidden = false;

        if( !user.password ) {
            setStatus({...status, isPasswordEquals: false});
            item.children[0].style = "color: red";
            item.children[0].textContent = "비밀번호는 1자리 이상 입력해주세요.";
        }
        else if( user.password === user.confirmPassword ) {
            setStatus({...status, isPasswordEquals: true});
            item.children[0].style = "color: green";
            item.children[0].textContent = "비밀번호 일치";
        }
        else {
            setStatus({...status, isPasswordEquals: false});
            item.children[0].style = "color: red";
            item.children[0].textContent = "비밀번호 불일치";
        }
    }

    const checkId = () => {
        if( !user.id ) {
            alert("아이디를 입력해주세요.");
            return;
        }

        axios.get('http://localhost:5000/user/id/'+user.id).then((user) => {
            console.log(user.data);
            if(!user.data) {
                setStatus({...status, isUniqueId: true});
                alert("사용 가능한 아이디입니다.");    
            } else {
                setStatus({...status, isUniqueId: false});
                alert("중복된 아이디입니다.");
            }
        });
    }

    const checkNick = () => {
        if( !user.nick ) {
            alert("닉네임을 입력해주세요.");
            return;
        }

        axios.get('http://localhost:5000/user/nick/'+user.nick).then((user) => {
            console.log(user.data);
            if(!user.data) {
                setStatus({...status, isUniqueNick: true});
                alert("사용 가능한 닉네임입니다.");    
            } else {
                setStatus({...status, isUniqueNick: false});
                alert("중복된 닉네임입니다.");   
            }
        });
    }

    const register = () => {
        if(!status.isUniqueId) {
            alert('ID 중복을 확인해주세요.');
            return;
        }

        if(!status.isUniqueNick) {
            alert('닉네임 중복을 확인해주세요.');
            return;
        }

        if(!status.isPasswordEquals) {
            alert("입력하신 비밀번호가 일치하지 않습니다.")
            return;
        }
        axios.put('http://localhost:5000/user', user).then((newUser) => {
            alert('가입 완료!');
            setStatus({
                isPasswordEquals: false,
                isUniqueId: false,
                isUniqueNick: false
            });
            window.location.href = "/user/login";
        });

    }

    useEffect(() => {
        console.log(status);
    }, []);

    return (
        <>
        <h2>회원가입</h2>
        <Container>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalId">
                    <Form.Label align="right" column sm={props.labelSize}>아이디</Form.Label>
                    <Col sm={props.inputSize}>
                        <Form.Control type="text" placeholder="Enter ID"
                            onChange={(event) => {setUser({ ...user, id: event.target.value});setStatus({...status, isUniqueId: false});}} />
                    </Col>
                    <Button sm={props.dupCheckSize} onClick={() => {checkId()}}>중복확인</Button>
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="formHorizontalNickname">
                    <Form.Label align="right" column sm={props.labelSize}>닉네임</Form.Label>
                    <Col sm={props.inputSize}>
                        <Form.Control type="text" placeholder="Enter Nickname"
                            onChange={(event) => {setUser({ ...user, nick: event.target.value});setStatus({...status, isUniqueNick: false});}} />
                    </Col>
                    <Button sm={props.dupCheckSize} onClick={() => {checkNick()}}>중복확인</Button>
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label align="right" column sm={props.labelSize}>비밀번호</Form.Label>
                    <Col sm={props.pwSize}>
                        <Form.Control type="password" placeholder="Enter Password"
                            onChange={(event) => {comparePassword({ ...user, password: event.target.value})} } />
                    </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row} controlId="formHorizontalConfirmPassword">
                    <Form.Label align="right" column sm={props.labelSize}>비밀번호 확인</Form.Label>
                    <Col sm={props.pwSize}>
                        <Form.Control type="password" placeholder="Confirm Password"
                            onChange={(event) => {comparePassword({...user, confirmPassword: event.target.value})}} />
                    </Col>
                </Form.Group>
                <Form.Group ref={passwordCheckMessage} as={Row} controlId="formHorizontalPasswordCheck">
                    <Form.Label name="passwordStatusLabel" hidden column>비밀번호 확인</Form.Label>
                </Form.Group>
                
                <br />
                <br />
                <Button sm={8} onClick={ () => { register() }}>가입하기</Button>
            </Form>

        </Container>

        </>
    );
}

Register.defaultProps = {
    labelSize: 4,
    dupCheckSize: 4,
    inputSize: 6,
    pwSize: 8
}

export default Register;