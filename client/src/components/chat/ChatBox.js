import React, { useRef } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';

function ChatBox() {

    /* 전송버튼 클릭마다 입력한 메시지 가져오기 위한 ref */
    const messageAreaForm = useRef(null);

    const send = () => {
        const form = messageAreaForm.current;
        console.log(`${form['msgArea'].value}`);

    }
    return (
        <>
            <Container fluid>
                <Form>
                    <Form.Row className="justify-content-center">
                        <Form.Group as="textarea" rows={15} cols={60} disabled placeholder="Area of Messages" />
                    </Form.Row>
                </Form>
                <Form ref={messageAreaForm}>
                    <Form.Row className="justify-content-center">
                        <Col align="right">
                            <Form.Group as="textarea" name="msgArea" rows={3} cols={20} placeholder="Type Message Here" />
                        </Col>
                        <Col align="left">
                            <Button variant="primary" onClick={() => send()}>Send</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </>
    );
}

export default ChatBox;