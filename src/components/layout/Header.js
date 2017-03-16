import React from 'react'
import { IndexLink, Link } from "react-router"

const Header = () => {
  return (
    <div> 
       <ul>
        <li>
          <IndexLink activeClassName="active" to="/">Home</IndexLink>
        </li>
        <li>
          <Link activeClassName="active" to="/menu">Menu</Link>
        </li>
      </ul>
      <hr/>
    </div>
  )
}

export default Header