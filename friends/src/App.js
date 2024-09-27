import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            {!isLoggedIn ? <Link to="/login">Login</Link> : <div></div>}
          </li>
          <li>
            {isLoggedIn && <Link to="/friends">Attendees</Link>}
          </li>
          <li>
            <Link to="/logout">Logout</Link> 
          </li>
        </ul>
      <Switch>
        <PrivateRoute path='/friends/add-new' component={AddFriendForm}/> 
        <PrivateRoute path='/friends' component={FriendsList}/>
        <Route exact path="/" component={Login} />    
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
