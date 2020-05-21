import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CommentBox from './comment/CommentBox';
import * as serviceWorker from './serviceWorker';

// simulate how server communicate back the comment
var comments = [
    {"author":"Joe", "date":"5 minutes ago", "text":"Hi there"},
    {"author":"Mary", "date":"12 minutes ago", "text":"Nice to meet you!"},
]; 

ReactDOM.render(
  <React.StrictMode>
    <CommentBox data={comments} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
