import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withoutAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      fetch('http://localhost:5000/checkToken', {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        // body: JSON.stringify(values)
        })
        .then(res => {
          if (res.status === 200) {
              this.setState({ loading: false, redirect: true });
            } 
            else {
                const error = new Error(res.error);
                throw error;
                this.setState({ loading: false, redirect: false});
            }
        })
        .catch(err => {
            console.error(err);
            this.setState({ loading: false});
        });
    }
    render() {
        const { loading, redirect } = this.state;
        if (loading) {
            return null;
        }
        if (redirect) {
            return <Redirect to="/app" />;
        }
        return <ComponentToProtect {...this.props} />;
    }
  }
}