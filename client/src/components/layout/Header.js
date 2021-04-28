import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  console.log(user);

  useEffect(() => {
    const token = user?.token;
    // JWT ...

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [])
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
            {user ? (
              <div>
                <a>{user.name}</a>
                <Button>Logout</Button>
              </div>
            ) : (
              <div>
                <a href="/user/auth">Sign In / Sign Up</a>
              </div>
            )}
              
            </Col>
          </Row>
        </Container>
        </>
    );
}

export default Header;