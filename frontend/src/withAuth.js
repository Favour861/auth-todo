import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      let token = localStorage.getItem('token')
      if(!token){
        this.setState({ loading: false, redirect: true });
      }else{
        let bearer = 'Bearer ' + token;
        fetch('http://localhost:5000/checkToken', {
          method: 'POST',
          credentials: 'include',
          headers: new Headers({
              'authorization': bearer,
              'Content-Type': 'application/json'
          }),
          // body: JSON.stringify(values)
          })
          .then(res => {
            if (res.status === 200) {
              this.setState({ loading: false });
            } 
            else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            this.setState({ loading: false, redirect: true });
          });
      }
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}