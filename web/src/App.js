import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Classes';
import Classes from './Classes';
import Subjects from './Subjects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      


      <Switch>
          <Route path="/subject">
           <Subjects></Subjects>
          </Route>
          <Route path="/users">
         
          </Route>
          <Route path="/">
          <Classes></Classes>
          </Route>
        </Switch>


      </Router>
    </div>
  );
}

export default App;
