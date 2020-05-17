import React from 'react';
import logo from './logo.svg';

import InputTodo from './inputTodo';


class Todos extends React.Component{
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
    
      addTodo = (e) => {
          e.preventDefault()
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
            <div>
                <div className="row todo-container p-2" style={{minHeight: '76vh', maxHeight: '76vh', overflowY: 'auto'}}>
                    <div className="col-12" style={{paddingBottom: '30%'}}>
                        {this.state.todoArr.map((t, index) => 
                        <div key={index}  className="card-body shadow-sm" style={{width: '120%', marginLeft: '-9%'}}>
                            <div className="row">
                                <div className="col-10">{t}</div>
                                <div className="col-1 text-danger" style={{cursor: 'pointer'}}><b className="del-btn" onClick={()=>this.removeTodo(index)}>X</b></div>
                            </div>
                        </div>
                        )}
                    </div>
    
    
                </div>
                <InputTodo todo={this.state.todo} todoChange={this.todoChange} addTodo={this.addTodo}/>

            </div>
        )
    }
}

export default Todos;