import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatRoomPage from '../chat/page/ChatRoomPage.js';
import ChatRoomListPage from '../chat/page/ChatRoomListPage.js';
import UserRegister from '../user/Register.js';
import UserLogin from '../user/Login.js';
import UserAuth from '../user/Auth/Auth.js';

function Home() {

    return (
        <>
        <Router>
          <Switch>
            <Route path="/user/auth" component={UserAuth} />
            <Route path="/chat/room/:roomNo" component={ChatRoomPage} />
            <Route path="/chat/room" component={ChatRoomListPage} />
          </Switch>
        </Router>
        </>
    );
}

export default Home;