import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timer = setInterval(()=>this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    tick() {
        this.setState({
          date: new Date()
        });
    }

    render(){
        return(
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }
}

function Main(){
    return(
        <React.Fragment>
            <Clock/>
            <Clock/>
            <Clock/>

        </React.Fragment>
    );
}
ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
