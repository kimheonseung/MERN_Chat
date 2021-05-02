import React, { useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function FormControl({ formName, inputName, labelName, handleChange, type, placeHolder, isSignUp, required }) {


    return (
        <>
            <Form.Group as={Row} controlId={formName}>
                <Form.Label column sm="2">{labelName}</Form.Label>
                <Col sm={(type === 'email' && isSignUp) ? 8 : 10}>
                    <Form.Control 
                        name={inputName}
                        type={type} 
                        onChange={handleChange} 
                        placeholder={placeHolder} 
                        required={required}
                    />
                    <Form.Control.Feedback type="invalid">
                        Check.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>
                        OK.
                    </Form.Control.Feedback>
                </Col>
                {(type === 'email' && isSignUp) && (
                    <Col sm="2">
                        <Button block variant="outline-info">Check</Button>
                    </Col>
                )}
            </Form.Group>
        </>
    );
}

export default FormControl;