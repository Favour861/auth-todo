import React from 'react';
import logo from './logo.svg';


class InputTodo extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.addTodo} className="row" style={{position: 'fixed', bottom: '2px', right: '10px', left: '10px'}}>
                <div className="col-8">
                    <input className="form-control" placeholder="Input todo" name="todo" value={this.props.todo} onChange={this.props.todoChange} />
                </div>
                <div className="col-4">
                    <button className="btn btn-danger btn-block">Add</button>
                </div>
            </form>
        )
    }
}

export default InputTodo;