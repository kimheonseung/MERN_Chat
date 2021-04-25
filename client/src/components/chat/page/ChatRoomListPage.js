import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';

function ChatRoomListPage() {
    const [chatRoomList, setChatRoomList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/chat/room').then((allRooms) => {
          setChatRoomList(allRooms.data);
        });
      }, []);

      /* 페이지 이동을 위한 히스토리 선언 */
      const history = useHistory();
    return (
        <>
        <Container fluid>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Topic</th>
                        <th>Create Date</th>
                        <th>Private</th>
                    </tr>
                </thead>
                <tbody>
                    {chatRoomList.map((room, key) => (
                        <tr key={key} onClick={() => history.push('/chat/room/'+key)}>
                            <td>{room.roomNo}</td>
                            <td>{room.roomName}</td>
                            <td>{room.topic}</td>
                            <td>{room.createDt}</td>
                            <td>{room.password == null ? "공개" : "비공개"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
        </>
    );
}

export default ChatRoomListPage;