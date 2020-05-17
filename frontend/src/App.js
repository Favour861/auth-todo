import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import TodoApp from './todoApp';
import Home from './home';
import './App.css';
import withAuth from './withAuth';
import withoutAuth from './withoutAuth';


class App extends React.Component{
  render(){
    return(
      <div >
      {/* <Home /> */}
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route exact path="/app" exact component={TodoApp}/> */}
        <Route exact path="/" component={withoutAuth(Home)}/>
        <Route exact path="/app" exact component={withAuth(TodoApp)}/>
      </Switch>
      </div>
    )
  }
}

export default App;