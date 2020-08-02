import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Login from './Components/Login'
import SignUp from './Components/SignUp'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Login}/>
        <Route exact path = "/SignUp" component={SignUp}/>

      </Switch>
    
    </Router>

  );
}

export default App;
