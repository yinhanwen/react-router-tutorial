import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
// new
import Repo from './modules/Repo'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}/>

      // new
      <Route path="/repos/:userName/:repoName/:name" component={Repo}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
  </Router>
), document.getElementById('app'))
