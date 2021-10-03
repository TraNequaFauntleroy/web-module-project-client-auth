import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello Buddies!</h1>
      <Switch>

        <PrivateRoute path='/friends/add-new' component={AddFriendForm}/> 
        <PrivateRoute path='/friends' component={FriendsList}/>
         
        <Route path='/login'>
          <Login />
        </Route>

        <Route>
          <Login />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
