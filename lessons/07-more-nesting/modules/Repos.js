import React from 'react'
import { Link } from 'react-router'

import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          {/*}<li><Link to="/repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>*/}
          <li><NavLink to="/repos/reactjs/react-router">React Routerrrrrr</NavLink></li>
          <li><NavLink to="/repos/facebook/react">Reactttttt</NavLink></li>
        </ul>
        {/* will render `Repo.js` when at /repos/:userName/:repoName */}
        {this.props.children}
      </div>
    )
  }
})
