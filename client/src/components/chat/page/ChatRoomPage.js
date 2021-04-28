import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
// import Message from '../Message.js';
import ChatBox from '../ChatBox.js';

function ChatRoomPage({match}) {
    /* url로 받은 방 번호 */
    const { roomNo } = match.params;
    const [chatRoom, setChatRoom] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/chat/room/'+roomNo).then((room) => {
            setChatRoom(room.data);
        });
    }, []);
    return (
        <>
            <Container fluid>
                <Row className="table-dark justify-content-center">
                    <div>You are in {chatRoom.roomName}.</div>
                </Row>
                
                <ChatBox />

            </Container>
        </>
    );
}

export default ChatRoomPage;