import React from 'react';
import logo from './logo.svg';


class Profile extends React.Component{
    render(){
        return(
            <div className="row todo-container p-2" style={{maxHeight: '70vh', overflowY: 'auto'}}>
                {/* {this.props.todoArr.map((t, index) => 
                  <div key={index}  className="card-body col-12 shadow animated fadeInUp bounceOutLeft">
                      <div className="row">
                          <div className="col-10">{t}</div>
                          <div className="col-1 text-danger" style={{cursor: 'pointer'}}><b className="del-btn" onClick={()=>this.props.removeTodo(index)}>X</b></div>
                      </div>
                  </div>
                  )} */}
                  PROFILE
            </div>
        )
    }
}

export default Profile;