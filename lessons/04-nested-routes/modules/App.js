import React from 'react'
import { Link } from 'react-router'


//active link 2
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      // <div>
      //   <h1>React Router Tutorial</h1>
      //   <ul role="nav">
      //     <li><Link to="/about">About</Link></li>
      //     <li><Link to="/repos">Repos</Link></li>
      //   </ul>
      // </div>

      // active link
      // <div>
      //   <h1>React Router Tutorial</h1>
      //   <ul role="nav">
      //     <li><Link to="/about" activeClassName="active">About</Link></li>
      //     <li><Link to="/repos" activeClassName="active">Repos</Link></li>
      //   </ul>
      //
      //   {/* add this */}
      //   {this.props.children}
      // </div>

      //active link 2
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {/* add this */}
        {this.props.children}
      </div>

    )
  }
})
