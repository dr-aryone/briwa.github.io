import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Credits from './components/Credits';

const render = () => {
  ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/credits" component={Credits} />
      </div>
    </Router>,
    document.getElementById('app'),
  );
};

render();
