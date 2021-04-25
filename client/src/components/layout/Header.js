import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <>
        <Container fluid>
          <Row>
            <Col>
              <a href="/">Home</a>
            </Col>
            <Col>
              <a href="/chat/room">Chat Room List</a>
            </Col>
            <Col>
              <a href="/user/register">Register</a>  
            </Col>
            <Col>
              <a href="/user/login">Login</a>  
            </Col>
          </Row>
        </Container>
        </>
    );
}

export default Header;