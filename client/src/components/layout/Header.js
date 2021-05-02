import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  // const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    // JWT ...

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    document.location.href = '/';
    setUser(null);
  }

  return (
      <>
      <Container fluid>
        <Row>
          <Col>
            <a href="/">Home</a>
          </Col>
          {user ? (
            <>
              <Col>
                <a href="/chat/room">Chat Room List</a>
              </Col>
              <Col>
                <div>
                  <a>{user.name}</a>
                  <Button onClick={logout}>Logout</Button>
                </div>
              </Col>
            </>
          ) : (
            <>
            <Col>
              <div>
                <a href="/user/auth">Sign In / Sign Up</a>
              </div>
            </Col>
            </>
          )}
        </Row>
      </Container>
      </>
  );
}

export default Header;