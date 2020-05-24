import React from 'react';
import ReactDOM from 'react-dom';
// react router can grab the param from url, and specify which component to respond
// import {Router, Route, Link} from 'react-router';
// import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, Switch, IndexRoute} from 'react-router-dom';
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
          <Link to="/" className="item">Home</Link>
          <br></br>
          <Link to="/tv" className="item">TVs</Link>
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
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
  }

  render() {
  return (<div><h3>I am a show {this.props.match.params.id}</h3></div>
   ); 
  }
}

class Home extends React.Component {
  render() {
    return (<div><h3>Home Page</h3></div>
  ); 
  }
}

/* Comment Box ReactDom
ReactDOM.render(
  <React.StrictMode>
    <CommentBox url="../comments.json" />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  (
  <Router>
    <Switch>
      <Route path="/tv/show/:id" component={Show} />
      <Route path="/tv" component={TV} />
      <Route path="/" component={App}/>
    </Switch>
    <Route exact path="/" component={Home}/>
  </Router>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
