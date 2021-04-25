import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatRoomPage from './components/chat/page/ChatRoomPage.js';
import ChatRoomListPage from './components/chat/page/ChatRoomListPage.js';
import UserRegister from './components/user/Register.js';
import UserLogin from './components/user/Login.js';
import Header from './components/layout/Header.js';


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Router>
          <Switch>
            <Route path="/user/register" component={UserRegister} />
            <Route path="/user/login" component={UserLogin} />
            <Route path="/chat/room/:roomNo" component={ChatRoomPage} />
            <Route path="/chat/room" component={ChatRoomListPage} />
          </Switch>
        </Router>
        
      </>
    </div>
  );
}

export default App;
