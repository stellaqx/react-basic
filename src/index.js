import React from 'react';
import ReactDOM from 'react-dom';
// react router can grab the param from url, and specify which component to respond
import {Router, Route, Link} from 'react-router';
import './index.css';
//import App from './App';
import CommentBox from './comment/CommentBox';
import * as serviceWorker from './serviceWorker';

// simulate how server communicate back the comment
// let comments = require("./server/comments.json");

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          {/*links*/}
        </div>
        {this.props.children}
      </div>
    );
  }
}


class TV extends React.Component {
  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          TV Show List
        </div>
        {this.props.children}
      </div>
    );
  }
}

class Show extends React.Component {
  render() {
    return (<h3>Show Name</h3>); 
  }
}

ReactDOM.render(
  <React.StrictMode>
    <CommentBox url="../comments.json" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
