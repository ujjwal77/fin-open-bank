import './App.css';
import React from 'react';
import FrontPage from './Pages/FrontPage';
import {Route,Switch} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
// import SignUp from '../src/Components/SignUp'
import SignupPage from './Pages/SignupPage';
import User from './Pages/User';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" component={FrontPage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/user" component={User}/>
      </Switch>
    </div>
  );
}

export default App;
