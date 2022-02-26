//import area
import Register from './pages/Register';
import Error404 from './pages/Error404';
import Logout from './pages/Logout';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetFriends from './pages/GetFriends';
import EditFriend from './pages/EditFriend';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/getfriends" element={ <GetFriends /> } />
        <Route path="/editfriends/:fri_id" element={ <EditFriend /> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>
    </Router>
  );
}

export default App;
