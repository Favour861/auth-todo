import React from 'react';
import logo from './logo.svg';


class InputTodo extends React.Component{
    render(){
        return(
            <div className="row" style={{position: 'fixed', bottom: '10px', right: '10px', left: '10px'}}>
                <div className="col-8">
                    <input className="form-control" placeholder="Input todo" name="todo" value={this.props.todo} onChange={this.props.todoChange} />
                </div>
                <div className="col-4">
                    <button className="btn btn-danger btn-block" onClick={this.props.addTodo}>Add</button>
                </div>
            </div>
        )
    }
}

export default InputTodo;