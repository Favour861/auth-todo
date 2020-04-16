import React from 'react';
import logo from './logo.svg';
import Todos from './todos';
import InputTodo from './inputTodo';
import './App.css';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todoArr: ["Eat"]
    }
  }

  todoChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.state[name]=value;
    this.setState(this.state)
  }

  addTodo = () => {
    let todo = this.state.todo;
    let todoArr = this.state.todoArr;
    todoArr.push(todo);
    this.setState({todoArr, todo: ''})

  }

  removeTodo = (index) => {
    console.log(index)
    let todoArr = this.state.todoArr;
    todoArr.splice(index, 1)
    this.setState({todoArr})
  }

  render(){
    return(
      <React.Fragment >
        <div className="container-fluid">
    <div className="row bg-danger" style={{height: '150px'}}>

    </div>
    <div className="row">
        <div className="col-10 mx-auto shadow bg-white" style={{height: '100%', marginTop: '-90px', zIndex: 1000}}>
                <h3 align="center" className="mt-3" style={{borderBottom: '1px solid lightgrey'}}>SIMPLE TODO LIST</h3>


                <Todos todoArr={this.state.todoArr} removeTodo={this.removeTodo} />

                <InputTodo todo={this.state.todo} todoChange={this.todoChange} addTodo={this.addTodo} />



        </div>
    </div>
</div>
      </React.Fragment>
    )
  }
}

export default TodoApp;