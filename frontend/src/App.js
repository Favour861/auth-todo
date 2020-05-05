import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import TodoApp from './todoApp';
import Home from './home';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div >
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/app" exact component={TodoApp}/>
      </Switch>
      </div>
    )
  }
}

export default App;