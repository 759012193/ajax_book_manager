import React from 'react';
import './App.css';
import {connect}from 'react-redux';

import {
    HashRouter as Router,
    Switch,
    Route
}
from 'react-router-dom'

import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
      
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
